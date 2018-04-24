var backgroundImage = new Array(); 
backgroundImage[0] = "../projecthtml/images/img-1.jpg";
backgroundImage[1] = "../projecthtml/images/img-2.jpg";
backgroundImage[2] = "../projecthtml/images/img-4.jpg";
backgroundImage[3] = "../projecthtml/images/img-6.jpg";
backgroundImage[4] = "../projecthtml/images/img-7.jpg";
backgroundImage[5] = "../projecthtml/images/img-8.jpg";

function displayAllImages() 
{
for (i=0;i<backgroundImage.length;i++) 
{
    document.write("<li><img src='" + backgroundImage[i] + "' width='300' height='300' </li>");
}
}
function redirectToBookingPage(){
	
	window.location
	.replace("http://localhost:8080/webDesigningProject/projecthtml/checkavailability.html");
 
	
}