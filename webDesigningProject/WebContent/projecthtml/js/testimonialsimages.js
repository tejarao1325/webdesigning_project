var testImage = new Array(); 
testImage[0] = "../projecthtml/images/fan1.jpg";
testImage[1] = "../projecthtml/images/fan2.jpg";
testImage[2] = "../projecthtml/images/fan3.jpg";
testImage[3] = "../projecthtml/images/fan4.jpg";
testImage[4] = "../projecthtml/images/fan5.jpg";
testImage[5] = "../projecthtml/images/fan6.jpg";
testImage[6] = "../projecthtml/images/fan7.jpg";
testImage[7] = "../projecthtml/images/fan8.jpg";
testImage[8] = "../projecthtml/images/fan9.jpg";

function testimonialsImages() 
{
for (i=0;i<testImage.length;i++) 
{
    document.write("<li><img src='" + testImage[i] + "' width='300' height='300'</li>");
}
}

