var sliderImages =Array.from(document.querySelectorAll('.container-slider img'));
//get the images and put them in an array

var slidesCount=sliderImages.length; //count of img

var currentImg = 1;

//some html elements
var slideNumber=document.getElementById('slide-number');
var nextBtn=document.getElementById('next');
var prevBtn=document.getElementById('prev');


//functions
function nextSlide(){
    console.log("Next");
}

function prevSlide(){
    console.log("Prev");
}

nextBtn.onclick=nextSlide;
prevBtn.on

