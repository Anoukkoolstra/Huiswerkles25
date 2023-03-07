$(document).ready(function (){
    $("#welkomtekst").hover(function(){
        $(this).css("color", "black");
    },
    function(){
        $(this).css("color", "brown");
    });
    $("#knop").click(function (){
        window.alert ("Bedankt voor het kijken")
    })
});