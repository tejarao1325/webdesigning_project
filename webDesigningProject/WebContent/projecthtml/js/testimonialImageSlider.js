var myImagesArray =
           ["../projecthtml/images/award1.gif",
            "../projecthtml/images/award2.gif",
            "../projecthtml/images/award3.gif",
            "../projecthtml/images/award4.gif",
            "../projecthtml/images/award5.gif",
            "../projecthtml/images/award6.gif",
            "../projecthtml/images/award7.png",
            "../projecthtml/images/award8.jpg",
            "../projecthtml/images/award9.jpg",
            "../projecthtml/images/award10.jpg"];


var ImageNumber = 0;
var difference = myImagesArray.length - 1;

var delay = 2000;
setInterval("ChangeImages(-1)", delay);
function ChangeImages(direction)
{//begin function
    if (document.images)
    {//begin outer if
        ImageNumber = ImageNumber + direction;

        if (ImageNumber > difference)
        {//begin inner first if
            ImageNumber = 0;
        }//end inner first if

        if (ImageNumber < 0)
        {//begin inner second if
            ImageNumber = difference;
        }//end inner second if
        //document.slideshow.src = myImagesArray[ImageNumber];
        document.getElementById('slideshow').src = myImagesArray[ImageNumber];

    }//end outer if

}//end function
