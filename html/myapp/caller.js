function getNavUrl() {
    return window.location.search.replace("?", "");
};

function getParameters(url) {
    var params = {};
    url = url.split('&');
    var length = url.length;
    for(var i=0; i<length; i++) {
        var prop = url[i].slice(0, url[i].search('='));
        var value = url[i].slice(url[i].search('=')).replace('=', '');
        params[prop] = value;
    }
    return params;
};

function apicallback(response) {
	var res=JSON.parse(response);
	if(res.success == true) {
		var result = res.hash;
		console.log("O/P: "+result);
		var viewurl = "http://localhost:8080/ipfs/"+result;
		location.href = viewurl;
	}
		
}

function callapi() {
	var paramss = getParameters(getNavUrl());
	var data = JSON.stringify({
  		"assetid": paramss.id
	});

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = false;

	xhr.addEventListener("readystatechange", function() {
	  if(this.readyState === 4 && this.status==200) {
    	console.log(this.responseText);
    	apicallback(this.responseText);
  		}
  	  else if (this.status>=400) {
  			alert("Error calling API: "+JSON.parse(this.responseText).code);	
  		}
  		
	});
	xhr.open("POST", "http://localhost:4000/verifier/getfile");
	xhr.setRequestHeader("Content-Type", "application/json");
	
	xhr.send(data);	
}

callapi();
