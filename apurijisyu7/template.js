

// グローバルで使用する変数の宣言などをここに追加

window.onload = appInit;

// function appInit(){
//     displayPanel = document.getElementById("displayPanel");
//     displayPanel.textContent = "テンプレート動作テスト";
// }

var cards, card1, card2;
var places, matched;
var clickEvent;

function applnit(){

    if(typeof document.ontouchstart == "undefined"){
        clickEvent="mousedown";
    }else{}
}