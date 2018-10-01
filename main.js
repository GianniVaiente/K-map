var main = function(){
    "use strict";
    var checkForInput = true;
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
         for(let y = 0 ; y < 16; y++){
        $("."+y).on("click" , function(event){
                    changeValue(y);
                    click ++
         });
     }

}
$(document).ready(main);
