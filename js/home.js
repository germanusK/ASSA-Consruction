 $(function(){
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

    let buttonImage = document.createElement("img");
    buttonImage.style.height = '100%';
    buttonImage.style.width = '100%';
    buttonImage.src = '../images/bgimage4.png';

    myButton.appendChild(buttonImage);

    document.getElementById("mainContainer").appendChild(myButton);
    let top1 = 75; let left1 = 3;
    let topl = 3; let topu = 75;
    let leftl = 3; let leftu = 75;

    setInterval(function(){
        if(top1 > topl && left1 == leftl){
            top1 -= 0.125;
        }
        else if(top1 == topl && left1 < leftu){
            left1 += 0.125;
        }
        else if(top1 < topu && left1 == leftu){
            top1 += 0.125;
        }
        else{
            top1 = 75;
            left1 = 3;
        }
        myButton.style.left = left1 +'%';
        
        myButton.style.top = top1 +'%';
    }, 15);

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
    setInterval(function(){

    // $(uniImageCarouselFrame).css("display", "none");
    $(uniImageCarouselFrame).css("background-image", "url('"+bgimages[im++%bgimages.length]+"')");
    $(uniImageCarouselFrame).css("background-image").fadeIn();
    $(uniImageCarouselFrame).fadeIn(4000);}, 16000);

$("#lowerBodyDiv").append(uniImageCarouselFrame);
}

 })