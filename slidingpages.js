$(function(){
    /*ロードした時とスクロールした時に処理を実行する*/
    $(window).on('load scroll', function() {
        /*スクロール量を取得して変数に入れる*/
       var winScroll = $(window).scrollTop();
       /* ウィンドウの高さを取得して変数に入れる */
       var winHeight = $(window).height();
       /*要素がウィンドウのどの位置まできたら処理を開始するか */
       var scrollPos = winScroll + (winHeight * 0.8);

         /*showクラスを発見する度に処理を実行する*/
       $(".item").each(function() {
           /* 要素がウィンドウの指定した位置まできたらCSSを調整 */
          if($(this).offset().top < scrollPos) {
             $(this).css({opacity: 1, transform: 'translate(0, 0)'});
          }
       });
    });
 });
