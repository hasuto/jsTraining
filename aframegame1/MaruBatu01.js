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

var cnt = 0;
   
var camera;
var cursor;

var isMouseDown = false;

// sound01.playSound();


// let changeElement = (el)=> {

//     if(el.style.display==''){
//       el.style.display='none';
//     }else{
//       el.style.display='';
//     }
  
//   }

function init() {

    sceneEl = document.querySelector("a-scene");
    catMaru = sceneEl.querySelector("#catMaru"); 
    catBatu = sceneEl.querySelector("#catBatu");
    
    // マウス、タッチ処理を呼び出すイベントリスナーをセット
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("touchstart", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);

    catMaru.addEventListener("click", onMouseClick1);
    catBatu.addEventListener("click", onMouseClick2);

}



function render() {
  
    requestAnimationFrame(render);
    
}

//ゲームスタートボタン押したとき
function start(){
    var startbutton = document.querySelector('#start');
    startbutton.setAttribute('visible', false);
    
    cnt++;
    mondai();
}

// マウスをクリックしたとき
function onMouseClick1(event) {
    var seikai = document.querySelector('#seikai');
    var next = document.querySelector('#next');
   console.log("Maru");
   cnt++;
   console.log(cnt);

   hazure.setAttribute('visible',false);
   seikai.setAttribute('visible',true);
   next.setAttribute('visible',true);
}
function onMouseClick2(event){
    var hazure = document.querySelector('#hazure');
    var next = document.querySelector('#next');
    console.log("Batu");
    cnt++;
    console.log(cnt);
    seikai.setAttribute('visible',false);
    hazure.setAttribute('visible',true);
}

function mondai(){
    var mondai1 = document.querySelector('#mondai1');
    var mondai2 = document.querySelector('#mondai2');
    var mondai3 = document.querySelector('#mondai3');
    
    if(cnt == 1){
    mondai1.setAttribute('visible',true);
    }else if(cnt == 2){
        
    }

}

// マウスを押したとき
function onMouseDown(event) {
    isMouseDown = true;
}

// マウスを動かした時
function onMouseMove(event) {
    // if (isMouseDown) {
    //     // 3DモデルをX軸とY軸方向に回転させます       
    //     if ( catMaru )            
	// 	    catMaru.setAttribute("rotation", (getMouseX(event)*2)+" "+(getMouseY(event)*2)+" 0");
       
    // }
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

window.onload = function() {
    init(); 
    render();
};

