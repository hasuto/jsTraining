var result = [];

var text; //各科の紹介文格納用
var id1; //紹介文をcsvファイルから読み込むための、id
var id2;//紹介文をcsvファイルから読み込むための、id
var tmp;
var bbbb; //csvファイルの何行目にあるかの判定用変数

window.onload = function () {
    
    var data = location.href.split("?")[1];
    text = data.split("=")[1];
    id1 = data.split("=")[2];
    id2 = data.split("=")[3];
    console.log(text);
    console.log(id1);
    console.log(id2);

    getCSV();
 
    
    var background = document.querySelector('#back-ground');
   
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

document.getElementById('sample').addEventListener('click',function(e){
    console.log("押しているよ");
});

function sample(){
    alert(text);
    window.location.href = '/aframegame1/MaruBatu01.html?a='+text;
}

function syoukaibun() {
    console.log("okだよ");
    console.log(result[bbbb][2]);
    document.querySelectorAll('[syobun]:empty').forEach(syobun => {
        console.log(syobun.dataset.text);
        syobun.dataset.text = result[bbbb][2];
        console.log(syobun.dataset.text);
        const text = syobun.dataset.text
        const text_cnt = text.length
        const width = text_cnt * 1.4
        const height = 1.6
        let cvs = document.createElement('canvas')
        let ctx = cvs.getContext('2d')
        cvs.width = width * 100
        cvs.height = height * 100
        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.font = '100pt Arial'
        ctx.fillText(text, 0, 125)

        const base64 = cvs.toDataURL("image/png")
        syobun.innerHTML = `<a-image scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`
    })
}

function aframeMutlByte() {
    console.log("okだよ");
    document.querySelectorAll('[mb-text]:empty').forEach(mb_text => {
        console.log(mb_text.dataset.text)
        const text = mb_text.dataset.text
        const text_cnt = text.length
        const width = text_cnt * 1.4
        const height = 1.6
        let cvs = document.createElement('canvas')
        let ctx = cvs.getContext('2d')
        cvs.width = width * 100
        cvs.height = height * 100
        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.font = '100pt Arial'
        ctx.fillText(text, 0, 125)

        const base64 = cvs.toDataURL("image/png")
        mb_text.innerHTML = `<a-image scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`
    })
}

function syoukai_text(){
    console.log(bbbb);
    console.log(result[bbbb][2]);
    syoukaibun();
    aframeMutlByte();

    // var text = result[bbbb][2];
    // var elem = document.getElementById("syoukai_text");
    // elem.innerHTML = text;
    // document.getElementById("syoukai_text").textContent = text;
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