window.onload = (e)=>{
	//console.log("onload!!");
	const scene = document.querySelector("a-scene");

	const sound01 = document.getElementById("my_sound01");
    const roomobj = document.getElementById("room");
    const sound = sound01.components.sound;
    if(sound.isPlaying){
        sound.pauseSound();
    }else{
        sound.playSound();
    }
roomobj.addEventListener("click", (e)=>{

    
});

    }
    
	// const btn01 = document.getElementById("my_btn01");
	// btn01.addEventListener("click", (e)=>{
	// 	const sound = sound01.components.sound;
	// 	if(sound.isPlaying){
	// 		sound.pauseSound();
	// 		e.target.setAttribute("src", "#img_pause");
	// 	}else{
	// 		sound.playSound();
	// 		e.target.setAttribute("src", "#img_play");
	// 	}
	// });
