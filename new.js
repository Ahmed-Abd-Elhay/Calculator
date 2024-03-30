let outPutScreen = document.getElementById("outputValue");
function display(numbers) {
    outPutScreen.value += numbers; 
};
function allclear() {
    outPutScreen.value = "";
};
function del() {
    outPutScreen.value = outPutScreen.value.slice(0, -1);
};
function calculate() {
    try {
        outPutScreen.value = eval(outPutScreen.value);
    } catch(err) {
        outPutScreen.value = "Error";
    }
}
