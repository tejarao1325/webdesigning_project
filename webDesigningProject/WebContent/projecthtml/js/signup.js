function saveDetails() {

	if (document.signupForm.nameInput.value == "") {
		document.getElementById('nameError').style.display = 'block';
		document.getElementById('nameError').innerHTML = "Please Enter valid Name ";
	} else if (document.signupForm.nameInput.value != "") {
		var firtNamePattern = /^[a-zA-Z]*$/;
		if (document.signupForm.nameInput.value.match(firtNamePattern)) {
			document.getElementById('nameError').style.display = 'none';

			if (document.signupForm.lastnameInput.value != "") {
				var firtNamePattern = /^[a-zA-Z]*$/;
				if (document.signupForm.lastnameInput.value
						.match(firtNamePattern)) {
					document.getElementById('lastNameError').style.display = 'none';

					if (document.signupForm.email.value == "") {
						document.getElementById('nameError').style.display = 'none';

						document.getElementById('emailerror').style.display = 'block';
						document.getElementById('emailerror').innerHTML = "Please Enter valid Email ";

					} else {

						var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
						if (document.signupForm.email.value.match(emailPattern)) {

							document.getElementById('emailerror').style.display = 'none';
							if (document.signupForm.passwordInput.value == "") {
								document.getElementById('nameError').style.display = 'none';
								document.getElementById('lastNameError').style.display = 'none';
								document.getElementById('emailerror').style.display = 'none';
								document.getElementById('passwordError').style.display = 'block';
								document.getElementById('passwordError').innerHTML = "Password is Mandatory";
							}

							else {
								if (document.signupForm.passwordInput.value != "") {

									document.getElementById('nameError').style.display = 'none';
									document.getElementById('lastNameError').style.display = 'none';
									document.getElementById('emailerror').style.display = 'none';
									document.getElementById('passwordError').style.display = 'none';
									document.getElementById('confirmError').style.display = 'none';
									if(document.signupForm.confirmpasswordInput.value == ""){
										
										
										document.getElementById('nameError').style.display = 'none';
										document.getElementById('lastNameError').style.display = 'none';
										document.getElementById('emailerror').style.display = 'none';
										document.getElementById('passwordError').style.display = 'none';
										document.getElementById('confirmError').style.display = 'block';
										document.getElementById('confirmError').innerHTML = "Re-enter the password";
										
									}
									else if (document.signupForm.confirmpasswordInput.value != "") {

										if (document.signupForm.confirmpasswordInput.value == document.signupForm.passwordInput.value) {

											document
													.getElementById('confirmError').style.display = 'none';

											document
													.getElementById('passwordError').style.display = 'none';

											var d = new Date();

											d.setTime(d.getTime()
															+ (365 * 24 * 60 * 60 * 1000));

											var expires = "expires="
													+ d.toUTCString();

											emailValue = escape(document.signupForm.email.value);

											pswValue = escape(document.signupForm.passwordInput.value);

											document.cookie = emailValue + "="
													+ emailValue + ";"
													+ expires;

											document.cookie = emailValue
													+ pswValue + "=" + pswValue
													+ ";" + expires;

											var phoneNumberPattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

											if (document.signupForm.phoneNumberInput.value != "") {
												if (document.signupForm.phoneNumberInput.value
														.match(phoneNumberPattern)) {
													document
															.getElementById('phoneError').style.display = 'none';
													window.location.replace("http://localhost:8080/webDesigningProject/projecthtml/home_project.html");
												} else {
													document
															.getElementById('phoneError').style.display = 'block';
													document
															.getElementById('phoneError').innerHTML = "Please enter valid phonenumber";
												}
											}
											window.location.replace("http://localhost:8080/webDesigningProject/projecthtml/home_project.html");

										}
									}

								}

							}
						} else {
							document.getElementById('emailerror').style.display = 'block';

							document.getElementById('emailerror').innerHTML = "Please Enter a valid Email ";
						}

					}

				} else {
					document.getElementById('lastNameError').style.display = 'block';
					document.getElementById('lastNameError').innerHTML = "Please enter  only alphabets";
				}
			}
			else if (document.signupForm.email.value == "") {
				document.getElementById('nameError').style.display = 'none';

				document.getElementById('emailerror').style.display = 'block';
				document.getElementById('emailerror').innerHTML = "Please Enter valid Email ";

			} else if (document.signupForm.passwordInput.value == "") {
				document.getElementById('nameError').style.display = 'none';
				document.getElementById('lastNameError').style.display = 'none';
				document.getElementById('emailerror').style.display = 'none';
				document.getElementById('passwordError').style.display = 'block';
				document.getElementById('passwordError').innerHTML = "Password is Mandatory";
				var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
				if (document.signupForm.email.value.match(emailPattern)) {
					
				}else{
					
					document.getElementById('emailerror').style.display = 'block';
					document.getElementById('emailerror').innerHTML = "Please Enter valid Email ";
				}
			} else if (document.signupForm.confirmpasswordInput.value == "") {
				document.getElementById('nameError').style.display = 'none';
				document.getElementById('lastNameError').style.display = 'none';
				document.getElementById('emailerror').style.display = 'none';
				document.getElementById('passwordError').style.display = 'none';
				document.getElementById('confirmError').style.display = 'block';
				document.getElementById('confirmError').innerHTML = "Re enter the password";
			} else {
				document.getElementById('nameError').style.display = 'none';
				document.getElementById('lastNameError').style.display = 'none';
				document.getElementById('emailerror').style.display = 'none';
				document.getElementById('passwordError').style.display = 'none';
				document.getElementById('confirmError').style.display = 'none';
				document.getElementById('phoneError').style.display = 'none';
				if (document.signupForm.email.value != "") {
					document.getElementById('nameError').style.display = 'none';
					document.getElementById('lastNameError').style.display = 'none';
					document.getElementById('emailerror').style.display = 'none';
					document.getElementById('passwordError').style.display = 'none';
					document.getElementById('confirmError').style.display = 'none';
					document.getElementById('phoneError').style.display = 'none';

					var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
					if (document.signupForm.email.value.match(emailPattern)) {

						document.getElementById('emailerror').style.display = 'none';

						if (document.signupForm.passwordInput.value != "") {

							if (document.signupForm.confirmpasswordInput.value != "") {

								if (document.signupForm.confirmpasswordInput.value == document.signupForm.passwordInput.value) {

									document.getElementById('confirmError').style.display = 'none';

									document.getElementById('passwordError').style.display = 'none';

									var d = new Date();

									d
											.setTime(d.getTime()
													+ (365 * 24 * 60 * 60 * 1000));

									var expires = "expires=" + d.toUTCString();

									emailValue = escape(document.signupForm.email.value);

									pswValue = escape(document.signupForm.passwordInput.value);

									document.cookie = emailValue + "=" + emailValue
											+ ";" + expires;

									document.cookie = emailValue + pswValue + "="
											+ pswValue + ";" + expires;

									window.location.replace("http://localhost:8080/webDesigningProject/projecthtml/home_project.html");
									
									var phoneNumberPattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

									if (document.signupForm.phoneNumberInput.value != "") {
										if (document.signupForm.phoneNumberInput.value
												.match(phoneNumberPattern)) {
											document.getElementById('phoneError').style.display = 'none';
										} else {
											document.getElementById('phoneError').style.display = 'block';
											document.getElementById('phoneError').innerHTML = "Please enter valid phonenumber";
										}
									}

									window.location.replace("http://localhost:8080/webDesigningProject/projecthtml/home_project.html");
								} else {
									document.getElementById('confirmError').style.display = 'block';

									document.getElementById('confirmError').innerHTML = "Password is not matching";
								}

							} else {

								document.getElementById('passwordError').innerHTML = "Please Enter valid Email ";
							}
						}

					} else {
						document.getElementById('emailerror').style.display = 'block';

						document.getElementById('emailerror').innerHTML = "Please Enter a valid Email ";
					}
				}

			}


		} else {
			document.getElementById('nameError').style.display = 'block';
			document.getElementById('nameError').innerHTML = "Please enter only alphabets";
		}
	}

	
}




function cancel(){
	window.location.replace("http://localhost:8080/webDesigningProject/projecthtml/home_project.html");
	
	
}