
$("a").click(function(e){
    const href = $(this).attr("href"); //cf)prop()은 제어할 때 쓴다.
    const offTop = $(href).offset().top; //문서의 탑에서부터 오프셋
    $("html, body").stop().animate({scrollTop: offTop}, 500);
    return false;
  });