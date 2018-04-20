
window.onload = function() {
	
	document.getElementById('payPalForm').style.display = 'none';
	document.getElementById('creditCardForm').style.display = 'none';
	document.getElementById('netBankingForm').style.display = 'none';
	document.getElementById('debitCardForm').style.display = 'none';
	
}	

function openPaypalLogin (){
	document.getElementById('payPalForm').style.display = 'block';
	document.getElementById('creditCardForm').style.display = 'none';
	document.getElementById('netBankingForm').style.display = 'none';
	document.getElementById('debitCardForm').style.display = 'none';
}

function openCrediCardLogin(){
	
	document.getElementById('payPalForm').style.display = 'none';
	document.getElementById('netBankingForm').style.display = 'none';
	document.getElementById('creditCardForm').style.display = 'block';
	document.getElementById('debitCardForm').style.display = 'none';
	
}


function openNetBankingForm(){
	
	document.getElementById('payPalForm').style.display = 'none';
	document.getElementById('creditCardForm').style.display = 'none';
	document.getElementById('netBankingForm').style.display = 'block';
	document.getElementById('debitCardForm').style.display = 'none';
	
}

function openDebitCardLogin(){
	
	document.getElementById('payPalForm').style.display = 'none';
	document.getElementById('creditCardForm').style.display = 'none';
	document.getElementById('netBankingForm').style.display = 'none';
	document.getElementById('debitCardForm').style.display = 'block';
}



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



function validatecardDetails(){
	
	if (document.forms.creditCardForm.numberInput.value == ""
		&& document.forms.creditCardForm.nameInput.value == "" && document.forms.creditCardForm.cvvInput.value == "" ) {
		document.getElementById('cardError').style.display = 'block';
		document.getElementById('cardNameError').style.display = 'block';
		document.getElementById('cvvError').style.display = 'block';
		document.getElementById('cardError').innerHTML = "Please enter Card Number";
		document.getElementById('cardNameError').innerHTML = "Password enter card name";
		document.getElementById('cvvError').innerHTML = "Password enter CVV";
	}else if(document.forms.creditCardForm.numberInput.value == ""){
		document.getElementById('cardError').style.display = 'block';
		document.getElementById('cardError').innerHTML = "Please enter Card Number";
		
	}else if(document.forms.creditCardForm.nameInput.value == ""){
		document.getElementById('cardNameError').style.display = 'block';
		document.getElementById('cardError').style.display = 'none';
		
		document.getElementById('cardNameError').innerHTML = "Password enter card name";
		
	}else if(document.forms.creditCardForm.cvvInput.value == ""){
		document.getElementById('cvvError').style.display = 'block';
		document.getElementById('cvvError').innerHTML = "Password enter CVV";
		document.getElementById('cardError').style.display = 'none';
		document.getElementById('cardNameError').style.display = 'none';
		
	}else{
		document.getElementById('cardError').style.display = 'none';
		document.getElementById('cardNameError').style.display = 'none';
		document.getElementById('cvvError').style.display = 'none';
	}
}






