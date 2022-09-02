// 文字列
var sentence = document.getElementById("sentence");
var button = document.getElementById("selectbutton");

// 正規表現オブジェクトをリテラルで定義
var pattern = [/死ね/, /くそ/, /あほ/, /ばか/];
var bancolect = [];
var batCount = 0;

// 文字列を正規表現で判定
for(var i = 0; i < pattern.length; i++){
  if( pattern[i].test(localStorage.getItem("text")) ) {
    document.querySelector('#inputtext b').innerText = localStorage.getItem("text");
    var word = "'" +  pattern[i] + "'";
    bancolect.push(word.substr(2, word.length - 4));
    document.querySelector('#banword b').innerText = bancolect;
    batCount++;
  }
  if(batCount != 0){
    document.querySelector('#result b').innerText = "ネットの悪口、もうやめましょうよ!!!... 時間がも゛ったいだいっ!!!";
  }else{
    document.querySelector('#result b').innerText = "善良な文章です。";
  }
}


button.addEventListener("click", function(){
  localStorage.removeItem("text");
  localStorage.setItem("text", sentence.value);
  window.location.reload();
}, false);