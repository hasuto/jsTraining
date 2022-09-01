// 文字列
var sentence = document.querySelector('input').innerText;

// 正規表現オブジェクトをリテラルで定義
var pattern = /光/;

// 文字列を正規表現で判定
if( pattern.test(sentence) ) {
  document.querySelector('#result b').innerText = "「光」の単語は含まれています";
}else{
  document.querySelector('#result b').innerText = "「光」の単語は含まれていません";
}