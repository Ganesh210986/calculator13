let screen=document.querySelector(".screen");
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
        screen.value=eval(screen.value);
    }
    catch(error){
        screen.value="Error detected";
    }
   
}