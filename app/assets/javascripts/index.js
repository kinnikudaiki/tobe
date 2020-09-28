// jqueryが読み込めてるかのテストです
$(function(){
  console.log('OK');
});

//ここにもっとボタンにカーソル触れた時のイベント発火

$(function() {
  $(".category").on("click", function() {
    console.log("Hello world");
  });
});

function printHelloWithButton() {

let test = document.getElementById("category__brand");
  
// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {   
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

}
// 一連の処理をまとめた関数を作る

window.addEventListener("load", printHelloWithButton);

$(function() {
 
  // ①マウスをボタンに乗せた際のイベントを設定
  $('#category__brand li').hover(function() {
 
    // ②乗せたボタンに連動したメガメニューをスライドで表示させる
    $(this).find('.menu_contents').stop().slideDown();
 
  // ③マウスをボタンから離した際のイベントを設定
  }, function() {
 
    // ④マウスを離したらメガメニューをスライドで非表示にする
    $(this).find('.menu_contents').stop().slideUp();
 
  });
 
});
