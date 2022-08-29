import sound from './audio/jump.mp3'

function Ghost() {
    return(
        <div className="ghost"></div>
    );
}

function GhostPosition() {

    return({"top": document.querySelector('.ghost').style.top, 
        "left":document.querySelector('.ghost').style.left})
}

let mySound = new Audio(sound);

document.onkeydown = detectKey;

function detectKey(e) {
    var posLeft = document.querySelector('.ghost').offsetLeft;
    var posTop = document.querySelector('.ghost').offsetTop;
    e = e || window.event;
    const strTop = document.querySelector('.ghost').style.top;
    const strLeft = document.querySelector('.ghost').style.left;
    const numTop = strTop.replace(/\D/g, "");
    const numLeft = strLeft.replace(/\D/g, "");

    if (e.keyCode == '87' && numTop > 163) {
        // move up "W"
        document.querySelector('.ghost').style.top  = (posTop-25)+"px";
        mySound.play()
    }
    else if (e.keyCode == '83' && numTop <= 630) {
        // move down "S"
        document.querySelector('.ghost').style.top  = (posTop+25)+"px";
        mySound.play()
    }
    else if (e.keyCode == '65' && numLeft > 13) {
       // move left "A"
        document.querySelector('.ghost').style.left  = (posLeft-25)+"px";
        mySound.play()
    }
    else if (e.keyCode == '68' && numLeft <= 487) {
       // move right "D"
        document.querySelector('.ghost').style.left  = (posLeft+25)+"px";
        mySound.play()
    }
}

export { Ghost, GhostPosition }