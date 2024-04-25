let isReverse = true;
let isCelsius = true;
var muncul = true;


function convert(){
    let explaination;

        let celsiusInput = document.getElementById('celsiusInput').value;
        let celsius = celsiusInput;

        if( celsiusInput == ""){
            alert("Tolong masukkan angka yang valid!");
            return;
        }

        let fahrenheit = (celsius * 9/5) +32;
        document.getElementById('fahrenheitInput').value = fahrenheit;
        explaination = "(" + celsiusInput + " X 9/5) + 32 = " + fahrenheit.toFixed(2)
        document.getElementById('explainationInput').value = explaination;
}

function convertReverse(){
    let explainationReverse;

    let fahrenheitInput = document.getElementById('fahrenheitInputReverse').value;
    let fahrenheit = fahrenheitInput;

    if( fahrenheitInput == ""){
        alert("Tolong masukkan angka yang valid!");
        return;
    }

    let celcius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsiusInputReverse').value = celcius;
    explainationReverse = "(" + fahrenheitInput + " - 32) X 5/9 = " + celcius;
    document.getElementById('explainationInputReverse').value = explainationReverse;

}

function reset(){
    document.getElementById('celsiusInput').value = "";
    document.getElementById('fahrenheitInput').value = "";
    document.getElementById('celsiusInputReverse').value = "";
    document.getElementById('fahrenheitInputReverse').value = "";

}


function reverse(){
    let cToF = document.getElementById('celcius-to-fahrenheit');
    let fToC = document.getElementById('fahrenheit-to-celsius');
    
    if (isReverse) {
        fToC.style.display = "flex";
        cToF.style.display = "none";
        isReverse = false;
    } else {
        fToC.style.display = "none";
        cToF.style.display = "flex";
        isReverse = true;
    }

    document.getElementById('celsiusInput').value = "";
    document.getElementById('fahrenheitInput').value = "";
    document.getElementById('celsiusInputReverse').value = "";
    document.getElementById('fahrenheitInputReverse').value = "";
    document.getElementById('explainationInputReverse').value = "";
    document.getElementById('explainationInput').value= "";
}

