function Ship() {
    return(
        <div className="ship"></div>
    );
}

document.onkeydown = detectKey;
function detectKey(e) {
    var posLeft = document.querySelector('.ship').offsetLeft;
    var posTop = document.querySelector('.ship').offsetTop;
    e = e || window.event;
    if (e.keyCode == '87') {
        // up arrow
        document.querySelector('.ship').style.top  = (posTop-25)+"px";
    }
    else if (e.keyCode == '83') {
        // down arrow
        document.querySelector('.ship').style.top  = (posTop+25)+"px";
    }
    else if (e.keyCode == '65') {
       // left arrow
        document.querySelector('.ship').style.left  = (posLeft-25)+"px";
    }
    else if (e.keyCode == '68') {
       // right arrow
        document.querySelector('.ship').style.left  = (posLeft+25)+"px";
    }
}

export default Ship;