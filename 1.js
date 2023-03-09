$(function (){
    $('.ndmotkhoi').slideUp();
    $('.motkhoi h3').click(function (event){
        $(this).next().slideToggle();
        $(this).toggleClass('red');
    });
});

