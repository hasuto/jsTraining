// const objs = document.querySelectorAll('a-entity'); 

// objs.forEach((entity) => {
//     entity.addEventListener('click',function() {
//         console.log("click");
//     });
// });
var sceneEl;
// const sound01 = document.getElementById("my_sound01");


var catMaru;
var catBatu;
var boxColor = 1; //１:赤　→　２：青　→　３：緑　→　１：赤へもどる
var score = 0;
var cnt = 0;
var hanntei = 0;
var camera;
var cursor;

var isMouseDown = false;



// let element = document.getElementById('text');
// console.log(element.children[0].data-text);
// sound01.playSound();


// let changeElement = (el)=> {

//     if(el.style.display==''){
//       el.style.display='none';
//     }else{
//       el.style.display='';
//     }

//   }

window.onload = function () {
    init();
    render();
};

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


function mondaibun(a) {
    console.log("okだよ");

    document.querySelectorAll('[mdbun]:empty').forEach(mdbun => {
        console.log(mdbun.dataset.text)
        mdbun.dataset.text = a;
        const text = mdbun.dataset.text
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
        mdbun.innerHTML = `<a-image scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`
    })
}

// function mondaibun1(){
//     console.log(mdbun.dataset.text)
//     const text = mdbun.dataset.text
//     const text_cnt = text.length
//     const width = text_cnt * 1.4
//     const height = 1.6
//     let cvs = document.createElement('canvas')
//     let ctx = cvs.getContext('2d')
//     cvs.width = width * 100
//     cvs.height = height * 100
//     ctx.fillStyle = "rgb(0, 0, 0)"
//     ctx.font = '100pt Arial'
//     ctx.fillText(text, 0, 125)

//     const base64 = cvs.toDataURL("image/png")
//     mdbun.innerHTML = `<a-image scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`
// }

function init() {

    sceneEl = document.querySelector("a-scene");
    catMaru = sceneEl.querySelector("#Maru");
    catBatu = sceneEl.querySelector("#Batu");



    // マウス、タッチ処理を呼び出すイベントリスナーをセット
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("touchstart", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);
    aframeMutlByte();

    catMaru.addEventListener("click", onMouseClick1);
    catBatu.addEventListener("click", onMouseClick2);

}





function render() {

    requestAnimationFrame(render);

}

//ゲームスタートボタン押したとき
function start() {
    var startbutton = document.querySelector('#start');
    var front_text = document.getElementById("front_text");
    front_text.setAttribute("value", "Hello, World! \n hello ");
    // var mondaibun = document.querySelector('#mondaibun').mb_text.dataset.text;
    // console.log(mondaibun);

    if (startbutton.getAttribute('visible') == true) {
        startbutton.setAttribute('visible', false);
        cnt++;
        mondai();
    }
    console.log(cnt);

    // if (cnt == 0) {
    //     cnt++;
    //     mondai();
    // }

}

// マウスをクリックしたとき
function onMouseClick1(event) {
    maru();

}
function onMouseClick2(event) {
    batu();

}

function maru() {
    var seikai = document.querySelector('#seikai');
    var hazure = document.querySelector('#hazure');
    var next = document.querySelector('#next');
    var score = document.querySelector('#score');
    // const $score = document.getElementById("score");
    if (catMaru.getAttribute('visible') == true) {
        switch (cnt) {
            case 1:
                hazure.setAttribute('visible', false);
                seikai.setAttribute('visible', true);
                catBatu.setAttribute('visible', false);
                next.setAttribute('visible', true);
                score++;
                break;
            case 2:
                seikai.setAttribute('visible', false);
                hazure.setAttribute('visible', true);
                catBatu.setAttribute('visible', false);
                next.setAttribute('visible', true);
                break;
            case 3:
                hazure.setAttribute('visible', false);
                seikai.setAttribute('visible', true);
                catBatu.setAttribute('visible', false);
                next.setAttribute('visible', true);
                score++;
                break;
            case 4:
                seikai.setAttribute('visible', false);
                hazure.setAttribute('visible', true);
                catBatu.setAttribute('visible', false);
                next.setAttribute('visible', true);
                break;
            case 5:
                hazure.setAttribute('visible', false);
                seikai.setAttribute('visible', true);
                catBatu.setAttribute('visible', false);
                score++;
                console.log(score);
                score.setAttribute('value', "score" + String(score));
                // score.setAttribute('visible', true);

                break;
        }
    }
}

function batu() {
    var seikai = document.querySelector('#seikai');
    var hazure = document.querySelector('#hazure');
    var next = document.querySelector('#next');
    var score = document.querySelector('#score');
    if (catMaru.getAttribute('visible') == true) {
        switch (cnt) {
            case 1:
                seikai.setAttribute('visible', false);
                hazure.setAttribute('visible', true);
                next.setAttribute('visible', true);
                catMaru.setAttribute('visible', false);
                break;
            case 2:
                hazure.setAttribute('visible', false);
                seikai.setAttribute('visible', true);
                next.setAttribute('visible', true);
                catMaru.setAttribute('visible', false);
                score++;
                break;
            case 3:
                seikai.setAttribute('visible', false);
                hazure.setAttribute('visible', true);
                next.setAttribute('visible', true);
                catMaru.setAttribute('visible', false);
                break;
            case 4:
                hazure.setAttribute('visible', false);
                seikai.setAttribute('visible', true);
                next.setAttribute('visible', true);
                catMaru.setAttribute('visible', false);
                score++;
                break;
            case 5:
                seikai.setAttribute('visible', false);
                hazure.setAttribute('visible', true);
                score.setAttribute('visible', true);
                catMaru.setAttribute('visible', false);
                break;
        }
    }
}



function mondai() {

    var mondai1 = document.querySelector('#mondai1');
    var mondai2 = document.querySelector('#mondai2');
    var mondai3 = document.querySelector('#mondai3');
    var mondai4 = document.querySelector('#mondai4');
    var mondai5 = document.querySelector('#mondai5');
    // var mondaibun = document.getElementById('#mondaibun');

    switch (cnt) {
        case 1:
            mondai1.setAttribute('visible', true);

            // mondaibun.setAttribute('data-text'," りんごは赤い");
            break;
        case 2:
            mondai1.setAttribute('visible', false);
            mondai2.setAttribute('visible', true);
            break;

        case 3:
            mondai2.setAttribute('visible', false);
            mondai3.setAttribute('visible', true);
            break;
        case 4:
            mondai3.setAttribute('visible', false);
            mondai4.setAttribute('visible', true);
            break;
        case 5:
            mondai4.setAttribute('visible', false);
            mondai5.setAttribute('visible', true);
            break;
    }

}

function next() {
    var next = document.querySelector('#next');
    var seikai = document.querySelector('#seikai');
    var hazure = document.querySelector('#hazure');

    if (next.getAttribute('visible') == true) {
        hazure.setAttribute('visible', false);
        seikai.setAttribute('visible', false);
        next.setAttribute('visible', false);
        catMaru.setAttribute('visible', true);
        catBatu.setAttribute('visible', true);
        cnt++;
        mondai();
        mondaibun(cnt);
    }
}



// マウスを押したとき
function onMouseDown(event) {
    isMouseDown = true;
}

// マウスを動かした時
function onMouseMove(event) {

}

// マウスを離したとき
function onMouseUp(event) {
    isMouseDown = false;
}

function getMouseX(event) {
    if (event.type.indexOf("touch") == -1)
        return event.clientX;
    else
        return event.touches[0].clientX;
}

function getMouseY(event) {
    if (event.type.indexOf("touch") == -1)
        return event.clientY;
    else
        return event.touches[0].clientY;
}



