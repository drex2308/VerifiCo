'use strict';
const http = require('http')
const util = require('util');
const express = require('express');
const app = express();
const { create } = require('ipfs-http-client');
const fileupload = require('express-fileupload');
const fs =  require('fs');
const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');
const bearerToken = require('express-bearer-token');
const constants = require('./constants.json')
const { Gateway, Wallets } = require('fabric-network');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const FabricCAServices = require('fabric-ca-client');
const path = require('path');
const cors = require('cors');
const channelName = 'mychannel';
const chaincodeName = 'ledger';
const mspOrg1 = 'Org1MSP';
const mspOrg2 = 'Org2MSP';
const walletPath = path.join(__dirname, 'wallet');
let userId = 'appUser';
const host = process.env.HOST || constants.host;
const port = process.env.PORT || constants.port;
const adminUserId = 'admin';
const adminUserPasswd = 'adminpw';
const ipfs = create();
const helper = require('./helper');
app.options('*', cors());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(fileupload());
// set secret variable
app.set('secret', 'ssssshhhhh');
app.use(expressJWT({
    secret: 'ssssshhhhh'
}).unless({
    path: ['/college/login', '/admin/login','/verifier/getfile','/college/logout']
}));
app.use(bearerToken());

app.use((req, res, next) => {
    console.log('New req for %s', req.originalUrl);
    if (req.originalUrl.indexOf('/college/logout') >= 0 ||req.originalUrl.indexOf('/verifier/getfile') >= 0 ||req.originalUrl.indexOf('/admin/login') >= 0 || req.originalUrl.indexOf('/college/login') >= 0) {
        return next();
    }
    var token = req.token;
    jwt.verify(token, app.get('secret'), (err, decoded) => {
        if (err) {
            console.log(`Error ================:${err}`)
            res.send({
                success: false,
                message: 'Failed to authenticate token. Make sure to include the ' +
                    'token returned from /users call in the authorization header ' +
                    ' as a Bearer token'
            });
            return;
        } else {
            req.username = decoded.username;
            req.orgname = decoded.orgName;
            console.log(util.format('Decoded from JWT token: username - %s, orgname - %s', decoded.username, decoded.orgName));
            return next();
        }
    });
});

helper.startup();
var server = http.createServer(app).listen(port, function () { console.log(`Server started on ${port}`) });
console.log('****************** SERVER STARTED ************************');
console.log('***************  http://%s:%s  ******************', host, port);
server.timeout = 240000;

function getErrorMessage(field) {
    var response = {
        success: false,
        message: field + ' field is missing or Invalid in the request'
    };
    return response;
}


// Admin login
app.post('/admin/login',async function(req,res) {
    var adminname=req.body.username;
    var adminpw = req.body.password;
    var orgName = req.body.orgName;
    if (!adminname) {
        res.json(getErrorMessage('\'adminname\''));
        return;
    }
    if (!adminpw) {
        res.json(getErrorMessage('\'adminpassword\''));
        return;
    }

    console.log("Admin authentication");
    if(adminname == adminUserId && adminpw == adminUserPasswd) {
        console.log("Authentication successful");
        var token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + parseInt(constants.jwt_expiretime),
            username: adminname,
            orgName: orgName
        }, app.get('secret'));
    
        var response = {
            success: true,
            message: adminname + ' logged in  Successfully',
            token:token
        };
        res.json(response);
    }
    else {
        console.log("Wrong credentails");
        res.json({ success: false, message: "Wrong credentials" });
    }

})


// Register and enroll college
app.post('/register', async function (req, res) {
    var username = req.body.username;
    var orgName = req.body.orgName;
    console.log('End point : /register');
    console.log('User name : ' + username);
    console.log('Org name  : ' + orgName);
    if (!username) {
        res.json(getErrorMessage('\'username\''));
        return;
    }
    if (!orgName) {
        res.json(getErrorMessage('\'orgName\''));
        return;
    }

    let response = await helper.registerAndGerSecret(mspOrg1, username, 'org1.department1');

    console.log('-- returned from registering the username %s for organization %s', username, orgName);
    if (response.success) {
        await helper.saveCred(username,response.secret);
        console.log('Successfully registered the username %s for organization %s', username, orgName);
        res.json(response);
    } else {
        console.log('Failed to register the username %s for organization %s with::%s', username, orgName, response);
        res.json(response);
    }

});

// Login authenticate college
app.post('/college/login', async function (req, res) {
    var username = req.body.username;
    var password = req.body.secret;
    var orgName = req.body.orgName;
    console.log('End point : /college login');
    console.log('User name : ' + username);
    console.log('Org name  : ' + orgName);
    if (!username) {
        res.json(getErrorMessage('\'username\''));
        return;
    }
    if (!password) {
        res.json(getErrorMessage('\'username\''));
        return;
    }
    if (!orgName) {
        res.json(getErrorMessage('\'orgName\''));
        return;
    }

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("webAppdb");
        var query = { username: username };
        dbo.collection("Credsup").find(query).toArray( function(err, result) {
            if (err) throw err;
            setTimeout(function () {
            const check = result[0].secret;
            console.log(check);
            if(check==req.body.secret){
                var token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + parseInt(constants.jwt_expiretime),
                    username: username,
                    orgName: orgName
                }, app.get('secret'));
                helper.setupUser(username);
                var response = {
                    success:true,
                    message:"Authentication successfull",
                    token:token,
                }
            }
            else {
                var response = {
                    success:false,
                    message:"Authentiction failure: Bad Creds"
                }
            }
            res.json(response);
            db.close();
        },4000);
        });
    });
    

});

app.post('/upload', function (req, res) {

    const file = req.files.file;
    const fileName = req.body.fileName;
    const filePath = 'files/' + fileName;
    const docid = req.body.docid;
    const holdername = req.body.studentid;
    const username=req.body.username;
    const orgName=req.body.orgName;

    file.mv(filePath, async (err) => {
        if(err){
            console.log('Error: failed to Download the file');
            return res.status(500).send(err);
        }

        const fileHash = await addFile(fileName, filePath);
        console.log(fileHash)
        let response={
            hash:fileHash
        };
        await helper.docinsert(docid,holdername,username,fileHash);
        setTimeout(function () {
        console.log("successfully added to blockchain")
        response.success=true;
        var token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + parseInt(constants.jwt_expiretime),
            username: username,
            orgName: orgName
        }, app.get('secret'));
        response.token=token;
        fs.unlink(filePath, (err) => {
            if (err) console.log(err)
        });
        console.log(response);
        res.json(response)
    },4000);
    })

});

const addFile = async (fileName, filePath) =>{
    const path = fs.readFileSync(filePath);
    const fileAdded = await ipfs.add({path: fileName, content: path});
    const fileHash = fileAdded.cid.string;
    console.log(fileHash);

    return fileHash;
}

app.post('/verifier/getfile', function (req, res) {

    const assetid = req.body.assetid;
    helper.fetchasset(assetid,res);
});

app.post('/college/logout', function (req, res) {

    helper.scrapuser(res);

});