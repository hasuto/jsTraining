
window.onload= function () {
    var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');
    var text;
    var id1;
    var id2;
    var data = location.href.split("?")[1];
    console.log(data)
    text = data.split("=")[1];
    id1 = data.split("=")[2];
    id2 = data.split("=")[3];

    Top_yahaba_Aframe.src = "syoukai/main_syoukai.html?a="+text+"="+id1+"="+id2;
    
}







document.getElementById('mekatoro2').addEventListener('click', function (e) {

    if (document.getElementById("mekatoro2").checked) {

        document.getElementById("densi2").checked = false;
        document.getElementById("kentiku2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("honkan2").checked = false;

        console.log("okd");
    } else {
        console.log("notok");
    }
});

document.getElementById('densi2').addEventListener('click', function (e) {

    if (document.getElementById("densi2").checked) {

        document.getElementById("mekatoro2").checked = false;
        document.getElementById("kentiku2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("honkan2").checked = false;
        console.log("okd");
    } else {
        console.log("notok");
    }
});

document.getElementById('kentiku2').addEventListener('click', function (e) {

    if (document.getElementById("kentiku2").checked) {

        document.getElementById("densi2").checked = false;
        document.getElementById("mekatoro2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("honkan2").checked = false;

        console.log("okd");
    } else {
        console.log("notok");
    }
});

document.getElementById('sande2').addEventListener('click', function (e) {

    if (document.getElementById("sande2").checked) {

        document.getElementById("densi2").checked = false;
        document.getElementById("mekatoro2").checked = false;
        document.getElementById("kentiku2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("honkan2").checked = false;
        console.log("okd");
    } else {
        console.log("notok");
    }
});

document.getElementById('zyohou2').addEventListener('click', function (e) {

    if (document.getElementById("zyohou2").checked) {

        document.getElementById("densi2").checked = false;
        document.getElementById("mekatoro2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("kentiku2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("honkan2").checked = false;
        console.log("okd");
    } else {
        console.log("notok");
    }
});

document.getElementById('senkou2').addEventListener('click', function (e) {

    if (document.getElementById("senkou2").checked) {

        document.getElementById("densi2").checked = false;
        document.getElementById("mekatoro2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("kentiku2").checked = false;
        document.getElementById("honkan2").checked = false;
        console.log("okd");
    } else {
        console.log("notok");
    }
});

document.getElementById('honkan2').addEventListener('click', function (e) {

    if (document.getElementById("honkan2").checked) {

        document.getElementById("densi2").checked = false;
        document.getElementById("mekatoro2").checked = false;
        document.getElementById("sande2").checked = false;
        document.getElementById("zyohou2").checked = false;
        document.getElementById("senkou2").checked = false;
        document.getElementById("kentiku2").checked = false;
        console.log("okd");
    } else {
        console.log("notok");
    }
});