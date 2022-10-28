

var sceneEl;
var isMouseDown = false;



const cameraWrapper = document.getElementById("camera-wrapper")
const camera = cameraWrapper.querySelector("a-camera")
const cameraRotation = camera.getAttribute("rotation") // <a-camera>の現在のrotation(回転)を取得</a-camera>

cameraWrapper.setAttribute("rotation", { y:45})

window.onload = function () {
    init();
    render();
};

function init() {

    sceneEl = document.querySelector("a-scene");




    // マウス、タッチ処理を呼び出すイベントリスナーをセット
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("touchstart", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);


}


function render() {

    requestAnimationFrame(render);

}


function kentiku_link() {
    window.location.href = 'yahaba/kenntiku/kenntikucad.html';
}

function sande_link(){
    window.location.href = 'yahaba/sangyoudezain/mokuzaikakou.html';
}

function marubatu_game(a){
    window.location.href = '/aframegame1/MaruBatu01.html?a='+a;
}

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

