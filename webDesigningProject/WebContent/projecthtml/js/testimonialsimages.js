var testImage = new Array(); 
testImage[0] = "fan1.jpg";
testImage[1] = "fan2.jpg";
testImage[2] = "fan3.jpg";
testImage[3] = "fan4.jpg";
testImage[4] = "fan5.jpg";
testImage[5] = "fan6.jpg";
testImage[6] = "fan7.jpg";
testImage[7] = "fan8.jpg";
testImage[8] = "fan9.jpg";

function testimonialsImages() 
{
for (i=0;i<testImage.length;i++) 
{
    document.write("<li><img src='" + testImage[i] + "' width='300' height='300'</li>");
}
}

