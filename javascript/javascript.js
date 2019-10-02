//FRONT PAGE
$(".aboutMeClick2").on("click", function aboutMeClick(){
    console.log("Hello1");
    $(".aboutMePage").removeClass("hide");
    $(".landingWrap").addClass("hide");
});

$(".githubClick2").on("click", function worksClick(){
    console.log("Hello2");
    $(".githubPage").removeClass("hide");
    $(".landingWrap").addClass("hide");
});

$(".resumeClick2").on("click", function resumeClick(){
    console.log("Hello3");
    $(".resumePage").removeClass("hide");
    $(".landingWrap").addClass("hide");
});

$(".contactClick2").on("click", function contactClick(){
    console.log("Hello4");
    $(".contactPage").removeClass("hide");
    $(".landingWrap").addClass("hide");    
});

//NAVIGATION PAGE
$(".aboutMeClick").on("click", function aboutMeClick(){
    console.log("Hello1");
    $(".aboutMePage").removeClass("hide");
    $(".landingWrap").addClass("hide");
    $(".resumePage").addClass("hide");
    $(".githubPage").addClass("hide");
    $(".contactPage").addClass("hide");
});

$(".githubClick2").on("click", function worksClick(){
    console.log("Hello2");
    $(".aboutMePage").addClass("hide");
    $(".landingWrap").addClass("hide");
    $(".resumePage").addClass("hide");
    $(".githubPage").removeClass("hide");
    $(".contactPage").addClass("hide");
});

$(".resumeClick2").on("click", function resumeClick(){
    console.log("Hello3");
    $(".aboutMePage").addClass("hide");
    $(".landingWrap").addClass("hide");
    $(".resumePage").removeClass("hide");
    $(".githubPage").addClass("hide");
    $(".contactPage").addClass("hide");
});

$(".contactClick2").on("click", function contactClick(){
    console.log("Hello4");
    $(".aboutMePage").addClass("hide");
    $(".landingWrap").addClass("hide");
    $(".resumePage").addClass("hide");
    $(".githubPage").addClass("hide");
    $(".contactPage").removeClass("hide");
});


$(".arrow").on("click", function navigatorArrow(){
    $(".arrow").html("x");
    $(".arrow").addClass("x");
    $(".navigationList").removeClass("hide");
        
});


//FUNCTION 

$("li").on("click", function hideHeader(){
    
});
