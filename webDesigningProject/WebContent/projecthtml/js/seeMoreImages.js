var myImagesArray = 
        ["hotelroom1.jpg",
         "hotelroom2.jpg",
         "hotelroom3.jpg",
         "hotelroom4.jpg",
         "hotelroom5.jpg",
         "hotelroom6.jpg",
         "hotelroom7.jpg"];


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

