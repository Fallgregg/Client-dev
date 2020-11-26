// task 1
let delay = 5000;
let BlockId = 1;
let nextBlock = document.getElementById('bl6').innerText;

function task1() {
    let timer = setInterval(changeDelay, delay);

    function changeDelay() {
        if (BlockId === 1) {
            let currentBlock = document.getElementById('bl1').innerText;
            document.getElementById('bl1').innerText = nextBlock;
            nextBlock = currentBlock;
        } else {
            if (BlockId > 6) {
                clearInterval(timer);
            }
            let currentBlock = document.getElementById('bl' + BlockId).innerText;
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
async function git(username, repository) {
    let response = await fetch("https://api.github.com/repos/" + username + "/" + repository + "/commits");
    if(response.ok) {
        let commit = await response.json();
        let name = [];
        let message = [];
        for(let i = 0; i < commit.length; i++) {
            name.push('\n' + commit[i].commit.author.name);
            message.push('\n' + commit[i].commit.message);
        }
        document.getElementById('name').innerText = name;
        document.getElementById('commit').innerText = message;
    } else {
        document.getElementById('error').style.color = "red";
        document.getElementById('error').innerText = 'Error: ' + response.status;
    }
} 


// task 4
function taskNum4() {
    callbacks(function() {
        console.log('First one');
    }, function () {
        console.log('Second one');
    })
}

function callbacks(callback1, callback2) {
    console.log('Callback for task 4 are:');
    callback1();
    callback2();
}

// task 5
let arr = [];
function addToArray() {
    if(document.getElementById('array').value.match(/^-?\d+(\.\d+)?$/)) {
        arr.push(document.getElementById('array').value);
    } 
        document.getElementById('array').value = '';
  }

function sortArray() {
    let str1 = "Array: " + arr;
    let str2 = "\nSorted array: " + selectionSort(arr);
    document.getElementById('result').innerText = str1 + str2;
}

function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}
