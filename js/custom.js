// $(function () {}); 는 body 안에 모든 걸 읽어 온 후 에 실행해
$(function () {
  /* Include html Files*/
  $(".gnb-include").load("/include/gnb.html");
  $(".main-header-include").load("/include/main-header.html");
  $(".goods-detail-header-include").load("/include/goods-detail-header.html");

  /* Category Accordion*/
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

  /* Recent Search Result */
  $(".search-recent .btn-clear").click(function () {
    // $(this).parent().hide();
    $(this).parent().slideUp(150);
    // $(this).parent().fadeOut();
  });
  $(".search-recent .btn-all-clear").click(function () {
    // $(".search-recent .item").hide()
    $(".search-recent .item").slideUp(150);
  });

  /* Cart Items */
  $(".cart-content .btn-all-clear").click(function () {
    $(".cart-item").hide();
  });
  $(".cart-content .btn-clear").click(function () {
    $(this).parent().parent().hide();
  });

  /* Front Slider */
  $(".front-slider").slick({
    slidesToShow: 1 /* 화면에 출력할 슬라이드 개수 */,
    dots: false /* 하단의 도트 네이게이션 출력 */,
    arrows: true /* 좌우 화살표 네이게이션 출력 */,
    autoplay: true /* 자동재생 */,
    autoplaySpeed: 3000 /* 자동재생 속도 */,
  });

  /* Goods Suggestion slider*/
  $(".goods-suggestion-items").slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    slidesToScroll: 2,
  });

  /* Wish */
  $(".wish").click(function () {
    $(this).toggleClass("active");
  });

  /* Front Footer */
  $(".btn-view-more").click(function () {
    $(".company-info-more").show();
  });

  /* Goods Detail Slider */
  $(".goods-detail-slider").slick({
    dots: true,
    arrows: false,
    slidesToScroll: 1,
  });

  /* Goods Accordion */
  $(".goods-accordion .detail").eq(0).show();
  $(".goods-accordion .title").click(function () {
    var isActive = $(this).hasClass("active");

    // 모든 타이틀에서 active 클래스를 제거하고, detail을 숨깁니다.
    $(".goods-accordion .title").removeClass("active");
    $(".goods-accordion .detail").hide();

    if (!isActive) {
      // 클릭한 요소가 active가 아니면 active 클래스를 추가하고 detail을 표시합니다.
      $(this).addClass("active");
      $(this).next().show();
    }
  });
});
