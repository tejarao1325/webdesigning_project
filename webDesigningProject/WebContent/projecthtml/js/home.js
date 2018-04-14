window.onload = function() {
	
	addName();
	
}	
	
	function addName(){

	 var name =getCookie("active");
	 if(name!=""){
		 
		 document.getElementById('logsign').style.display = 'none';
		 document
			.getElementById('username').innerHTML = name;

	 }else{
		 document.getElementById('signOut').style.display = 'none';
		 
	 }
}
	
	
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
	
	
	
	function signOut(){

		 var name =getCookie("active");
		 if(name!=""){
			 
			 var d = new Date();

				d
						.setTime(d.getTime()
								+ (365 * 24 * 60 * 60 * 1000));

				var expires = "expires="
						+ d.toUTCString();

				document.cookie = "active"+ "=" + ""
				+ ";" + expires;
				
				window.location
				.replace("http://localhost:8080/webDesigningProject/projecthtml/home_project.html");
			 
			 document.getElementById('logsign').style.display = 'none';
		 }
	}