function getHistory() {
    return document.getElementById("history-value").innerText
}

function printHistory(num) {
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output").innerText;
}

function printOutput(num){
    console.log(num)
    document.getElementById("output").innerText=getFormattedNumber(num);
}

function getFormattedNumber(num){
    let n = Number(num)
    let value = n.toLocaleString("en");
    console.log(value)
    return document.getElementById("output").innerText=value;
    // return value;
}

function getReverseFormattedNumber(num){
    return Number(num.replace(/,/g,''));
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i<operator.length; i++) {
    operator[i].addEventListener('click',function(){
    if (operator[i].id=="clear") {
        printOutput("");
        printHistory("");        
    }else{
        let output = getOutput();
        let history = getHistory();
        history = history + output
        if (this.id == "=") {
            let result = eval(history);
            printOutput(result);     
            printHistory("");       
        }else{
            history = history + this.id;            
            printHistory(history);   
            printOutput("");                     
        }
    }
});
}

let number = document.getElementsByClassName("number");
for (let i = 0; i<number.length; i++) {
    number[i].addEventListener('click', function(){
        let output=getReverseFormattedNumber(getOutput());
        if (output != NaN){
        console.log(number[i].id);
        output=output+number[i].id;        
        getFormattedNumber(output);
        }
    });
}
