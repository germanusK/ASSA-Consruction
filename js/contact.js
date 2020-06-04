$(function(){
    let ourStandardsImages =  ["../images/skuffwdd279.jpg",
    "../images/skuffwdd278.jpg",
    "../images/skuffwdd272.jpg",
    "../images/skuffwdd257.jpg",
    "../images/skuffwdd245.jpg",
    "../images/skuffwdd231.jpg",
    "../images/skuffwdd230.jpg",
    "../images/skuffwdd228.jpg",
    "../images/skuffwdd202.jpg",
    "../images/skuffwdd175.jpg",
    "../images/skuffwdd150.jpg",
    "../images/skuffwdd121.jpg",
    "../images/skuffwdd104.jpg",
    "../images/skuffwdd18.jpg"];
     let OurServicesImage = [];
     let designImages = [];
    let bgimages = new Array("../images/bgimage1.png", "../images/bgimage2.png", "../images/bgimage3.png",
                "../images/bgimage4.png", "../images/bgimage5.png", "../images/bgimage6.png",
                "../images/bgimage7.png");
    let im = 0;


    


// Animated image-flipping/transition logic
setInterval(function(){
    $(".slideGalleryItem > div").animate({"left": "+=3rem", "top": "+=3rem", "right":"-=3rem", "bottom":"-=3rem"}, "slow");
    $(".slideGalleryItem img").fadeOut();
    document.querySelectorAll(".slideGalleryItem img").forEach(element => {
        $(element).attr("src", bgimages[Math.floor(Math.random()*bgimages.length)]);
    });
    $(".slideGalleryItem img").fadeIn();
    $(".slideGalleryItem > div").animate({"left":"-=3rem", "top": "-=3rem", "right": "+=3rem", "bottom": "+=3rem"}, "slow");
}, 16000);


$("#textBlock2").hide();
$("#textBlock2Heading").click(
    function(){
        $("#textBlock2").slideToggle();
    }
);
 });
 