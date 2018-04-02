function getCookie(UserEmail) {
	var name = UserEmail + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
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
	
	var inputOfemail =document.loginForm.email.value;
	var inputOfPassword= document.loginForm.psw.value;
	var email = getCookie(inputOfemail);
	var password = getCookie(inputOfemail+inputOfPassword)
	if (email != "") {
		alert("Welcome again " + email);

	}
	if (password != "") {
		alert("Welcome again your password is " + passowrd);
	}
}

function validateDetails() {

	if (document.loginForm.email.value == ""
			&& document.loginForm.psw.value == "") {
		document.getElementById('emailerror').style.display = 'block';
		document.getElementById('passwordError').style.display = 'block'
		document.getElementById('emailerror').innerHTML = "Email is Mandatory";
		document.getElementById('passwordError').innerHTML = "Password is Mandatory";
	}

	else if (document.loginForm.email.value == "") {
		document.getElementById('passwordError').style.display = 'none';
		document.getElementById('emailerror').style.display = 'block';
		document.getElementById('emailerror').innerHTML = "Email is Mandatory";

	} else if (document.loginForm.psw.value == "") {
		document.getElementById('emailerror').style.display = 'none';
		document.getElementById('passwordError').style.display = 'block'
		document.getElementById('passwordError').innerHTML = "Password is Mandatory";

	} else if (document.loginForm.email.value != ""
			&& document.loginForm.psw.value != "") {
		document.getElementById('emailerror').style.display = 'none';
		document.getElementById('passwordError').style.display = 'none';
		var email = getCookie(document.loginForm.email.value );
		var password = getCookie(document.loginForm.psw.value);

		if (email == document.loginForm.email.value) {

			if (password == document.loginForm.psw.value) {
				alert("success")
			} else {
				alert("password is incorrect!!")
			}
		} else {
			alert("email is not correct")
		}
	}

}


function showPassword(){ 
	var x = document.loginForm.psw.value;
	
	if(x!=''){
		document.getElementById('passwordError').style.display = 'none';
		var checked=  document.getElementById("Showpassword").checked;
if (document.loginForm.psw.type === "password"  && checked) {
	document.loginForm.psw.type = "text";
} else {
	document.loginForm.psw.type = "password";
}
}
else{
	document.getElementById('passwordError').innerHTML = "Please enter Password";
}
	
}