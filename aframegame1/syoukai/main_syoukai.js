var result = [];

var text;
var id1;
var id2;
var id;
var aaa;
window.onload = function () {
   
    var data = location.href.split("?")[1];
    text = data.split("=")[1];
    id1 = data.split("=")[2];
    id2 = data.split("=")[3];
    console.log(text);
    console.log(id1);
    console.log(id2);

    getCSV();
 
    
    var background = document.querySelector('#back_ground');
   
    background.setAttribute('src',"images/" + text + ".jpeg");
   
    console.log(background.getAttribute('src'));

    syoukai_hantei();
    
};

function syoukai_hantei(){

    // for(var i=0; i<=tmp.length; i++){
    //     console.log(i);
    // }

    console.log(aaa);

}


//CSVファイルを読み込む関数getCSV()の定義
function getCSV() {
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "main_syoukai.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行

    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function () {

        convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str) { // 読み込んだCSVデータが文字列として渡される
    // 最終的な二次元配列を入れるための配列
    tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (var i = 0; i < tmp.length; ++i) {
        result[i] = tmp[i].split(',');
    }

    console.log(result[1][2]); // 300yen
     aaa = tmp.length;
}