var result = [];
var csv_column;
var this_text; //各科の紹介文格納用
var this_id1; //紹介文をcsvファイルから読み込むための、id
var this_id2;//紹介文をcsvファイルから読み込むための、id
var reset_txt;
console.log("aaaaa");
var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');
Top_yahaba_Aframe.src = "yahaba_school_top.html";



$('#top_yahaba_aframe').on('load', function () {
        //iframeのdocumentを取得する（Mozilla系 || 古いIE系）
        var doc = this.contentDocument || this.contentWindow.document;


        //iframeの中のhtmlのidが一致するオブジェクトを押すと実行
        //下記に各科を追加していく
        $("#top_yahaba_aframe").contents().find(doc.getElementById('Maru')).on("click", function (e) {
                alert('osi');
                window.location.href = "/aframegame1/vr_main.html?a=" + 'text' + "=" + '2' + "=" + '1';
                // syoukai_page('2', '1');
        });
        $("#top_yahaba_aframe").contents().find(doc.getElementById('kousya')).on("click", function (e) {
                alert('osi');
                window.location.href = "/aframegame1/vr_main.html?a=" + 'tetx' + "=" + '2' + "=" + '1';
                // syoukai_page('3', '1');
        });
});


