var result = [];

var text;
var id1;
var id2;
var id;
var tmp;
var bbbb;

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

    
    
};

function syoukai_hantei(){
    var a,b;
    var i;
    // for(var i=0; i<=tmp.length; i++){
    //     console.log(i);
    // }
    var c  = result[1][2];
    console.log(c);

    console.log(tmp.length);



    for(var i = 0; i<=tmp.length; i++){
        var str  = result[i][0];
        if(str == id1){
            console.log("一致");
            console.log("id1"+id1);
            console.log(str);
            console.log(i);
            a = i;
            console.log("a="+a);
            break;
        }
    }

    for(var j = a; j<=tmp.length; j++){
        console.log("a2="+j);
        var str2 = result[j][1];
        if(str2 == id2){
            console.log(str2);
            console.log(j);
            console.log(result[j][2]);
            bbbb = j;
            break;
        }
        
    }
    
    syoukai_text();
}

function syoukai_text(){
    console.log(bbbb);
    console.log(result[bbbb][2]);
    var text = result[bbbb][2];
    var elem = document.getElementById("syoukai_text");
    elem.innerContent = text;
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
     syoukai_hantei();
     
}