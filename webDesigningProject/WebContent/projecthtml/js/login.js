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

	var inputOfemail = document.loginForm.email.value;
	var inputOfPassword = document.loginForm.psw.value;
	var email = getCookie(inputOfemail);
	var password = getCookie(inputOfemail + inputOfPassword)
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

		if (document.loginForm.email.value != "") {

			

			var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			if (document.loginForm.email.value.match(emailPattern)) {

				document.getElementById('emailerror').style.display = 'none';

				var email = getCookie(document.loginForm.email.value);
				var password = getCookie(document.loginForm.psw.value);

				if (email == document.loginForm.email.value) {

					if (password == document.loginForm.psw.value) {

					} else {
						document.getElementById('passwordError').style.display = 'block';
						document.getElementById('passwordError').innerHTML = "password is incorrect!! ";
					}
				} else {
					document.getElementById('emailerror').style.display = 'block';
					document.getElementById('emailerror').innerHTML = "email is not registered!! ";

				}
			} else {
				document.getElementById('emailerror').style.display = 'block';
				document.getElementById('emailerror').innerHTML = "Please enter a valid email";
			}

		}

	} else if (document.loginForm.email.value != ""
			&& document.loginForm.psw.value != "") {
		if (document.loginForm.email.value != "") {

			document.getElementById('passwordError').style.display = 'none';

			var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			if (document.loginForm.email.value.match(emailPattern)) {

				document.getElementById('emailerror').style.display = 'none';

				var email = getCookie(document.loginForm.email.value);
				var password = getCookie(document.loginForm.email.value+document.loginForm.psw.value);
				 var name =getCookie(document.loginForm.email.value+document.loginForm.psw.value+"active")

				if (email == document.loginForm.email.value) {

					if (password == document.loginForm.psw.value) {

						var d = new Date();

						d
								.setTime(d.getTime()
										+ (365 * 24 * 60 * 60 * 1000));

						var expires = "expires="
								+ d.toUTCString();

						document.cookie = "active"+ "=" + name
						+ ";" + expires;
						
						window.location
						.replace("http://localhost:8080/webDesigningProject/projecthtml/home_project.html");

						
					} else {
						document.getElementById('passwordError').style.display = 'block';
						document.getElementById('passwordError').innerHTML = "password is incorrect!! ";
					}
				} else {
					document.getElementById('emailerror').style.display = 'block';
					document.getElementById('emailerror').innerHTML = "email is not registered!! ";

				}
			} else {
				document.getElementById('emailerror').style.display = 'block';
				document.getElementById('emailerror').innerHTML = "Please enter a valid email";
			}

		}

	}

}

function showPassword() {
	var x = document.loginForm.psw.value;

	if (x != '') {
		document.getElementById('passwordError').style.display = 'none';
		var checked = document.getElementById("Showpassword").checked;
		if (document.loginForm.psw.type === "password" && checked) {
			document.loginForm.psw.type = "text";
		} else {
			document.loginForm.psw.type = "password";
		}
	} else {
		document.getElementById('passwordError').innerHTML = "Please enter Password";
	}

}

function validateEmail() {

	if (document.loginForm.email.value == "") {
		document.getElementById('passwordError').style.display = 'none';
		document.getElementById('emailerror').style.display = 'block';
		document.getElementById('emailerror').innerHTML = "Email is Mandatory";

	} else if (document.loginForm.email.value != "") {

		var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if (document.loginForm.email.value.match(emailPattern)) {

			var email = getCookie(document.loginForm.email.value);

			if (email == document.loginForm.email.value) {
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

}

function validatepassword() {

	if (document.loginForm.psw.value == "") {

		document.getElementById('passwordError').style.display = 'block'
		document.getElementById('passwordError').innerHTML = "Password is Mandatory";

		if (document.loginForm.email.value == "") {
			document.getElementById('passwordError').style.display = 'none';
			document.getElementById('emailerror').style.display = 'block';
			document.getElementById('emailerror').innerHTML = "Email is Mandatory";

		} else if (document.loginForm.email.value != "") {

			var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			if (document.loginForm.email.value.match(emailPattern)) {

				var email = getCookie(document.loginForm.email.value);

				if (email == document.loginForm.email.value) {
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

	} else if (document.loginForm.email.value != "") {

		if (document.loginForm.email.value == "") {
			document.getElementById('emailerror').style.display = 'block';
			document.getElementById('emailerror').innerHTML = "Email is Mandatory";

		} else if (document.loginForm.email.value != "") {

			document.getElementById('passwordError').style.display = 'none';

			var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			if (document.loginForm.email.value.match(emailPattern)) {

				var email = getCookie(document.loginForm.email.value);

				if (email == document.loginForm.email.value) {
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

	}

}