var result = [];
var csv_column;
var reset_txt;
var this_text; //各科の紹介文格納用
var this_id1; //紹介文をcsvファイルから読み込むための、id
var this_id2;//紹介文をcsvファイルから読み込むための、id
var Top_yahaba_Aframe = document.getElementById('main_yahaba_aframe');
var text;
var id1;
var id2;
var game_hantei;
document.getElementById('right_button').style.visibility = 'hidden';
document.getElementById('left_button').style.visibility = 'hidden';
$('#back_button').hide();
window.onload = function () {

    var data = location.href.split("?")[1];
    console.log(data)
    text = data.split("=")[1];
    id1 = data.split("=")[2];
    id2 = data.split("=")[3];
    game_hantei = data.split("=")[4];
    getCSV();
    // document.getElementById('mask').classList.add("roder");
    // Top_yahaba_Aframe.src = "syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;
    // syoukai_page(id1,id2);
    // if (document.getElementById('mask').classList.contains("roder")) {
    //     if (document.getElementById('mask').style.opacity == 0) {
    //         button_visi();
    //     }
    // }
    // document.querySelector(".mask").addEventListener("animationend", function () {
    //     button_visi();
    // });
    var yahaba_list = document.getElementById('yahaba_list');
    var list_eles = yahaba_list.getElementsByTagName('input');
    //console.log((list_eles).not('#mekatoro2'));

}

window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};

// $('#main_yahaba_aframe').on('load', function () {
//     //iframeのdocumentを取得する（Mozilla系 || 古いIE系）



// });

function iframe_load() {
    var doc = Top_yahaba_Aframe.contentDocument || Top_yahaba_Aframe.contentWindow.document;
    console.log("読み込まれている");
    console.log(doc);
    document.getElementById('mask_all').classList.remove("roder");
    //iframeの全要素が読み込まれたら処理
    $("#main_yahaba_aframe").contents().find(doc.querySelector('a-scene')).on("loaded", function (e) {
        console.log("コンプリートマイン");
        if (document.getElementById('mask_all').classList.contains("roder")) {

        } else {

            



            if (Top_yahaba_Aframe.getAttribute('src').indexOf('MaruBatu01.html') !== -1) {
                //alert('aaaa');
                document.getElementById('left_button').classList.remove("fadein");
                document.getElementById('right_button').classList.remove("fadein");
                document.getElementById('right_button').style.visibility = 'hidden';
                document.getElementById('left_button').style.visibility = 'hidden';
                $('#yahaba_list').hide();
                $('#game_button').hide();
                $('#back_button').show();
                window.setTimeout(function(){
                    console.log('通っている');
                    document.getElementById('mask_all').classList.add("roder");
                },3000);
                
            } else {
                // alert('oooo');
                document.getElementById('mask_all').classList.add("roder");
                window.setTimeout(function () {
                    document.getElementById('classroom_text').classList.add("scrollin");
                    document.getElementById('classroom_text2').classList.add("scrollin");
                    document.getElementById('left_button').classList.add("fadein");
                    document.getElementById('right_button').classList.add("fadein");
                    
                    button_visi();
                }, 500);
            }



        }

        // if (document.getElementById('mask').classList.contains("roder")) {
        //     document.querySelector(".mask").addEventListener("animationend", function () {
        //         document.getElementById('mask').classList.remove("roder");
        //         document.getElementById('classroom_text').classList.add("scrollin");
        //     });
        // } else {
        //     document.getElementById('mask').classList.add("roder");
        //     document.getElementById('classroom_text').classList.remove("scrollin");
        //     document.getElementById('right_button').style.visibility = 'hidden';
        //     document.getElementById('left_button').style.visibility = 'hidden';
        //     document.getElementById('right_button').classList.remove("fadein");
        //     document.getElementById('left_button').classList.remove("fadein");
        //     document.querySelector(".mask").addEventListener("animationend", function () {
        //         document.getElementById('mask').classList.remove("roder");
        //         document.getElementById('classroom_text').classList.add("scrollin");
        //         button_visi();
        //     });
        // }

    });
}



function list_visi() {
    if (Number(this_id1) == 1) {
        document.getElementById('mekatoro_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("meka");
        document.getElementById('right_button').classList.add("meka");
       $('#game_button').addClass('meka');
       $('#back_button').addClass('meka');
    } else if (Number(this_id1) == 2) {
        document.getElementById('densi_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("densi");
        document.getElementById('right_button').classList.add("densi");
        $('#game_button').addClass('densi');
       $('#back_button').addClass('densi');
    } else if (Number(this_id1) == 3) {
        document.getElementById('kentiku_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("kentiku");
        document.getElementById('right_button').classList.add("kentiku");
        $('#game_button').addClass('kentiku');
       $('#back_button').addClass('kentiku');
    } else if (Number(this_id1) == 4) {
        document.getElementById('sande_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("sande");
        document.getElementById('right_button').classList.add("sande");
        $('#game_button').addClass('sande');
       $('#back_button').addClass('sande');
    } else if (Number(this_id1) == 5) {
        document.getElementById('zyohou_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("zyohou");
        document.getElementById('right_button').classList.add("zyohou");
        $('#game_button').addClass('zyohou');
       $('#back_button').addClass('zyohou');
    } else if (Number(this_id1) == 6) {
        document.getElementById('senkou_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("senkou");
        document.getElementById('right_button').classList.add("senkou");
        $('#game_button').addClass('senkou');
       $('#back_button').addClass('senkou');
    } else if (Number(this_id1) == 7) {
        document.getElementById('honkan_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("honkou");
        document.getElementById('right_button').classList.add("honkou");
        $('#game_button').addClass('honkan');
       $('#back_button').addClass('honkan');
    } else if (Number(this_id1) == 8) {
        document.getElementById('ryou_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("honkan");
        document.getElementById('right_button').classList.add("honkan");
        $('#game_button').addClass('honkan');
       $('#back_button').addClass('honkan');

    }
}

//左右のボタン表示の処理
function button_visi() {

    if (document.getElementById('mask_all').classList.contains("roder")) {


        document.getElementById('right_button').style.visibility = 'visible';
        document.getElementById('left_button').style.visibility = 'visible';
        document.getElementById('right_button').classList.add("fadein");
        document.getElementById('left_button').classList.add("fadein");

    } else {
        document.getElementById('right_button').style.visibility = 'hidden';
        document.getElementById('left_button').style.visibility = 'hidden';
        document.getElementById('right_button').classList.remove("fadein");
        document.getElementById('left_button').classList.remove("fadein");
    }
}




document.getElementById('mekatoro2').addEventListener('click', function (e) {

    if (document.getElementById("mekatoro2").checked) {
        document.querySelector(".label_meka").style.borderRadius = '0px';
        document.querySelector(".label_meka").style.borderLeft = 'none';
        document.querySelector(".label_meka").style.borderRight = 'none';
        document.querySelector(".label_meka").style.borderTop = 'none';
        document.getElementById("densi2").checked = false;
        document.getElementById("kentiku2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("honkan2").checked = false;
        //document.querySelectorAll('input').not().checked = false;
       
        document.querySelector(".label_meka").style.border = 'solid 4px #2A579A';
        console.log("okd");
    } else {
        document.querySelector(".label_meka").style.borderRadius = '50px';
        console.log("notok");
    }
});

document.getElementById('densi2').addEventListener('click', function (e) {

    if (document.getElementById("densi2").checked) {
        document.querySelector(".label_densi").style.borderRadius = '0px';
        document.querySelector(".label_densi").style.borderLeft = 'none';
        document.querySelector(".label_densi").style.borderRight = 'none';
        document.querySelector(".label_densi").style.borderTop = 'none';
        document.getElementById("mekatoro2").checked = false;
        document.getElementById("kentiku2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("honkan2").checked = false;
        console.log("okd");
    } else {
        document.querySelector(".label_densi").style.borderRadius = '50px';
        document.querySelector(".label_densi").style.border = 'solid 4px #FFA826';
        console.log("notok");
    }
});

document.getElementById('kentiku2').addEventListener('click', function (e) {

    if (document.getElementById("kentiku2").checked) {
        document.querySelector(".label_kentiku").style.borderRadius = '0px';
        document.querySelector(".label_kentiku").style.borderLeft = 'none';
        document.querySelector(".label_kentiku").style.borderRight = 'none';
        document.querySelector(".label_kentiku").style.borderTop = 'none';
        document.getElementById("densi2").checked = false;
        document.getElementById("mekatoro2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("honkan2").checked = false;

        console.log("okd");
    } else {
        document.querySelector(".label_kentiku").style.borderRadius = '50px';
        document.querySelector(".label_kentiku").style.border = 'solid 4px #94B428';
        console.log("notok");
    }
});

document.getElementById('sande2').addEventListener('click', function (e) {

    if (document.getElementById("sande2").checked) {
        document.querySelector(".label_sande").style.borderRadius = '0px';
        document.querySelector(".label_sande").style.borderLeft = 'none';
        document.querySelector(".label_sande").style.borderRight = 'none';
        document.querySelector(".label_sande").style.borderTop = 'none';
        document.getElementById("densi2").checked = false;
        document.getElementById("mekatoro2").checked = false;
        document.getElementById("kentiku2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("honkan2").checked = false;
        console.log("okd");
    } else {
        document.querySelector(".label_sande").style.borderRadius = '50px';
        document.querySelector(".label_sande").style.border = 'solid 4px #E25C83';
        console.log("notok");
    }
});

document.getElementById('zyohou2').addEventListener('click', function (e) {

    if (document.getElementById("zyohou2").checked) {
        document.querySelector(".label_zyohou").style.borderRadius = '0px';
        document.querySelector(".label_zyohou").style.borderLeft = 'none';
        document.querySelector(".label_zyohou").style.borderRight = 'none';
        document.querySelector(".label_zyohou").style.borderTop = 'none';
        document.getElementById("densi2").checked = false;
        document.getElementById("mekatoro2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("kentiku2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("honkan2").checked = false;
        console.log("okd");
    } else {
        document.querySelector(".label_zyohou").style.borderRadius = '50px';
        document.querySelector(".label_zyohou").style.border = 'solid 4px #E54848';
        console.log("notok");
    }
});

document.getElementById('senkou2').addEventListener('click', function (e) {

    if (document.getElementById("senkou2").checked) {
        document.querySelector(".label_senkou").style.borderRadius = '0px';
        document.querySelector(".label_senkou").style.borderLeft = 'none';
        document.querySelector(".label_senkou").style.borderRight = 'none';
        document.querySelector(".label_senkou").style.borderTop = 'none';
        document.getElementById("densi2").checked = false;
        document.getElementById("mekatoro2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("kentiku2").checked = false;
        document.getElementById("honkan2").checked = false;
        console.log("okd");
    } else {
        document.querySelector(".label_senkou").style.borderRadius = '50px';
        document.querySelector(".label_senkou").style.border = 'solid 4px #6F4C77';
        console.log("notok");
    }
});

document.getElementById('honkan2').addEventListener('click', function (e) {

    if (document.getElementById("honkan2").checked) {
        document.querySelector(".label_honkan").style.borderRadius = '0px';
        document.querySelector(".label_honkan").style.borderLeft = 'none';
        document.querySelector(".label_honkan").style.borderRight = 'none';
        document.querySelector(".label_honkan").style.borderTop = 'none';
        document.getElementById("densi2").checked = false;
        document.getElementById("mekatoro2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("kentiku2").checked = false;
        console.log("okd");
    } else {
        document.querySelector(".label_honkan").style.borderRadius = '50px';
        document.querySelector(".label_honkan").style.border = 'solid 4px #004EA2';
        console.log("notok");
    }
});

document.getElementById('game_button').addEventListener('click', function (e) {
    //window.location.href = '../marubatu_game/MaruBatu01.html?a='+text;
    // Top_yahaba_Aframe.src = '../marubatu_game/MaruBatu01.html?a=' + result[csv_column][3];
    window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + id1 + "=" + id2 + "=" + "game";


});

$('#back_button').click(function() {
    window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + id1 + "=" + id2;
})

document.getElementById('left_button').addEventListener('click', function (e) {

    if (document.getElementById('left_button').style.visibility == 'visible') {
        var leftbtn_cnt = 0;
        switch (Number(this_id2)) {
            case 1:
                for (i = 0; i < 10; i++) {
                    if (result[Number(csv_column) + i][0] == this_id1) {
                        leftbtn_cnt++;
                    } else {
                        // alert(leftbtn_cnt);
                        break;
                    }
                }

                // syoukai_page(result[Number(csv_column) + (leftbtn_cnt - 1)][3], Number(this_id1), Number(this_id2) + (leftbtn_cnt - 1));
                syoukai_page(Number(this_id1), Number(this_id2) + (leftbtn_cnt - 1));
                reset_txt = result[csv_column][3];
                //   alert("case1だよ");
                break;

            case 2:
                syoukai_page(Number(this_id1), Number(this_id2) - 1);
                //     alert("case2だよ");
                break;
            case 3:
                syoukai_page(Number(this_id1), Number(this_id2) - 1);
                //  alert("case3だよ");



                break;
            case 4:
                syoukai_page(Number(this_id1), Number(this_id2) - 1);
                //   alert("case4だよ");


                break;
            case 5:
                syoukai_page(Number(this_id1), Number(this_id2) - 1);
                //    alert("case5だよ");


                break;
        }

    }

});

document.getElementById('right_button').addEventListener('click', function (e) {
    if (document.getElementById('right_button').style.visibility == 'visible') {

        switch (Number(this_id2)) {
            case 1:
                // reset_txt = result[csv_column][3];
                if (result[Number(csv_column) + 1][0] == Number(this_id1)) {

                    syoukai_page(Number(this_id1), Number(this_id2) + 1);

                    // alert("case1だよ");
                } else {
                    syoukai_page(Number(this_id1), 1);
                    // alert(reset_txt);
                }
                break;

            case 2:
                if (result[Number(csv_column) + 1][0] == Number(this_id1)) {
                    syoukai_page(Number(this_id1), Number(this_id2) + 1);
                    // alert("case2だよ");
                } else {
                    syoukai_page(Number(this_id1), 1);
                    //  alert(reset_txt);
                }
                break;
            case 3:
                if (result[Number(csv_column) + 1][0] == Number(this_id1)) {
                    syoukai_page(Number(this_id1), Number(this_id2) + 1);
                    //alert("case3だよ");
                } else {
                    syoukai_page(Number(this_id1), 1);
                    //  alert(reset_txt);

                }


                break;
            case 4:

                if (result[Number(csv_column) + 1][0] == Number(this_id1)) {
                    syoukai_page(Number(this_id1), Number(this_id2) + 1);
                    // alert("case4だよ");
                } else {
                    syoukai_page(Number(this_id1), 1);
                    //   alert(reset_txt);

                }

                break;
            case 5:
                if (result[Number(csv_column) + 1][0] == Number(this_id1)) {
                    syoukai_page(Number(this_id1), Number(this_id2) + 1);
                    // alert("case5だよ");
                } else {
                    syoukai_page(Number(this_id1), 1);
                    //  alert(reset_txt);

                }

                break;
        }
    }

});

document.getElementById("y_campus").addEventListener('click', function (e) {
    window.location.href = "../vr_top_html/vr_top.html?y";
});
document.getElementById("m_campus").addEventListener('click', function (e) {
    window.location.href = "../vr_top_html/vr_top.html?m";
});
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
    start(id1, id2);

}

function start(id1, id2) {
    this_id1 = id1;
    this_id2 = id2;
    // getCSV();
    syoukai_hantei();
    document.getElementById('mask_all').classList.remove("roder");
    document.getElementById('classroom_text').classList.remove("scrollin");
    button_visi();
    list_visi();


    //リストかオブジェクトから、飛んだ時にどの科にいるか指定
    switch (Number(this_id1)) {
        case 1:
            reset_txt = 'mekatoro_kikaikakou';
            break;

        case 2:
            reset_txt = 'densi_computer';
            break;

        case 3:
            reset_txt = 'kentiku_zisyuzyou';
            break;

        case 4:
            reset_txt = 'sande_dezainjikken';
            break;

        case 5:
            reset_txt = 'zyohou_keisanki';
            break;

        case 6:
            reset_txt = 'senkou_zisyu';
            break;

        case 7:
            reset_txt = 'honkan_tamoku';
            break;
    }

}

function syoukai_page(id1, id2) {

    //元々はsyoukai_pageの引数から判定していた。変更後はgetCSV関数にて判定。
    // Top_yahaba_Aframe.src = "/aframegame1/syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;
    window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + id1 + "=" + id2;
    this_id1 = id1;
    this_id2 = id2;
    // getCSV();
    syoukai_hantei();
    document.getElementById('mask_all').classList.remove("roder");
    document.getElementById('classroom_text').classList.remove("scrollin");
    button_visi();


    //リストかオブジェクトから、飛んだ時にどの科にいるか指定
    switch (Number(this_id1)) {
        case 1:
            reset_txt = 'mekatoro_kikaikakou';
            break;

        case 2:
            reset_txt = 'densi_computer';
            break;

        case 3:
            reset_txt = 'kentiku_zisyuzyou';
            break;

        case 4:
            reset_txt = 'sande_dezainjikken';
            break;

        case 5:
            reset_txt = 'zyohou_keisanki';
            break;

        case 6:
            reset_txt = 'senkou_zisyu';
            break;

        case 7:
            reset_txt = 'honkan_tamoku';
            break;
    }

    // if (document.getElementById('mask').classList.contains("roder")) {
    //     document.querySelector(".mask").addEventListener("animationend", function () {
    //         document.getElementById('mask').classList.remove("roder");
    //         document.getElementById('classroom_text').classList.add("scrollin");
    //     });
    // } else {
    //     document.getElementById('mask').classList.add("roder");
    //     document.getElementById('classroom_text').classList.remove("scrollin");
    //     document.getElementById('right_button').style.visibility = 'hidden';
    //     document.getElementById('left_button').style.visibility = 'hidden';
    //     document.getElementById('right_button').classList.remove("fadein");
    //     document.getElementById('left_button').classList.remove("fadein");
    //     document.querySelector(".mask").addEventListener("animationend", function () {
    //         document.getElementById('mask').classList.remove("roder");
    //         document.getElementById('classroom_text').classList.add("scrollin");
    //         button_visi();
    //     });
    // }

    //前に使っていた、科の教室のタイトルのフェードイン処理
    // document.querySelector(".mask").addEventListener("animationend", function () {
    //     document.getElementById('mask').classList.remove("roder");
    //     if (document.getElementById('classroom_text').classList.contains("scrollin")) {
    //         document.getElementById('classroom_text').classList.remove("scrollin");
    //         document.getElementById('classroom_text2').classList.add("scrollin");

    //     } else if (document.getElementById('classroom_text2').classList.contains("scrollin")) {
    //         document.getElementById('classroom_text2').classList.remove("scrollin");
    //         document.getElementById('classroom_text').classList.add("scrollin");
    //     } else {
    //         document.getElementById('classroom_text').classList.add("scrollin");
    //     }
    // });
}

function syoukai_hantei() {
    var hantei_id1;
    var i;

    //tmp.lengthは読み込んだcsvファイルの行数の格納変数
    console.log(tmp.length);



    for (var i = 0; i <= tmp.length; i++) {
        var str = result[i][0];
        if (str == this_id1) {
            console.log("一致");
            console.log("id1" + this_id1);
            console.log(str);
            console.log(i);
            hantei_id1 = i;
            break;
        }
    }

    for (var j = hantei_id1; j <= tmp.length; j++) {
        console.log("a2=" + j);
        var str2 = result[j][1];
        if (str2 == this_id2) {
            console.log(str2);
            console.log(j);
            console.log(result[j][2]);
            csv_column = j;
            break;
        }

    }

    console.log(csv_column);
    // result[csv_column][2]
    if (game_hantei == "game") {
        Top_yahaba_Aframe.src = '../marubatu_game/MaruBatu01.html?a=' + result[csv_column][3];
    } else {
        Top_yahaba_Aframe.src = "../vr_main_syoukai_aframe/main_syoukai.html?a=" + result[csv_column][3] + "=" + this_id1 + "=" + this_id2;
    }

    syoukai_text();
}


function syoukai_text() {
    console.log(csv_column);
    console.log(result[csv_column][2]);
    document.getElementById('classroom_text').textContent = result[csv_column][2];
    // document.getElementById('classroom_text').innerHTML = '<p>'+result[csv_column][2]+'<br>'+result[csv_column][4]+'</p>';
    document.getElementById('classroom_text2').textContent = result[csv_column][4];

    // var text = result[csv_column][2];
    // var elem = document.getElementById("syoukai_text");
    // elem.innerHTML = text;
    // document.getElementById("syoukai_text").textContent = text;
}