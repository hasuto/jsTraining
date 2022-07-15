

// グローバルで使用する変数の宣言などをここに追加

window.onload = appInit;

// function appInit(){
//     displayPanel = document.getElementById("displayPanel");
//     displayPanel.textContent = "テンプレート動作テスト";
// }

var cards, card1, card2;
var places, matched;
var clickEvent;

<<<<<<< HEAD
function applnit(){

    if(typeof document.ontouchstart == "undefined"){
        clickEvent="mousedown";
    }else{}
}
=======
function appInit(){
    if(typeof document.ontouchstart == "undefined"){
        clickEvent="mousedown";
    }else{
        clickEvent="touchstart";
    };

    var gamePanel = document.getElementById("gamePanel");
    places = gamePanel.getElementsByTagName("div");
    matched = document.getElementsByClassName("card matched");

    initCards();
    deal();
    
}

function initCards(){

    cards = [];
    var gamePanel = document.getElementById("gamePanel");

    for(var i = 1; i <= 20; i++){
        var div = document.createElement("div");
        gamePanel.appendChild(div);
        cards.push(Math.ceil(i/2));
    };
}

function deal(){
    card1 = null;
    card2 = null;

    for(var i = 0; i < places.length; i++){
        places[i].className = "card back";
        places[i].textContent = "";
        places[i].addEventListener(clickEvent, openCard, false);
    };
}

function openCard(event){
    event.preventDefault();
    if(card2 != null) return;

    var index = -1;
    var i = 0;

    while(i < places.length){
        if(places[i] == event.target){
            index = i;
            break;
        }
        i++;
    };

    event.target.className="card face";
    event.target.textContent = cards[index];
    event.target.removeEventListener(clickEvent, openCard);

    if(card1 == null){
        card1 = index;
    }else{
        if(cards[index] == cards[card1]){
            card2 = index;
            setTimeout(keepCard, 100)
        }else{
            card2 = index;
            setTimeout(flipBack, 400);
        }
    }

    if(time0 == -1){
        var date=new Date();
        time0 = date.getTime();
        tick();
    }
}

function flipBack(){

    var place1 = places[card1];
    var place2 = places[card2];

    place1.className = "card back";
    place2.className = "card back";
    place1.textContent = "";
    place2.textContent = "";
    place1.addEventListener(clickEvent, openCard,false);
    place2.addEventListener(clickEvent,openCard,false);

    card1=null;
    card2=null;
}

function keepCard(){

    var place1 = places[card1];
    var place2 = places[card2];

    place1.className = "card matched";
    place2.className = "card matched";
    place1.textContent = "";
    place2.textContent = "";

    card1 = null;
    card2 = null;
}

function deal(){
    card1 = null;
    card2 = null;

    var shuffled=[];

    for(var i = 0; i<places.length; i++){

        var num = Math.floor(Math.random() * cards.length);
        var card = cards[num];
        shuffled.push(card);

        var set1 = cards.slice(0,num);
        var set2 = cards.slice(num + 1);
        cards = set1.concat(set2);

        places[i].className = "card back";
        places[i].textContent = "";
        places[i].addEventListener(clickEvent, openCard, false);

    };
    cards = shuffled;
    shuffled = null;
}

var time0 = -1, timer, bestRecord;
var timeView, bestView;

timeView = document.getElementById("time");
bestView = document.getElementById("best");

function tick(){
    clearTimeout(timer);
    var date = new Date();
    var time = date.getTime();
    timeView.textContent = getTimeString(time - time0);
    timer = setTimeout(tick,100);
}

function getTimeString(value){
    
var date = new Date(value);

var h = fixDigits(date.getUTCHours());
var m = fixDigits(date.getUTCMinutes());
var s = fixDigits(date.getUTCSeconds());
var ms = fixDigits(Math.floor(date.getUTCMilliseconds() / 10));

return m + ":" + s + "." + ms;
}

function fixDigits(number){
    string = number.toString();
    if(string.length == 1) string = "0" + string;
    return string;
}
>>>>>>> 4511728f84adb6e90feb1167d81dd1902b1673c5
