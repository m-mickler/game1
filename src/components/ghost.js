function Ghost() {
    return(
        <div className="ghost"></div>
    );
}

function GhostPosition() {
    return(console.log(document.querySelector('.ghost').style.top))
}

document.onkeydown = detectKey;
function detectKey(e) {
    var posLeft = document.querySelector('.ghost').offsetLeft;
    var posTop = document.querySelector('.ghost').offsetTop;
    e = e || window.event;
    if (e.keyCode == '87') {
        // up arrow
        document.querySelector('.ghost').style.top  = (posTop-25)+"px";
        console.log(posTop)
    }
    else if (e.keyCode == '83') {
        // down arrow
        document.querySelector('.ghost').style.top  = (posTop+25)+"px";
    }
    else if (e.keyCode == '65') {
       // left arrow
        document.querySelector('.ghost').style.left  = (posLeft-25)+"px";
    }
    else if (e.keyCode == '68') {
       // right arrow
        document.querySelector('.ghost').style.left  = (posLeft+25)+"px";
    }
    
}

export { Ghost, GhostPosition }