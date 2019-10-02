//FRONT PAGE
$(".aboutMeClick").on("click", function aboutMeClick(){
    console.log("Hello1");
    $(".aboutMePage").removeClass("hide");
    $(".landingWrap").addClass("hide");
});

$(".githubClick").on("click", function worksClick(){
    console.log("Hello2");
    $(".githubPage").removeClass("hide");
    $(".landingWrap").addClass("hide");
});

$(".resumeClick").on("click", function resumeClick(){
    console.log("Hello3");
    $(".resumePage").removeClass("hide");
    $(".landingWrap").addClass("hide");
});

$(".contactClick").on("click", function contactClick(){
    console.log("Hello4");
    $(".contactPage").removeClass("hide");
    $(".landingWrap").addClass("hide");    
});

