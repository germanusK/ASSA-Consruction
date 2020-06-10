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



    let myButton = document.createElement("div");
    myButton.style.height = '25%';
    myButton.style.width = '22%';
// myButton.className = "col-lg-2 col-sm-2 col-xs-2"
    myButton.style.backgroundColor = 'white';
    myButton.style.position = 'absolute';
    myButton.style.borderRadius = '3px'

   
   { 
    let uniImageCarouselFrame = document.createElement("div");
    uniImageCarouselFrame.id = "uniImageCarouselFrame";
    uniImageCarouselFrame.className = "container-fluid";
    
    $(uniImageCarouselFrame).html(`
    <div id="uniImageCarousel" class="carousel slide" data-ride="carousel" data-interval="6000">
    <!--indicators-->
    <!-- <ol class="carousel-indicators">
        <li data-target="#uniImageCarousel", data-slide-to="0" class="active"></li>
        <li data-target="#uniImageCarousel", data-slide-to="1"></li>
        <li data-target="#uniImageCarousel", data-slide-to="2"></li>
        <li data-target="#uniImageCarousel", data-slide-to="3"></li>
        <li data-target="#uniImageCarousel", data-slide-to="4"></li>
        <li data-target="#uniImageCarousel", data-slide-to="5"></li>
    </ol> -->
    <!--carousel inner: i.e displayed data-->
    <div class="carousel-inner">
        <div class="item active embed-responsive embed-responsive-16by9">
            <img src="../images/bgimage1.png" alt="" class="img-responsive">
        </div>
        <div class="item embed-responsive embed-responsive-16by9">
            <img src="../images/bgimage1.png" alt="" class="img-responsive">
        </div>
        <div class="item embed-responsive embed-responsive-16by9">
            <img src="../images/bgimage1.png" alt="" class="img-responsive">
        </div>
        <div class="item embed-responsive embed-responsive-16by9">
            <img src="../images/bgimage1.png" alt="" class="img-responsive">
        </div>
         <div class="item embed-responsive embed-responsive-16by9">
            <img src="../images/bgimage1.png" alt="" class="img-responsive">
        </div>
        <div class="item embed-responsive embed-responsive-16by9">
            <img src="../images/bgimage1.png" alt="" class="img-responsive">
        </div>
    </div>
    <!--carousel controls-->
    <!-- <a href="#uniImageCarousel" data-slide="prev" class="left carousel-control">
        <span class="fa fa-sign-out"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a href="#uniImageCarousel" data-slide="next" class="right carousel-control">
        <span class="fa fa-sign-in"></span>
        <span class="sr-only">Next</span></a> -->
</div>
    `);
   $(uniImageCarouselFrame).css("background-image", "url('"+ourStandardsImages[0]+"')")
    setInterval(function(){

    // $(uniImageCarouselFrame).css("display", "none");
    $(uniImageCarouselFrame).css("background-image", "url('"+ourStandardsImages[im++%ourStandardsImages.length]+"')");
    $(uniImageCarouselFrame).fadeIn(4000);}, 16000);

$("#textBlock2Frame").after(uniImageCarouselFrame);
}


setInterval(function(){
    $(".slideGalleryItem > div").animate({"left": "+=3rem", "top": "+=3rem", "right":"-=3rem", "bottom":"-=3rem"}, "slow");
    $(".slideGalleryItem img").fadeOut();
    document.querySelectorAll(".slideGalleryItem img").forEach(element => {
        $(element).attr("src", bgimages[Math.floor(Math.random()*bgimages.length)]);
    });
    $(".slideGalleryItem img").fadeIn();
    $(".slideGalleryItem > div").animate({"left":"-=3rem", "top": "-=3rem", "right": "+=3rem", "bottom": "+=3rem"}, "slow");
}, 16000);
 });