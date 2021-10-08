var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("myRange");
var resultField1 = document.getElementById("resultField1");
var resultField2 = document.getElementById("resultField2");
var form = document.getElementById("myTipCalculator");

var displayRange = document.getElementById("displayRange");

// Display the tip value
displayRange.innerText = numField2.value + "%";

function mySlider(){
    displayRange.innerText = numField2.value + "%";
};
numField2.addEventListener('input', mySlider);

function calculate(event){
    if(!numField1.value || !numField2.value){
        numField1.value == 0;
     }
    else{
        var num1 = parseFloat(numField1.value);
        var num2 = parseFloat(myRange.value);
        displayRange.innerText = numField2.value + "%";
      
        var result1 = (num1 * (num2 / 100)).toFixed(2);
        // return result1;
        var result2 = (num1 + (num1 * (num2 / 100))).toFixed(2);
        // return result2;

        resultField1.value = "$ " + result1;
        resultField2.value = "$ " + result2;
       
        event.preventDefault();
    }
}

form.addEventListener('change', calculate);
form.addEventListener('submit', calculate);