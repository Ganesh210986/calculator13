let screen=document.querySelector(".screen");
let history=[];
let historylist=document.querySelector(".History1");
function displayOnScreen(num){
    screen.value+=num;
}
function clearScreen(){
    screen.value="";

}
function backSpace(){
    screen.value = screen.value.slice(0, -1);
}
function percentage() {
    const currentValue = screen.value;
    

    const lastNumber = parseFloat(currentValue.split(/[-+*/]/).pop());
    
    if (!isNaN(lastNumber)) {
       
        screen.value = currentValue.replace(/([\d.]+)$/, lastNumber / 100);
    } else {
        screen.value = "Error";
    }
}
function calculate(){
    try{
        const expression= screen.value;
         let result=eval(screen.value);
        addToHistory(expression,result);
        screen.value=result;

    }
    catch(error){
        screen.value="Error detected";
    }
   
}
function addToHistory(expression,result){
let li=document.createElement("li");
historylist.appendChild(li);
li.innerHTML=`${expression}=${result}`;
let dlnbutton=document.createElement("img");
dlnbutton.src="trash.png";
dlnbutton.addEventListener("click", function(){
    historylist.removeChild(li);
    historylist.removeChild(dlnbutton);

})
li.appendChild(dlnbutton);

}


