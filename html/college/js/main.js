"use strict";

function apicallback(response,userid) {
	var res=JSON.parse(response);
	if(res.success == true) {
		localStorage.setItem("token",res.token);
		localStorage.setItem("userId",userid);
		location.href = "./dashboard/dashboard.html"
	}
	else {
		alert("Login failure:"+res.message);
	}
		
}

function callapi(userid,secret) {
	
	var data = JSON.stringify({
		  "username": userid,
		  "secret": secret,
		  "orgName": "org1"
		});

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = false;
	xhr.addEventListener("readystatechange", function() {
	  if(this.readyState === 4 && this.status==200) {
    		console.log(this.responseText);
    		apicallback(this.responseText,userid);
  		}
  	  else if (this.status>=400) {
  			alert("Error calling API: "+JSON.parse(this.responseText).code);	
  		}
  		
	});

	xhr.open("POST", "http://localhost:4000/college/login");
	xhr.setRequestHeader("Content-Type", "application/json");
	
	xhr.send(data);
	
}

function calllogin() {
	var userid = $("#userid").val();
	var secret = $("#secret").val();
	if(!userid) {
		alert("Userid required");
		return;
	}
	if(!secret) {
		alert("secret required");
		return;
	}
	callapi(userid,secret);
}


