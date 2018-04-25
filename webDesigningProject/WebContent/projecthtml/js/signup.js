/*
 * 
 * Function for getting Cookie
 */

function getCookie(value) {
	var name = value + "=";
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
 * Function for validating form on cick of sumit and if all conditions are valid setting up cookie
 * for email ,password and active field
 */

function saveDetails() {

	if (validateFirstName() && validateLastName() && validateEmail()
			&& validatePassword() && validateConfirmPswd() && validatePhoneNumber()) {

		var d = new Date();

		d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));

		var expires = "expires=" + d.toUTCString();

		emailValue = escape(document.signupForm.email.value);

		pswValue = escape(document.signupForm.passwordInput.value);

		name = escape(document.signupForm.nameInput.value);

		document.cookie = emailValue + "=" + emailValue + ";" + expires;

		document.cookie = "active" + "=" +"WELCOME "+ name + ";" + expires;

		document.cookie = emailValue + pswValue + "=" + pswValue + ";"
				+ expires;

		document.cookie = emailValue + pswValue + "active" + "=" + name + ";"
				+ expires;

		document.cookie = emailValue + "active" + "=" + name + ";" + expires;

		window.location
				.replace("http://localhost:8080/webDesigningProject/projecthtml/home_project.html");

	}
}


/*
 * 
 * Function for redirecting to home page on click of cancel button
 */
function cancel() {
	window.location
			.replace("http://localhost:8080/webDesigningProject/projecthtml/home_project.html");

}


/*
 * 
 * Function for validating firstname
 */

function validateFirstName() {
	if (document.signupForm.nameInput.value == "") {
		document.getElementById('nameError').style.display = 'block';
		document.getElementById('nameError').innerHTML = "Please Enter valid Name ";
	} else if (document.signupForm.nameInput.value != "") {
		var firtNamePattern = /^[a-zA-Z]*$/;
		if (document.signupForm.nameInput.value.match(firtNamePattern)) {
			document.getElementById('nameError').style.display = 'none';
			return true;
		} else {

			document.getElementById('nameError').style.display = 'block';
			document.getElementById('nameError').innerHTML = "Please Enter only alphabets ";
		}
	}

}


/*
 * 
 * Function for validating firstname and lastname
 */
function validateLastName() {

	if (document.signupForm.lastnameInput.value != "") {
		var firtNamePattern = /^[a-zA-Z]*$/;
		if (document.signupForm.lastnameInput.value.match(firtNamePattern)) {
			document.getElementById('lastNameError').style.display = 'none';
			if (validateFirstName()) {
				return true;
			}

		} else {
			document.getElementById('lastNameError').style.display = 'block';
			document.getElementById('lastNameError').innerHTML = "Please Enter only alphabets ";
			validateFirstName();

		}

	} else {

		if (validateFirstName()) {
			return true;
		}

	}
}


/*
 * 
 * Function for validating lastname and email
 */

function validateEmail() {
	if (document.signupForm.email.value == "") {

		document.getElementById('emailerror').style.display = 'block';
		document.getElementById('emailerror').innerHTML = "Please Enter valid Email ";

		validateLastName();
	} else {

		var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if (document.signupForm.email.value.match(emailPattern)) {

			document.getElementById('emailerror').style.display = 'none';

			if (validateLastName()) {
				return true;
			}

			var emailProvided = getCookie(document.signupForm.email.value);
			if (emailProvided != '') {
				document.getElementById('emailerror').style.display = 'block';
				document.getElementById('emailerror').innerHTML = "Email is already registered Please login ";

				validateLastName();
			}
		} else {

			document.getElementById('emailerror').style.display = 'block';
			document.getElementById('emailerror').innerHTML = "Please Enter valid Email ";

			validateLastName();
		}
	}

}


/*
 * 
 * Function for validating password and email
 */
function validatePassword() {

	if (document.signupForm.passwordInput.value == "") {
		document.getElementById('passwordError').style.display = 'block';
		document.getElementById('passwordError').innerHTML = "Password is Mandatory";
		validateEmail();
	}

	else {
		if (document.signupForm.passwordInput.value != "") {

			document.getElementById('passwordError').style.display = 'none';
			if (validateEmail()) {
				return true;
			}
		}

	}
}


/*
 * 
 * Function for validating password and confirm password
 */
function validateConfirmPswd() {

	if (document.signupForm.confirmpasswordInput.value == "") {

		document.getElementById('confirmError').style.display = 'block';
		document.getElementById('confirmError').innerHTML = "Re-enter the password";
		validatePassword();

	} else if (document.signupForm.confirmpasswordInput.value != "") {

		if (document.signupForm.confirmpasswordInput.value == document.signupForm.passwordInput.value) {

			document.getElementById('passwordError').style.display = 'none';
			document.getElementById('confirmError').style.display = 'none';
			return true;
		} else {
			document.getElementById('confirmError').style.display = 'block';
			document.getElementById('confirmError').innerHTML = "Password is not matching";
			validatePassword();
		}
	}
}



/*
 * 
 * Function for validating phonenumber and confirmpassword
 */
function validatePhoneNumber(){
	
	var phoneNumberPattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

	if (document.signupForm.phoneNumberInput.value != "") {
		if (document.signupForm.phoneNumberInput.value
				.match(phoneNumberPattern)) {
			document.getElementById('phoneError').style.display = 'none';
			
			if(validateConfirmPswd()){
				return true;
			}

			
		}else{
			
			document.getElementById('phoneError').style.display = 'block';
			document.getElementById('phoneError').innerHTML = "Please enter only numbers";
			validateConfirmPswd();
			
		}
		}else{
			if(validateConfirmPswd()){
				return true;
			}
			
		}
}


/*
 * 
 * Function for redirecting  to homepage  onclick of already a user button
 */
function redirectToLogin() {

	window.location
			.replace("http://localhost:8080/webDesigningProject/projecthtml/HelloHotelLoginForm.html");

}


/*
 * 
 * Function for gmail api
 */

function handleClientLoad() {
	// Loads the client library and the auth2 library together for efficiency.
	// Loading the auth2 library is optional here since `gapi.client.init` function will load
	// it if not already loaded. Loading it upfront can save one network request.
	gapi.load('client:auth2', initClient);
}

/*
 * 
 * Function for gmail api
 */


function initClient() {
	// Initialize the client with API key and People API, and initialize OAuth with an
	// OAuth 2.0 client ID and scopes (space delimited string) to request access.
	gapi.client
			.init(
					{
						/*apiKey: 'YOUR_API_KEY',*/
						discoveryDocs : [ "https://people.googleapis.com/$discovery/rest?version=v1" ],
						clientId : '954523330166-hpps93s4bhav6s88icks749ocghsgj9g.apps.googleusercontent.com',
						scope : 'profile'
					})
			.then(
					function() {
						// Listen for sign-in state changes.
						gapi.auth2.getAuthInstance().isSignedIn
								.listen(updateSigninStatus);

						var user = GoogleAuth.currentUser.get();

						// Handle the initial sign-in state.
						updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn
								.get());
					});
}



/*
 * 
 * Function for gmail api
 */


function updateSigninStatus(isSignedIn) {
	// When signin status changes, this function is called.
	// If the signin status is changed to signedIn, we make an API call.
	if (isSignedIn) {

		makeApiCall();
		redirecttoHomePageForGmailLogin();
		/*listLabels();*/
	}
}

/*
 * 
 * Function for gmail api
 */


function handleSignInClick(event) {
	// Ideally the button should only show up after gapi.client.init finishes, so that this
	// handler won't be called before OAuth is initialized.
	gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
	gapi.auth2.getAuthInstance().signOut();
}

function makeApiCall() {
	// Make an API call to the People API, and print the user's given name.
	gapi.client.people.people.get({
		'resourceName' : 'people/me',
		'requestMask.includeField' : 'person.names'
	}).then(function(response) {
		console.log('Hello, ' + response.result.names[0].givenName);
	}, function(reason) {
		console.log('Error: ' + reason.result.error.message);
	});
}


/*
 * 
 * Function for facebook api
 */

window.fbAsyncInit = function() {
	FB.init({
		appId : '242138452997498',
		cookie : true,
		xfbml : true,
		version : 'v2.8'
	});

	FB.AppEvents.logPageView();

};


/*
 * 
 * Function for facebook api
 */
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/*
 * 
 * Function for facebook api
 */

function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}


/*
 * 
 * Function for facebook api
 */

function statusChangeCallback(response) {

	console.log('Welcome!  Fetching your information.... ');
	FB.api('/me?fields=first_name,last_name,email', function(response) {
		console.log('Successful login for: ' + response.name);
		document.getElementById('status').innerHTML = 'Thanks for logging in, '
				+ response.name + '!';
	});
}


/*
 * 
 * Function for redirecting to  home page for signed in user using gmail api
 * and setting the cookie as gmail
 */

function redirecttoHomePageForGmailLogin() {

	window.location
			.replace("http://localhost:8080/webDesigningProject/projecthtml/home_project.html");

	var d = new Date();

	d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));

	var expires = "expires=" + d.toUTCString();

	document.cookie = "gmail" + "=" + "gmail" + ";" + expires;

}
