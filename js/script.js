$(document).ready(function() {


  $(".down").click(function() {
    if( $(this).hasClass("click") ){
      $(".navdown").slideUp();
      $(this).removeClass("click");
    }else{
      $(".navdown").slideDown();
      $(this).addClass("click");
      return false;
    }
  });

  $(".indexpage a").mouseenter(function() {
    $(this).children(".index_intro").slideDown();
  });
  $(".indexpage a").mouseleave(function() {
    $(this).children(".index_intro").slideUp();
  });

});
