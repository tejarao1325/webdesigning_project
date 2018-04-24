var myImagesArray = 
        ["../projecthtml/images/hotelroom1.jpg",
         "../projecthtml/images/hotelroom2.jpg",
         "../projecthtml/images/hotelroom3.jpg",
         "../projecthtml/images/hotelroom4.jpg",
         "../projecthtml/images/hotelroom5.jpg",
         "../projecthtml/images/hotelroom6.jpg",
         "../projecthtml/images/hotelroom7.jpg"];


//Build the slide of images
var ImageNumber = 0;
var difference = myImagesArray.length - 1;
function ChangeImage(direction)
{//begin function
    if (document.images)
    {//begin first if
        ImageNumber = ImageNumber + direction;
        if (ImageNumber > difference)
        {//begin second inner if
            ImageNumber = 0;
        }//end second if
        if (ImageNumber < 0)
        {//begin third inner if
            ImageNumber = difference;
        }//end third if

        document.getElementById('slideshow').src = myImagesArray[ImageNumber];
    }//end first if
}//end function

