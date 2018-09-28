var main = function(){
    "use strict";
    var click = 0;
    var changeValue = function (x){
        if($("."+x).text()==""){
            $("."+x).text("0");

        } else if($("."+x).text()=="0"){
            $("."+x).text("1");

        }else{
            $("."+x).text("");
            click =0;
        }
    }

    $(".0").on("click" , function(event){
        changeValue(0);
        click ++
    });
    $(".1").on("click" , function(event){
        changeValue(1);
        click ++
        
    });
    $(".2").on("click" , function(event){
        changeValue(2);
        click ++
    });
    $(".3").on("click" , function(event){
        changeValue(3);
        click ++
    });
    $(".4").on("click" , function(event){
        changeValue(4);
        click ++
    });
    $(".5").on("click" , function(event){
        changeValue(5);
        click ++
    });
    $(".6").on("click" , function(event){
        changeValue(6);
        click ++
    });
    $(".7").on("click" , function(event){
        changeValue(7);
        click ++
    });
    $(".8").on("click" , function(event){
        changeValue(8);
        click ++
    });
    $(".9").on("click" , function(event){
        changeValue(9);
        click ++
    });
    $(".10").on("click" , function(event){
        changeValue(10);
        click ++
    });
    $(".11").on("click" , function(event){
        changeValue(11);
        click ++
    });
    $(".12").on("click" , function(event){
        changeValue(12);
        click ++
    });
    $(".13").on("click" , function(event){
        changeValue(13);
        click ++
    });
    $(".14").on("click" , function(event){
        changeValue(14);
        click ++
    });
    $(".15").on("click" , function(event){
        changeValue(15);
        click ++
    });
    $("button").on("click" , function(event){
        $("td").text("");
});

}
$(document).ready(main);