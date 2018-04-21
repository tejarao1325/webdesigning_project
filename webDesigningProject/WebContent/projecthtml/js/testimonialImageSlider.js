var myImagesArray =
           ["award1.gif",
            "award2.gif",
            "award3.gif",
            "award4.gif",
            "award5.gif",
            "award6.gif",
            "award7.png",
            "award8.jpg",
            "award9.jpg",
            "award10.jpg"];


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
