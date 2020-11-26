function cnhangeBlocks() {
    let el = document.getElementById("txt1").innerHTML;
    document.getElementById("txt1").innerHTML = document.getElementById("txt2").innerHTML;
    document.getElementById("txt2").innerHTML = el;
}

function square() {
    let val = 7;
    return ((Math.pow(val, 2)) * (Math.sqrt(25 + 10 * Math.sqrt(5))) ) / 4; 
}

function reverseNumber() {
    let val = 84;
    let y = 0;
    for(; val; val = Math.floor(val / 10)) {
        y *= 10;
        y += val % 10;
    }
    return y;
}
function setCoockies()
{
    alert("Reversed value is " + reverseNumber());
    alert("Saved to cookies. After you click 'OK' data from coockies will be deleted.");
    document.cookie = reverseNumber() +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    alert("Coockies deleted.");
}

function changeColorSB() {
    document.getElementById("sidebar").style.borderColor = "red";
  
}

function changeColor1() {
    document.getElementById("content1").style.borderColor = "blue";
}

function changeColor2() {    
    document.getElementById("content2").style.borderColor = "green";
}

function changeColor3() {   
    document.getElementById("content3").style.borderColor = "red";
}

function changeColorF() {   
    document.getElementById("footer").style.borderColor = "red";
}

function changeColorH() {   
    document.getElementById("header").style.borderColor = "white";
}

function inputValue(from, to) {
    $(to).val($(from).html());
}

function readLS(elem){
    if(localStorage.getItem(elem)){
        $(elem).html(localStorage.getItem(elem));
    }
}

function addEvent(elemToChange, elemWithValue) {
    $(elemWithValue).change(function(){
        $(elemToChange).html($(elemWithValue).val());
        localStorage.setItem(elemToChange, $(elemWithValue).val());
    });
}

function clickButtons(button, elem) {
    $(button).click(function(){
        localStorage.removeItem(elem);
    });
}

function inputAll() {
    addEvent("#header", "#header-input");
    addEvent("#sidebar", "#sidebar-input");
    addEvent("#content1", "#content1-input");
    addEvent("#content2", "#content2-input");
    addEvent("#content3", "#content3-input");
    addEvent("#footer", "#footer-input");

    clickButtons("#header-button", "#header");
    clickButtons("#sidebar-button", "#sidebar");
    clickButtons("#content1-button", "#content1");
    clickButtons("#content2-button", "#content2");
    clickButtons("#content3-button", "#content3");
    clickButtons("#footer-button", "#footer-input");
}

function setHtml() {
    // readLS("#header");
    // readLS("#sidebar");
    // readLS("#content1");  
    // readLS("#content2");
    // readLS("#content3");
    // readLS("#footer");

    // inputValue("#header", "#header-input");
    // inputValue("#sidebar", "#sidebar-input")
    // inputValue("#content1", "#content1-input");
    // inputValue("#content2", "#content2-input");
    // inputValue("#content3", "#content3-input");
    // inputValue("#footer", "#footer-input");
  
    inputAll();
} 

(function menu()
{
    // task num 1
	cnhangeBlocks();                                       
    
    // task num 2
    let doc = document.getElementById("site");                      
    doc.append( Math.round(square()));
    
    // task num 3
    setCoockies();                                      
    
    // task num 5
    window.addEventListener("click", function() 
    { 
        $("#site").append("<p> CLICKED! </p>");
    });

    // task num 6
    document.addEventListener("DOMContentLoaded", setHtml); //task 6    
})();
