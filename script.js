

function playSound (event){

    let code = typeof event === "string"? event : event.code;
    const audio = document.querySelector(`audio[data-key = "${code}"]`);
    const box = document.querySelector(`.key[data-key = "${code}"]`);

    if (!audio) return;

    box.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener("keydown",playSound);

const container = document.querySelector(".container");

container.addEventListener("click",function (e){

    if (e.target.closest(".key")){
        const param = e.target.closest(".key").getAttribute("data-key");
        playSound(param);
    }
});

const keys = document.querySelectorAll(".key");

keys.forEach((key)=>{
    key.addEventListener("transitionend",function (e){
        
        e.target.classList.remove("playing");
    })
})

