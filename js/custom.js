// $(function () {}); 는 body 안에 모든 걸 읽어 온 후 에 실행해
$(function () {
  // Include html Files
  $(".gnb-include").load("/include/gnb.html");
  $(".main-header-include").load("/include/main-header.html");

  //Category Accordion
  $(".category-accordion .detail").eq(0).show();
  $(".category-accordion .title").click(function () {
    // 누른 것 모두 펼치기
    // this 는 사용자가 누른 .category-accordion .title 를 의미하고 이걸 기준으로 바로 아래 있는것 이 next를 의미
    // 1 번째 방법
    // $(this).next().show();
    // 2 번째 방법 슬라이드로
    // $(this).next().stop().slideDown();
    // 3번째는 fadeIn 서서히 나타내기
    // $(this).next().stop().fadeIn();

    // 누른 것 모두 펼치기 & 펼쳐진 것 누르면 접히기
    // $(this).next().stop().slideToggle();

    //누르는 것만 펼쳐지고 기존에 펼쳐진 것은 접히게
    // $(this).next().stop().slideDown();
    // $(this).siblings(".category-accordion .title").next().stop().slideUp();

    // 요건 내가 짬뽕 시킨 것
    $(this).next().stop().slideToggle();
    $(this).siblings(".category-accordion .title").next().stop().slideUp();

    $(this).addClass("active");
    $(this).siblings(".category-accordion .title").removeClass("active");
  });

  //Recent Search Result
  $(".search-recent .btn-clear").click(function () {
    // $(this).parent().hide();
    $(this).parent().slideUp(150);
    // $(this).parent().fadeOut();
  });
  $(".search-recent .btn-all-clear").click(function () {
    // $(".search-recent .item").hide()
    $(".search-recent .item").slideUp(150);
  });
});
