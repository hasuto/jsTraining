var result = [];
var csv_column;
var this_text; //各科の紹介文格納用
var this_id1; //紹介文をcsvファイルから読み込むための、id
var this_id2;//紹介文をcsvファイルから読み込むための、id
var reset_txt;
console.log("aaaaa");
var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');



window.onload = () => {
        var loader = document.getElementById('loader');
        loader.classList.add('loaded');
        var data = location.href.split("?")[1];
        if (data == "y") {
                Top_yahaba_Aframe.src = "yahaba_school_top.html";
                document.getElementById('iframe_title').textContent = '矢巾キャンパス';
        } else if (data == "m") {
                Top_yahaba_Aframe.src = "mizusawa_school_top.html";
                document.getElementById('iframe_title').textContent = '水沢キャンパス'
        }

}

// document.addEventListener('DOMContentLoaded', function () {


// });

$('#top_yahaba_aframe').on('load', function () {
        //iframeのdocumentを取得する（Mozilla系 || 古いIE系）
        var doc = this.contentDocument || this.contentWindow.document;
        console.log(doc.querySelector('a-scene'));
        //iframeの全要素が読み込まれたら処理
        $("#top_yahaba_aframe").contents().find(doc.querySelector('a-scene')).on("loaded2", function (e) {
                alert("コンプリートマイン");
                // if (document.getElementById('mask_all').classList.contains("roder")) {

                // } else {
                //         document.getElementById('mask_all').classList.add("roder");
                //         document.getElementById('classroom_text').classList.add("scrollin");
                //         button_visi();
                // }


        });
        

        
        //iframeの中のhtmlのidが一致するオブジェクトを押すと実行
        //下記に各科を追加していく
        $("#top_yahaba_aframe").contents().find(doc.getElementById('Maru')).on("click", function (e) {
                // alert('densi');
                window.location.href = "/aframegame1/yahaba_main.html?a=" + 'text' + "=" + '2' + "=" + '1';
                // syoukai_page('2', '1');
        });
        $("#top_yahaba_aframe").contents().find(doc.getElementById('kousya')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "/aframegame1/yahaba_main.html?a=" + 'tetx' + "=" + '3' + "=" + '1';
                // syoukai_page('3', '1');
        });
        $("#top_yahaba_aframe").contents().find(doc.getElementById('Mizusawa_a')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "/aframegame1/mizusawa_main.html?a=" + 'tetx' + "=" + '3' + "=" + '1';
                // syoukai_page('3', '1');
        });
        // $("#top_yahaba_aframe").contents().find(doc.getElementById('kousya')).on("mouseenter", function (e) {
        //         //alert('kentiku');
        //        console.log("触れている");
        //         // syoukai_page('3', '1');
        // });
        


});

document.getElementById("y_campus").addEventListener('click', function (e) {
        if (document.getElementById("top_yahaba_aframe").getAttribute('src') != "yahaba_school_top.html") {
                window.location.href = "/aframegame1/vr_top.html?y";
        } else {
                swal.fire({
                        title: 'ここが矢巾キャンパスです'
                        , confirmButtonColor: '#004EA2'
                });
        }
});

document.getElementById("m_campus").addEventListener('click', function (e) {
        if (document.getElementById("top_yahaba_aframe").getAttribute('src') != "mizusawa_school_top.html") {
                window.location.href = "/aframegame1/vr_top.html?m";
        } else {
                swal.fire({
                        title: 'ここが水沢キャンパスです'
                        , confirmButtonColor: '#004EA2'
                });
        }
});


