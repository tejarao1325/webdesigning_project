var backgroundImage = new Array(); 
backgroundImage[0] = "img-1.jpg";
backgroundImage[1] = "img-2.jpg";
backgroundImage[2] = "img-4.jpg";
backgroundImage[3] = "img-6.jpg";
backgroundImage[4] = "img-7.jpg";
backgroundImage[5] = "img-8.jpg";

function displayAllImages() 
{
for (i=0;i<backgroundImage.length;i++) 
{
    document.write("<li><img src='" + backgroundImage[i] + "' width='300' height='300' </li>");
}
}
