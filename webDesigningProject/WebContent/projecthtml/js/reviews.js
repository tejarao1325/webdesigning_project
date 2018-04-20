$(function() {
   $('#form-review-location').barrating({
     theme: 'bars-movie'
   });
   $('#form-review-clean').barrating({
     theme: 'bars-movie'
   });
   $('#form-review-value').barrating({
     theme: 'bars-movie'
   });
   $('#form-review-checkin').barrating({
     theme: 'bars-movie'
   });
   $('#form-review-ameneties').barrating({
     theme: 'bars-movie'
   });
   $('#form-review-wifi').barrating({
     theme: 'bars-movie'
   });
});

window.onload = function () {
   document.querySelector('#form-review-name').addEventListener("focusout", validadeName);
   document.querySelector('#form-review-email').addEventListener("focusout", validadeEmail);

   document.querySelector('#btn-review-submit').onclick = validadeName;
   document.querySelector('#btn-review-submit').onclick = validadeEmail;
}

function validadeName() {
   var name = document.querySelector('#form-review-name').value;
   var nameValid;

   var namePattern = /^[a-zA-Z]{2,}$/;
   if (name == "") {
      document.querySelector('#form-alert-name').innerHTML = "Please enter a name";
      document.querySelector('#form-alert-name').classList.add("display");
   } else if (!namePattern.test(name)) {
      document.querySelector('#form-alert-name').innerHTML = "Name is too short";
      document.querySelector('#form-alert-name').classList.add("display");
   } else {
      document.querySelector('#form-alert-name').classList.remove("display");
      return nameValid = true;
   }
}

function validadeEmail() {
   var email = document.querySelector('#form-review-email').value;
   var emailValid;

   var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (email == "") {
      document.querySelector('#form-alert-email').innerHTML = "Please enter your e-mail";
      document.querySelector('#form-alert-email').classList.add("display");
   } else if (!emailPattern.test(email)) {
      document.querySelector('#form-alert-email').innerHTML = "Please enter a valid e-mail";
      document.querySelector('#form-alert-email').classList.add("display");
   } else {
      document.querySelector('#form-alert-email').classList.remove("display");
      return nameValid = true;
   }
}
// AMENETIES
$(document).ready(function() {
     $("#tabs").tabs();
});
