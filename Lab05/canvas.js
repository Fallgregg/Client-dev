let context = document.querySelector("#canvas").getContext('2d');
const events = [];
let startX1 = 50;
let startX2 = 80;
let startY1 = 50;
let startY2 = 100;
let dx = -2;
let dy = -1;
let flag = false;
let interval;

function buttonsWork() {
    document.querySelector("#playButton").addEventListener("click", () => {
        localStorage.clear();
        document.querySelector("#work").setAttribute("style", "display: flex;");
        document.querySelector("#textField").innerHTML = "You started playing";
        events.push("You started playing");
        localStorage.setItem(new Date(), "You started playing");
    });

    document.querySelector("#closeButton").addEventListener("click", () => {
        document.querySelector("#work").setAttribute("style", "display: none;");
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
        if(!flag) {
            interval = setInterval(play, 10);
        }
        flag = true;
        document.querySelector("#startButton").setAttribute("style", "display: none;");
        document.querySelector("#stopButton").setAttribute("style", "display: block;");
        document.querySelector("#textField").innerHTML = "Playing started";
        events.push("Playing started");
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
    startY1 = Math.floor(Math.random() * Math.floor(canvas.height - 2*10)) + 10;
    startX2 = Math.floor(Math.random() * Math.floor(canvas.width - 2*10)) + 10;
}

function circles(x, y, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, 10, 0, 2 * Math.PI, true);
    context.fill();
    context.closePath();
}

function play() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    circles(startX1, startY1, "rgb(255, 165, 0)");
    circles(startX2, startY2, "rgb(0, 0, 255)");

    if(startX1 + dx > canvas.width-10 || startX1 + dx < 10) {
        dx = -dx;
        document.querySelector("#textField").innerHTML = "Horizontal circle hit the wall";
        events.push("Horizontal circle hit the wall");
        localStorage.setItem(new Date(), "Horizontal circle hit the wall");
    }
    startX1 += dx;
    if(startY2 + dy > canvas.height-10 || startY2 + dy < 10) {
        dy = -dy;
        document.querySelector("#textField").innerHTML = "Vertical circle hit the wall";
        events.push("Vertical circle hit the wall");
        localStorage.setItem(new Date(), "Vertical circle hit the wall");
    }
    startY2 += dy;
    if(Math.abs(startY1 - startY2) < 11 && Math.abs(startX1 - startX2) < 11) {
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

(function main(){
    buttonsWork();
})();

