
/*
 * 
 * Function for validating email and checking wether email is already registered.
 */

function validateEmail() {

	if (document.PassWordForm.email.value == "") {
		document.getElementById('passwordError').style.display = 'none';
		document.getElementById('emailerror').style.display = 'block';
		document.getElementById('emailerror').innerHTML = "Email is Mandatory";

	} else if (document.PassWordForm.email.value != "") {

		var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if (document.PassWordForm.email.value.match(emailPattern)) {

			var email = getCookie(document.PassWordForm.email.value);

			if (email == document.PassWordForm.email.value) {
				document.getElementById('emailerror').style.display = 'none';
				return true;
			} else {
				document.getElementById('emailerror').style.display = 'block';
				document.getElementById('emailerror').innerHTML = "Email is not registered!! Please SIGN UP";

			}
		} else {
			document.getElementById('emailerror').style.display = 'block';
			document.getElementById('emailerror').innerHTML = "Please enter a valid email";
		}

	}

}


/*
 * 
 * Function for validating email and password
 */
function validatepassword() {

	if (document.PassWordForm.psw.value == "") {

		document.getElementById('passwordError').style.display = 'block';
		document.getElementById('passwordError').innerHTML = "Please enter new password";

		if (document.PassWordForm.email.value == "") {
			document.getElementById('emailerror').style.display = 'block';
			document.getElementById('emailerror').innerHTML = "Email is Mandatory";

		} else if (document.PassWordForm.email.value != "") {

			var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			if (document.PassWordForm.email.value.match(emailPattern)) {

				var email = getCookie(document.PassWordForm.email.value);

				if (email == document.PassWordForm.email.value) {
					document.getElementById('emailerror').style.display = 'none';
					
				} else {
					document.getElementById('emailerror').style.display = 'block';
					document.getElementById('emailerror').innerHTML = "Email is not registered!! Please SIGN UP";

				}
			} else {
				document.getElementById('emailerror').style.display = 'block';
				document.getElementById('emailerror').innerHTML = "Please enter a valid email";
			}

		}

	} else {

		if (document.PassWordForm.email.value == "") {
			document.getElementById('passwordError').style.display = 'none';
			document.getElementById('emailerror').style.display = 'block';
			document.getElementById('emailerror').innerHTML = "Email is Mandatory";

		} else if (document.PassWordForm.email.value != "") {

			var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			if (document.PassWordForm.email.value.match(emailPattern)) {

				var email = getCookie(document.PassWordForm.email.value);

				if (email == document.PassWordForm.email.value) {
					document.getElementById('emailerror').style.display = 'none';
					return true;
				} else {
					document.getElementById('emailerror').style.display = 'block';
					document.getElementById('emailerror').innerHTML = "Email is not registered!! Please SIGN UP";

				}
			} else {
				document.getElementById('emailerror').style.display = 'block';
				document.getElementById('emailerror').innerHTML = "Please enter a valid email";
			}

		}

	}
}



/*
 * 
 * Function for validating password and confirm password
 */

function confirmPassword() {

	if (document.PassWordForm.cnfrmpsw.value == "") {

		document.getElementById('cnfrmPasswordError').style.display = 'block';
		document.getElementById('cnfrmPasswordError').innerHTML = "Please confirm new password";

		if (document.PassWordForm.psw.value == "") {

			document.getElementById('passwordError').style.display = 'block';
			document.getElementById('passwordError').innerHTML = "Please enter new password";
		} else {
			document.getElementById('passwordError').style.display = 'none';
		}
	} else if (document.PassWordForm.cnfrmpsw.value != "") {

		if (document.PassWordForm.cnfrmpsw.value == document.PassWordForm.psw.value) {

			document.getElementById('cnfrmPasswordError').style.display = 'none';
			
			var d = new Date();

			d.setTime(d.getTime()
							+ (365 * 24 * 60 * 60 * 1000));

			var expires = "expires="
					+ d.toUTCString();

            emailValue = escape(document.PassWordForm.email.value);
			pswValue = escape(document.PassWordForm.cnfrmpsw.value);
			
			name = getCookie(document.PassWordForm.email.value+"active");
			
			document.cookie = emailValue+"active"+ "=" + name
			+ ";" + expires;
			
			
			document.cookie = emailValue + "="
					+ emailValue + ";"
					+ expires;
			
			document.cookie = emailValue + pswValue + "="
			+ pswValue + ";"
			+ expires;
			
			document.cookie = emailValue + pswValue+"active"+ "=" + name
			+ ";" + expires;

			
			
			return true;
		} else {

			document.getElementById('cnfrmPasswordError').style.display = 'block';
			document.getElementById('cnfrmPasswordError').innerHTML = "Password is not matching";
			if (document.PassWordForm.psw.value == "") {

				document.getElementById('passwordError').style.display = 'block';
				document.getElementById('passwordError').innerHTML = "Please enter new password";
			} else {
				document.getElementById('passwordError').style.display = 'none';
			}

		}
	}
}


/*
 * 
 * Function for get cookie
 */
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






 /*
  * 
  * Function for displaying the modal after updating password is successfull
  */

function updatePassword(){
	
	if(validateEmail() && validatepassword() && confirmPassword()){
		document.getElementById('changePassword').style.display = 'none';
		

		var modal = document.getElementById('myModal');
		var passwordForm =document.getElementById('changePassword');
		passwordForm.style.display="block";
		modal.style.display = "block";
	}
}



/*
 * 
 * Function for redirecting to login page after sucessfull updating password
 */

function login(){
	window.location
	.replace("http://localhost:8080/webDesigningProject/projecthtml/HelloHotelLoginForm.html");
	
	
}