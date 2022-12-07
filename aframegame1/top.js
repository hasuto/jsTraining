

var sceneEl;
var isMouseDown = false;
var result = [];
var bbbb;
var kousya;
var this_text; //各科の紹介文格納用
var this_id1; //紹介文をcsvファイルから読み込むための、id
var this_id2;//紹介文をcsvファイルから読み込むための、id
// var xhr;

//const cameraWrapper = document.getElementById("camera-wrapper")
//const camera = cameraWrapper.querySelector("a-camera")
//const cameraRotation = camera.getAttribute("rotation") // <a-camera>の現在のrotation(回転)を取得</a-camera>

//cameraWrapper.setAttribute("rotation", { y: 45 })

window.onload = function () {
    console.log("konpire");
    document.querySelector('a-scene').addEventListener('loaded', function () {
        console.log("コンプリート");
    });

    init();
    //render();
};

function init() {
    sceneEl = document.querySelector("a-scene");
    kousya = sceneEl.querySelector("#kousya");
    console.log(kousya);
    // kousya.addEventListener('mouseenter', function (e) {
    //     console.log("押している");
    // });
}
// document.querySelector('#kousya').addEventListener('click',function(e){
//     window.location.href = "/aframegame1/vr_main.html?a=" + 'tetx' + "=" + '3' + "=" + '1';
// });

// function init() {

//     sceneEl = document.querySelector("a-scene");




//     // マウス、タッチ処理を呼び出すイベントリスナーをセット
//     document.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("touchstart", onMouseDown);
//     document.addEventListener("mouseup", onMouseUp);
//     document.addEventListener("touchend", onMouseUp);
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("touchmove", onMouseMove);


// }


// function render() {

//     requestAnimationFrame(render);

// }

// function syoukai_page(text, id1, id2) {
//     var Top_yahaba_Aframe = document.getElementById('Maru');
//     window.location.href = "/aframegame1/syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;
//     this_id1 = id1;
//     this_id2 = id2;
//     getCSV();



// }

// function syoukai_hantei() {
//     var a, b;
//     var i;
//     // for(var i=0; i<=tmp.length; i++){
//     //     console.log(i);
//     // }
//     var c = result[1][2];
//     console.log(c);

//     console.log(tmp.length);



//     for (var i = 0; i <= tmp.length; i++) {
//         var str = result[i][0];
//         if (str == this_id1) {
//             console.log("一致");
//             console.log("id1" + this_id1);
//             console.log(str);
//             console.log(i);
//             a = i;
//             console.log("a=" + a);
//             break;
//         }
//     }

//     for (var j = a; j <= tmp.length; j++) {
//         console.log("a2=" + j);
//         var str2 = result[j][1];
//         if (str2 == this_id2) {
//             console.log(str2);
//             console.log(j);
//             console.log(result[j][2]);
//             bbbb = j;
//             break;
//         }

//     }

//     result[bbbb][2]
//     syoukai_text();
// }


// function syoukai_text() {
//     console.log(bbbb);
//     console.log(result[bbbb][2]);
//     document.getElementById('classroom_text').textContent = result[bbbb][2];
//     document.getElementById('classroom_text2').textContent = result[bbbb][2];

//     // var text = result[bbbb][2];
//     // var elem = document.getElementById("syoukai_text");
//     // elem.innerHTML = text;
//     // document.getElementById("syoukai_text").textContent = text;
// }

// function getCSV() {
//     var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
//     req.open("get", "main_syoukai.csv", true); // アクセスするファイルを指定
//     req.send(null); // HTTPリクエストの発行

//     // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
//     req.onload = function () {

//         convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
//     }
// }

// // 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
// function convertCSVtoArray(str) { // 読み込んだCSVデータが文字列として渡される
//     // 最終的な二次元配列を入れるための配列
//     tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

//     // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
//     for (var i = 0; i < tmp.length; ++i) {
//         result[i] = tmp[i].split(',');
//     }

//     console.log(result[1][2]); // 300yen
//     syoukai_hantei();

// }

// function kentiku_link() {
//     window.location.href = 'syoukai/main_syoukai';
// }

// function sande_link() {
//     window.location.href = 'yahaba/sangyoudezain/mokuzaikakou.html';
// }

// function marubatu_game(a) {
//     window.location.href = '/aframegame1/MaruBatu01.html?a=' + a;
// }

// function onMouseDown(event) {
//     isMouseDown = true;
// }

// // マウスを動かした時
// function onMouseMove(event) {

// }

// // マウスを離したとき
// function onMouseUp(event) {
//     isMouseDown = false;
// }

// function getMouseX(event) {
//     if (event.type.indexOf("touch") == -1)
//         return event.clientX;
//     else
//         return event.touches[0].clientX;
// }

// function getMouseY(event) {
//     if (event.type.indexOf("touch") == -1)
//         return event.clientY;
//     else
//         return event.touches[0].clientY;
// }

