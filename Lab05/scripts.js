const orangeCircle = document.querySelector("#orangeCircle");
const blueCircle = document.querySelector("#blueCircle");
const events = [];
let startX1 = 50;
let startY1 = 80;
let startX2 = 50;
let startY2 = 250;
let dx = 8;
let dy = 3;
let flag = false;
let interval;

function buttonsWork() {
    document.querySelector("#playButton").addEventListener("click", () => {
        localStorage.clear();
        work.setAttribute("style", "display: flex;");
        document.querySelector("#textField").innerHTML = "You started playing";
        events.push("You started playing");
        localStorage.setItem(new Date(), "You started playing");
        document.querySelector("#localStorage").value = "";
    });

    document.querySelector("#closeButton").addEventListener("click", () => {
        work.setAttribute("style", "display: none;");
        document.querySelector("#textField").innerHTML = "You chose to Close";
        events.push("You chose to Close");
        localStorage.setItem(new Date(), "You chose to Close");
        let keys = Object.keys(localStorage),
            values = [],
            i = keys.length;

        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
        keys.sort();
        keys.forEach((item) => {
            if(events.includes(localStorage.getItem(item))) {
                document.querySelector("#localStorage").value += `${localStorage.getItem(item)}   -   ${item}\n`;
            }
        });
    });

    document.querySelector("#startButton").addEventListener("click", () => {
        orangeCircle.setAttribute("style", `visibility:visible`);
        blueCircle.setAttribute("style", `visibility:visible`);
        if(!flag) {
            interval = setInterval(play, 20);
        }
        flag = true;
        document.querySelector("#startButton").setAttribute("style", "display: none;");
        document.querySelector("#stopButton").setAttribute("style", "display: block;");
        document.querySelector("#textField").innerHTML = "Playing started";
        events.push("You chose to Close");
        localStorage.setItem(new Date(), "Playing started");
    });

    document.querySelector("#stopButton").addEventListener("click", () => {
        document.querySelector("#startButton").setAttribute("style", "display: block;");
        document.querySelector("#stopButton").setAttribute("style", "display: none;");
        document.querySelector("#textField").innerHTML = "You stopped playing";
        events.push("You stopped playing");
        localStorage.setItem(new Date(), "You stopped playing");
        clearInterval(interval);
        flag = false;
    });

    document.querySelector("#reloadButton").addEventListener("click", () => {
        document.querySelector("#reloadButton").setAttribute("style", "display: none;");
        document.querySelector("#startButton").setAttribute("style", "display: block;");
        document.querySelector("#textField").innerHTML = "Reloding";
        localStorage.setItem(new Date(), "Reloding");
        events.push("Reloding");
    });
}

function randomCoordinates() {
    startY1 = Math.floor(Math.random() * Math.floor(document.querySelector("#anim").offsetHeight - 90)) + 90;
    startX2 = Math.floor(Math.random() * Math.floor(document.querySelector("#anim").offsetWidth - 70)) + 70;
}

function play() {
    orangeCircle.setAttribute("style", `top: ${startY1}px; left: ${startX1}px`);
    blueCircle.setAttribute("style", `top: ${startY2}px; left: ${startX2}px`);
    orangeCircle.style.display = "block";
    blueCircle.style.display = "block";

    if(startX1 + dx > document.querySelector("#anim").offsetWidth-orangeCircle.offsetWidth || startX1 + dx < 2) {
        dx = -dx;
        document.querySelector("#textField").innerHTML = "Horizontal circle hit the wall";
        events.push("Horizontal circle hit the wall");
        localStorage.setItem(new Date(), "Horizontal circle hit the wall");
    }
    startX1 += dx;
    if(startY2 + dy > document.querySelector("#anim").offsetHeight || startY2 + dy < 50) {
        dy = -dy;
        document.querySelector("#textField").innerHTML = "Vertical circle hit the wall";
        events.push("Vertical circle hit the wall");
        localStorage.setItem(new Date(), "Vertical circle hit the wall");
    }
    startY2 += dy;
    if(Math.abs(startY1 - startY2) < orangeCircle.clientHeight - 20 + 1 && Math.abs(startX1 - startX2) < orangeCircle.clientWidth - 20 + 1){
        clearInterval(interval);
        flag = false;
        randomCoordinates();
        document.querySelector("#reloadButton").setAttribute("style", "display: block;");
        document.querySelector("#startButton").setAttribute("style", "display: none;");
        document.querySelector("#stopButton").setAttribute("style", "display: none;");
        document.querySelector("#textField").innerHTML = "Circles faced";
        events.push("Circles faced");
        localStorage.setItem(new Date(), "Circles faced");
    }
}

(function main() {
    buttonsWork();
})();

