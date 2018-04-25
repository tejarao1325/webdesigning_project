/*
 * 
 * Function for onload setting all the form as none
 */

window.onload = function() {
	
	document.getElementById('payPalForm').style.display = 'none';
	document.getElementById('creditCardForm').style.display = 'none';
	document.getElementById('netBankingForm').style.display = 'none';
	document.getElementById('debitCardForm').style.display = 'none';
	
}	


/*
 * 
 * Function for opening paypal form
 */

function openPaypalLogin (){
	document.getElementById('payPalForm').style.display = 'block';
	document.getElementById('creditCardForm').style.display = 'none';
	document.getElementById('netBankingForm').style.display = 'none';
	document.getElementById('debitCardForm').style.display = 'none';
}


/*
 * 
 * Function for opening creditcard form
 */
function openCrediCardLogin(){
	
	document.getElementById('payPalForm').style.display = 'none';
	document.getElementById('netBankingForm').style.display = 'none';
	document.getElementById('creditCardForm').style.display = 'block';
	document.getElementById('debitCardForm').style.display = 'none';
	
}



/*
 * 
 * Function for opening netbanking form
 */
function openNetBankingForm(){
	
	document.getElementById('payPalForm').style.display = 'none';
	document.getElementById('creditCardForm').style.display = 'none';
	document.getElementById('netBankingForm').style.display = 'block';
	document.getElementById('debitCardForm').style.display = 'none';
	
}


/*
 * 
 * Function for opening DebitCardForm
 */

function openDebitCardLogin(){
	
	document.getElementById('payPalForm').style.display = 'none';
	document.getElementById('creditCardForm').style.display = 'none';
	document.getElementById('netBankingForm').style.display = 'none';
	document.getElementById('debitCardForm').style.display = 'block';
}



/*
 * 
 * Function for validating paypal Details
 */

function validateDetails(){
	

	if (document.forms.payPalForm.email.value == ""
			&& document.forms.payPalForm.passwordinput.value == "") {
		document.getElementById('emailerror').style.display = 'block';
		document.getElementById('passwordError').style.display = 'block'
		document.getElementById('emailerror').innerHTML = "Email is Mandatory";
		document.getElementById('passwordError').innerHTML = "Password is Mandatory";
	}else if(document.forms.payPalForm.email.value != ""){
		document.getElementById('emailerror').style.display = 'none';
	}
	else if(document.forms.payPalForm.passwordinput.value != ""){
		document.getElementById('passwordError').style.display = 'none';
	}

	
}


/*
 * 
 * Function for displaying the password
 */

function showPassword() {
	var x = document.forms.payPalForm.passwordinput.value;

	if (x != '') {
		document.getElementById('passwordError').style.display = 'none';
		var checked = document.getElementById("Showpassword").checked;
		if (document.forms.payPalForm.passwordinput.type === "password" && checked) {
			document.forms.payPalForm.passwordinput.type = "text";
		} else {
			document.forms.payPalForm.passwordinput.type = "password";
		}
	} else {
		document.getElementById('passwordError').innerHTML = "Please enter Password";
	}

}



/*
 * 
 * Function for validating card detailss
 */

function validatecardDetails(){
	
	if (document.forms.creditCardForm.numberInput.value == ""
		&& document.forms.creditCardForm.nameInput.value == "" && document.forms.creditCardForm.cvvInput.value == "" ) {
		document.getElementById('cardError').style.display = 'block';
		document.getElementById('cardNameError').style.display = 'block';
		document.getElementById('cvvError').style.display = 'block';
		document.getElementById('cardError').innerHTML = "Please enter Card Number";
		document.getElementById('cardNameError').innerHTML = "Password enter card name";
		document.getElementById('cvvError').innerHTML = "Please enter CVV";
	}else if(document.forms.creditCardForm.numberInput.value == ""){
		document.getElementById('cardError').style.display = 'block';
		document.getElementById('cardError').innerHTML = "Please enter Card Number";
		
	}else if(document.forms.creditCardForm.nameInput.value == ""){
		document.getElementById('cardNameError').style.display = 'block';
		document.getElementById('cardError').style.display = 'none';
		
		document.getElementById('cardNameError').innerHTML = "Password enter card name";
		
	}else if(document.forms.creditCardForm.cvvInput.value == ""){
		document.getElementById('cvvError').style.display = 'block';
		document.getElementById('cvvError').innerHTML = "Please enter CVV";
		document.getElementById('cardError').style.display = 'none';
		document.getElementById('cardNameError').style.display = 'none';
		
	}else{
		document.getElementById('cardError').style.display = 'none';
		document.getElementById('cardNameError').style.display = 'none';
		document.getElementById('cvvError').style.display = 'none';
		
		var modal = document.getElementById('myModal');
		var creditCardForm =document.getElementById('creditCardForm');
		creditCardForm.style.display="block";
		modal.style.display = "block";
	}
}


function validateDebitcardDetails(){
	
	
	
	if (document.forms.debitCardForm.numberInput.value == ""
		&& document.forms.debitCardForm.nameInput.value == "" && document.forms.debitCardForm.cvvInput.value == "" ) {
		document.getElementById('debitcardError').style.display = 'block';
		document.getElementById('debitcardNameError').style.display = 'block';
		document.getElementById('debitcvvError').style.display = 'block';
		document.getElementById('debitcardError').innerHTML = "Please enter Card Number";
		document.getElementById('debitcardNameError').innerHTML = "Password enter card name";
		document.getElementById('debitcvvError').innerHTML = "Please enter CVV";
	}else if(document.forms.debitCardForm.numberInput.value == ""){
		document.getElementById('debitcardError').style.display = 'block';
		document.getElementById('debitcardError').innerHTML = "Please enter Card Number";
		
	}else if(document.forms.debitCardForm.nameInput.value == ""){
		document.getElementById('debitcardNameError').style.display = 'block';
		document.getElementById('debitcardError').style.display = 'none';
		
		document.getElementById('debitcardNameError').innerHTML = "Password enter card name";
		
	}else if(document.forms.debitCardForm.cvvInput.value == ""){
		document.getElementById('debitcvvError').style.display = 'block';
		document.getElementById('debitcvvError').innerHTML = "Please enter CVV";
		document.getElementById('debitcardError').style.display = 'none';
		document.getElementById('debitcardNameError').style.display = 'none';
		
	}else{
		document.getElementById('debitcardError').style.display = 'none';
		document.getElementById('debitcardNameError').style.display = 'none';
		document.getElementById('debitcvvError').style.display = 'none';
		var modal = document.getElementById('myModal1');
		var debitCardForm =document.getElementById('debitCardForm');
		debitCardForm.style.display="block";
		modal.style.display = "block";
	}
	
}



function continueBooking(){
	window.location
	.replace("http://localhost:8080/webDesigningProject/projecthtml/home_project.html");
}