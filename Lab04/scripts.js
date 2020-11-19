// task 1
let delay = 5000;
let BlockId = 1;
let nextBlock = document.getElementById('bl6').innerText;

function task1() {
    let timer = setInterval(delayChange, delay);

    function delayChange() {
        if (BlockId === 1) {
            let currentBlock = document.getElementById('bl1').innerText;
            document.getElementById('bl1').innerText = nextBlock;
            nextBlock = currentBlock;
        } else {
            if (BlockId > 7) {
                clearInterval(timer);
            }
            let currentBlock = document.getElementById('bl' + BlockId). innerText;
            document.getElementById('bl' + BlockId).innerText = nextBlock;
            nextBlock = currentBlock;
        }
        BlockId += 1;
        clearInterval(timer);
        delay = 5000;
        task1();
    }
}

// task 2

let flag = 0;

function clicked() {
    setTimeout(function() {
        if( flag == 0) {
            document.getElementById('bl1').style.color = "red";
            document.getElementById('bl6').style.color = "red";
            flag = 1;
        } else {
            document.getElementById('bl1').style.color = "black";
            document.getElementById('bl6').style.color = "black";
            flag = 0;
        }
    }, 5000);
}

function changeColorSecs() {
    let count = 1;
    let timer = setInterval(changeColor, 5000);
    function changeColor() {
        if (count % 2 === 1) {
            document.getElementById('bl3').style.backgroundColor = "yellow";
        } else {
            document.getElementById('bl3').style.backgroundColor = "#e6ffde";
        }
        count += 1;
    }
}

// task 3

// task 4

// task 5
