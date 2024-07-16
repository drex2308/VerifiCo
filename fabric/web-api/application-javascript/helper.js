/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const { buildCAClient, registerAndEnrollUser, enrollAdmin, enrollAdmin2, registerAndEnrollAppUser } = require('../../test-application/javascript/CAUtil.js');
const { Gateway, Wallets } = require('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const path = require('path');
const { buildCCPOrg1, buildWallet, buildCCPOrg2 } = require('../../test-application/javascript/AppUtil.js');
const channelName = 'mychannel';
const chaincodeName = 'ledger';
const mspOrg1 = 'Org1MSP';
const mspOrg2 = 'Org2MSP';
const walletPath = path.join(__dirname, 'wallet');
let userId = 'appUser';

exports.registerAndGerSecret = async (orgMspId, userId, affiliation) => {
    const secret = await registerAndEnrollUser(caClient, wallet, orgMspId, userId, affiliation);
    if(secret) {
        var response = {
            success:true,
            secret:secret,
            message:"Sucessfully registered and enrolled"
        }

    }
    else {
        var response = {
            success:false,
            message:"Registeration failure"
        }
    }
    return response;
    
}
 exports.startup = async() => {
    try {
        ccp = buildCCPOrg1();
        ccp2=buildCCPOrg2();
        caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com');
        caClient2= buildCAClient(FabricCAServices, ccp2, 'ca.org2.example.com');
        wallet = await buildWallet(Wallets, walletPath);
        const enrolladmin = await enrollAdmin(caClient, wallet, mspOrg1);        
        if(!enrolladmin) {
            console.log(`Enrolling admin failed: ${enrolladmin}`);
        }
        const enrolladmin2 = await enrollAdmin2(caClient2, wallet, mspOrg2);
        if(!enrolladmin2) {
            console.log(`Enrolling admin failed: ${enrolladmin}`);
        }
        let response = await registerAndEnrollAppUser(caClient2, wallet, mspOrg2, userId, 'org2.department1');
        return true;
    } catch (error) {
        console.error(`******** FAILED to run the application: ${error}`);
    }
 }

 exports.fetchasset = async(assetid,res) => {
    const gateway = new Gateway();
    try {
        await gateway.connect(ccp2, {
            wallet,
            identity: userId,
            discovery: { enabled: true, asLocalhost: true } 
        });
        const network = await gateway.getNetwork(channelName);
        const contract = network.getContract(chaincodeName);
        console.log('\n--> submit Transaction: ReadAsset, function returns information about an asset');
        console.log(assetid);
        result = await contract.submitTransaction('ReadAsset', assetid);
        console.log(result.toString());
        const hash = JSON.parse(result.toString()).hash;
        if(!hash) {
            res.json({sucess:false,messsage:"failure"});
        }
        console.log("Retrieved successfully");
        const response = {
            success:true,
            hash:hash
        }
        res.json(response)
    }
    catch (error) {
        console.error(`******** FAILED to run the application: ${error}`);
        res.json({success:false, msg:`******** FAILED to run the application: ${error}`})
    }
 }
 
 exports.setupUser = async (username) => {
    gateway = new Gateway();
    try {
        await gateway.connect(ccp, {
            wallet,
            identity: username,
            discovery: { enabled: true, asLocalhost: true } 
        });
        network = await gateway.getNetwork(channelName);
        contract = network.getContract(chaincodeName);
    }
    catch (error) {
        console.error(`******** FAILED to run the application: ${error}`);
    }
 }
 
 exports.scrapuser = async(res) => {
     try{
     gateway.disconnect();
     console.log("User logged out");
     res.json({success:true});
     }
     catch (error) {
        console.log("User logged out");
        res.json({success:true}); 
     }
 }
 exports.saveCred = async( username, secret) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("webAppdb");
        var myobj = { username: username, secret: secret };
        dbo.collection("Credsup").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
 }

 exports.docinsert = async(docId,holder,issuer,hash) => {

    console.log('\n--> Submit Transaction: CreateAsset, creates new asset ');
    await contract.submitTransaction('CreateAsset', docId, holder, issuer, hash);
    console.log('*** Result: committed');
    return true;
 }