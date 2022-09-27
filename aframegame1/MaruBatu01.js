// const objs = document.querySelectorAll('a-entity'); 

// objs.forEach((entity) => {
//     entity.addEventListener('click',function() {
//         console.log("click");
//     });
// });
var sceneEl;

var catMaru;
var catBatu;
var boxColor = 1; //１:赤　→　２：青　→　３：緑　→　１：赤へもどる
let seikai = document.getElementById('seikai');
var camera;
var cursor;

var isMouseDown = false;

let changeElement = (el)=> {

    if(el.style.display==''){
      el.style.display='none';
    }else{
      el.style.display='';
    }
  
  }

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
// マウスをクリックしたとき
function onMouseClick1(event) {
    // if (boxColor == 1) {//Boxの色を赤から青に変えます

    //    catMaru.setAttribute("color", "#0000FF");
    //    boxColor = 2; 
        
    // } else if (boxColor == 2) {//Boxの色を青から緑に変えます

    //    catMaru.setAttribute("color", "#00FF00");
    //    boxColor = 3; 
        
    // } else if (boxColor == 3) {//Boxの色を緑から赤に変えます 

    //    catMaru.setAttribute("color", "#FF0000");
    //    boxColor = 1;
        
    // }    
   console.log("Maru");
   changeElement(box);
}
function onMouseClick2(event){
    console.log("Batu");
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

