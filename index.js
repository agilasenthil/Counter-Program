let number = 0;
const incButton = document.getElementById("myInc");
const decButton = document.getElementById("myDec");
const resButton = document.getElementById("myRes");
const countLabel = document.getElementById("counterDisplay");

//When Increment Button is Clicked
incButton.onclick = function(){
    number++;
    countLabel.textContent = number;
}

//When reset button is clicked
resButton.onclick = function(){
    number = 0;
    countLabel.textContent = number;
}

//When Decrement Button is Clicked
decButton.onclick = function(){
    if(number == 0){
        window.alert(`The number cannot be less than 0`);
        return false;
    }
    number--;
    countLabel.textContent = number;
}