var result = [];
var csv_column;
var this_text; //各科の紹介文格納用
var this_id1; //紹介文をcsvファイルから読み込むための、id
var this_id2;//紹介文をcsvファイルから読み込むための、id
var reset_txt;
console.log("変わってる");
var Top_yahaba_Aframe = document.getElementById('top_aframe');
var loader = document.getElementById('loader');


window.onload = () => {


        var data = location.href.split("?")[1];
        if (data == "y") {
                Top_yahaba_Aframe.src = "../vr_top_page_aframe/yahaba_school_top.html";
                document.getElementById('iframe_title').textContent = '矢巾キャンパス';
        } else if (data == "m") {
                Top_yahaba_Aframe.src = "../vr_top_page_aframe/mizusawa_school_top.html";
                document.getElementById('iframe_title').textContent = '水沢キャンパス'
        }

}

// document.addEventListener('DOMContentLoaded', function () {


// });

$('#top_aframe').on('load', function () {
        //iframeのdocumentを取得する（Mozilla系 || 古いIE系）
        var doc = this.contentDocument || this.contentWindow.document;
        console.log(doc.querySelector('a-scene'));

        //iframeの全要素が読み込まれたら処理
        $("#top_aframe").contents().find(doc.querySelector('a-scene')).on("loaded", function (e) {
                console.log("コンプリートマイン2");
                if (document.getElementById('loader').classList.contains("loaded")) {

                } else {
                        window.setTimeout(function () {
                                loader.classList.add('loaded');
                        }, 1000);


                }


        });

        $(function () {
                /*チュートリアル*/
                $('#tutorial-Modal').click(function () {
                        $('#tutorial-modalArea').fadeIn();
                });
                $('#closeModal , #tutorial-modalBg').click(function () {
                        $('#tutorial-modalArea').fadeOut();
                });
                $('#closebtn , #tutorial-modalBg').click(function () {
                        $('#tutorial-modalArea').fadeOut();
                });
        });


        //iframeの中のhtmlのidが一致するオブジェクトを押すと実行
        //下記に各科を追加していく
        // syoukai_page('3', '1');
        $("#top_aframe").contents().find(doc.getElementById('mekatoro_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '1' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('mekatoro_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '1' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('densi_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '2' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('densi_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '2' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('kentiku_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '3' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('kentiku_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '3' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('sande_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '4' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('sande_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '4' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('zyohou_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '5' + "=" + '1';
        });


        $("#top_aframe").contents().find(doc.getElementById('zyohou_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '5' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('senkou_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '6' + "=" + '1';
        });


        $("#top_aframe").contents().find(doc.getElementById('senkou_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '6' + "=" + '1';
        });


        $("#top_aframe").contents().find(doc.getElementById('taiku')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '6';
        });


        $("#top_aframe").contents().find(doc.getElementById('syoku')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '4';
        });

        $("#top_aframe").contents().find(doc.getElementById('tamoku')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('ryou')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '8' + "=" + '1';
        });






        $("#top_aframe").contents().find(doc.getElementById('honkan_genkan')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('syokudou_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '4';
        });

        $("#top_aframe").contents().find(doc.getElementById('taikukan_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '6';
        });

        $("#top_aframe").contents().find(doc.getElementById('ryou_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '7';
        });

        // $("#top_aframe").contents().find(doc.getElementById('kousya')).on("mouseenter", function (e) {
        //         //alert('kentiku');
        //         console.log("触れている");
        //         // syoukai_page('3', '1');
        // });

        //水沢校のクリックイベント
        $("#top_aframe").contents().find(doc.getElementById('Mizusawa_a')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/mizusawa_main.html?a=" + 'text' + "=" + '8' + "=" + '1';
                // syoukai_page('3', '1');
        });



});

$(function () {
        $('#openModal').click(function () {
                console.log('a');
                $('#modalArea').fadeIn();
        });
        $('#closeModal , #modalBg').click(function () {
                $('#modalArea').fadeOut();

        });
});

document.getElementById("y_campus").addEventListener('click', function (e) {
        if (document.getElementById("top_aframe").getAttribute('src') != "../vr_top_page_aframe/yahaba_school_top.html") {
                window.location.href = "../vr_top_html/vr_top.html?y";
        } else {
                swal.fire({
                        title: 'ここが矢巾キャンパスです'
                        , confirmButtonColor: '#004EA2'
                });
        }
});


document.getElementById("m_campus").addEventListener('click', function (e) {
        if (document.getElementById("top_aframe").getAttribute('src') != "../vr_top_page_aframe/mizusawa_school_top.html") {
                window.location.href = "../vr_top_html/vr_top.html?m";
        } else {
                swal.fire({
                        title: 'ここが水沢キャンパスです'
                        , confirmButtonColor: '#004EA2'
                });
        }
});


