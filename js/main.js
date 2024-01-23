//스크롤 애니메이션
$("a").click(function(e){
    const href = $(this).attr("href"); //cf)prop()은 제어할 때 쓴다.
    const offTop = $(href).offset().top; //문서의 탑에서부터 오프셋
    $("html, body").stop().animate({scrollTop: offTop}, 500);
    return false;
  });


//스크롤 할 때 나타나기
$(document).ready(function(){
  $(window).scroll(function(){

    $("img").each(function(){
      var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      if( bottom_of_window > bottom_of_element ){
          $(this).animate({'opacity':'1'},700);
        }
    });
  });
});

