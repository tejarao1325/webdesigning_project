function saveDetails() {

	if (document.loginForm.email.value == "") {

	}

	   var myDate = new Date();
	  myDate.setMonth(myDate.getMonth() + 12);
	cookievalue = escape(document.loginForm.email.value) ;
	document.cookie = email + "=" + cookievalue + ";" + myDate + ";domain=example.com;path=/";
	checkCookie();
}


function getCookie(email) {
    var name = email + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function checkCookie() {
    var email=getCookie("email");
    if (email != "") {
        alert("Welcome again " + email);
    
    }
}