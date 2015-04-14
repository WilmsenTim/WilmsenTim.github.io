$(document).ready(function(){
    $(".container1").show();
    $(".container2").css({display: "none"});
    $(".container3").css({display: "none"});
    $(".container4").css({display: "none"});
    $(".container5").css({display: "none"});
    $(".container6").css({display: "none"});
    
    $(".Persoon2").css({display: "none"});
    $(".Persoon1").show();
    $(".Persoon3").css({display: "none"});
    $(".Persoon4").css({display: "none"});
    
    $(".Wapen2").css({display: "none"});
    $(".Wapen1").show();
    $(".Wapen3").css({display: "none"});
    $(".Wapen4").css({display: "none"});
    
    $(".Tank2").css({display: "none"});
    $(".Tank1").show();
    $(".Tank3").css({display: "none"});
    $(".Tank4").css({display: "none"});
});

/*========================
======    Veldslagen    ======
========================*/

$("#slag1").click(function(){
    $(".container1").show();
    $(".container2").css({display: "none"});
    $(".container3").css({display: "none"});
    $(".container4").css({display: "none"});
    $(".container5").css({display: "none"});
    $(".container6").css({display: "none"});
});

$("#slag2").click(function(){
    $(".container1").css({display: "none"});
    $(".container2").show();
    $(".container3").css({display: "none"});
    $(".container4").css({display: "none"});
    $(".container5").css({display: "none"});
    $(".container6").css({display: "none"});
});

$("#slag3").click(function(){
    $(".container1").css({display: "none"});
    $(".container3").show();
    $(".container2").css({display: "none"});
    $(".container4").css({display: "none"});
    $(".container5").css({display: "none"});
    $(".container6").css({display: "none"});
});

$("#slag4").click(function(){
    $(".container1").css({display: "none"});
    $(".container2").css({display: "none"});
    $(".container3").css({display: "none"});
    $(".container4").show();
    $(".container5").css({display: "none"});
    $(".container6").css({display: "none"});
});

$("#slag5").click(function(){
    $(".container1").css({display: "none"});
    $(".container2").css({display: "none"});
    $(".container3").css({display: "none"});
    $(".container5").show();
    $(".container4").css({display: "none"});
    $(".container6").css({display: "none"});
});

$("#slag6").click(function(){
    $(".container1").css({display: "none"});
    $(".container2").css({display: "none"});
    $(".container3").css({display: "none"});
    $(".container6").show();
    $(".container5").css({display: "none"});
    $(".container4").css({display: "none"});
});

/*========================
======    Personen    ======
========================*/

$("#p1").click(function(){
    $(".Persoon2").css({display: "none"});
    $(".Persoon1").show();
    $(".Persoon3").css({display: "none"});
    $(".Persoon4").css({display: "none"});
});

$("#p2").click(function(){
    $(".Persoon1").css({display: "none"});
    $(".Persoon2").show();
    $(".Persoon3").css({display: "none"});
    $(".Persoon4").css({display: "none"});
});

$("#p3").click(function(){
    $(".Persoon2").css({display: "none"});
    $(".Persoon3").show();
    $(".Persoon1").css({display: "none"});
    $(".Persoon4").css({display: "none"});
});

$("#p4").click(function(){
    $(".Persoon1").css({display: "none"});
    $(".Persoon4").show();
    $(".Persoon3").css({display: "none"});
    $(".Persoon2").css({display: "none"});
});

/*========================
======    Wapens    ======
========================*/

$("#wapen1").click(function(){
    $(".Wapen2").css({display: "none"});
    $(".Wapen1").show();
    $(".Wapen3").css({display: "none"});
    $(".Wapen4").css({display: "none"});
});

$("#wapen2").click(function(){
    $(".Wapen1").css({display: "none"});
    $(".Wapen2").show();
    $(".Wapen3").css({display: "none"});
    $(".Wapen4").css({display: "none"});
});

$("#wapen3").click(function(){
    $(".Wapen1").css({display: "none"});
    $(".Wapen3").show();
    $(".Wapen2").css({display: "none"});
    $(".Wapen4").css({display: "none"});
});

$("#wapen4").click(function(){
    $(".Wapen1").css({display: "none"});
    $(".Wapen4").show();
    $(".Wapen3").css({display: "none"});
    $(".Wapen2").css({display: "none"});
});




$("#tank1").click(function(){
    $(".Tank2").css({display: "none"});
    $(".Tank1").show();
    $(".Tank3").css({display: "none"});
    $(".Tank4").css({display: "none"});
});

$("#tank2").click(function(){
    $(".Tank1").css({display: "none"});
    $(".Tank2").show();
    $(".Tank3").css({display: "none"});
    $(".Tank4").css({display: "none"});
});

$("#tank3").click(function(){
    $(".Tank2").css({display: "none"});
    $(".Tank3").show();
    $(".Tank1").css({display: "none"});
    $(".Tank4").css({display: "none"});
});

$("#tank4").click(function(){
    $(".Tank2").css({display: "none"});
    $(".Tank4").show();
    $(".Tank3").css({display: "none"});
    $(".Tank1").css({display: "none"});
});