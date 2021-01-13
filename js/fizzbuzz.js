// FUNCTION #1  coding with Bobby's you tube video Traditional Solve using a loop
function FizzBuzzA(value1, value2){
    let returnValue = "";
    for(let loop = 1; loop <=100; loop++){
        if (loop%value1 == 0 && loop%value2 == 0) {
            returnValue += 'FizzBuzz  ';
        } 
        else if (loop%value1 == 0){
            returnValue +='Fizz  ';
        }
        else if (loop%value2 == 0){
            returnValue =+ 'Buzz  ';
        }
        else{
            returnValue += loop + ' ';
        }
    }
    return returnValue;
}

// FUNCTION #2   a better way?
 function FizzBuzzB(value1, value2) {
    let returnValue = "";
    let Fizz = false;
    let Buzz = false;
    for(let loop = 1 ; loop <= 100; loop ++ ){
        Fizz = loop % value1 == 0;
        Buzz = loop % value2 == 0;
        switch(true){
            case Fizz && Buzz :{
                returnValue += 'FizzBuzz ';
                break;
            }
            case Fizz :{
                returnValue += 'Fizz ';
                break;
            }
            case Buzz :{
                returnValue += 'Buzz ';
                break;
            }
            default : {
                returnValue += loop + ' ';
            }
        }
    }
    return returnValue;
}
// FUNCTION #3 method number 3 not traditional
function FizzBuzzC(value1,value2) {
    let returnValue = "";
    for (let loop = 1; loop <= 100; loop++){
        returnValue += ((loop % value1 == 0 ? 'Fizz' : '') + (loop % value2 == 0 ? 'Buzz' : '') || loop) + ' ';
    }
    return returnValue;
}

// Meta Strat----- I will revist this function @ a later time!!!!!
// function FizzBuzzD(value1,value2) {
//     let returnArray= [];
//     for(let loop = 1; loop <= 100; loop++){
//         returnArray[loop] = ((loop % val1 == 0 ? 'Fizz' : '') + (loop % val2 == 0 ? 'Buzz' : '') || loop);
//     }
//     return returnArray;
// }

//  This Function DisPLays  the  Solve Functiom Above   it Calls and Uses the Function
function buzzIt() {
    let output="";
    let val1 = document.getElementById('input1').value;
    let val2 = document.getElementById('input2').value;
    output = FizzBuzzC(val1, val2);
     document.getElementById('result').innerHTML = output;
}



// this function is the extra credit function
function FizzBuzzX(value3,value4) {
    let returnValueX = "";
    for (let loopX = 1; loopX <= 100; loopX++){
        returnValueX += ((loopX % value3 == 0 ? 'Fizz' : '') + (loopX % value4 == 0 ? 'Buzz' : '') || loopX) + ' ';
    }
    return returnValueX;
}


//This function displays the Extra Credit results----
function buzzItX() {
    let outputX="";
    let val3 = document.getElementById('input3').value;
    let val4 = document.getElementById('input4').value;
    outputX = FizzBuzzX(val3, val4);
     document.getElementById('resultX').innerHTML = outputX;
}


// --------Drew's code along
// This uses an anonymous function to call a named function
// document.getElementById("fizzButton").addEventListener("click", function () {
//     let num1 = document.getElementById("input1").value;
//     let num2 = document.getElementById("input2").value;
//     if (num1 > num2) {
//         alert("Number 1 must be less than Number 2");
//     } else {
//         runTheNumbers(num1, num2)
//     }
// });

// //This is the named function, it will only run when something else calls it
// function runTheNumbers(num1, num2) {
//     for (let loop = num1; loop <= num2; loop++) {
//         document.getElementById("result").innerText += loop;
//     }
// }

//The premise of FizzBuzz is to take 2 user inputs and find all of their multiples between 1 and 100
//If the loop count is a multiple of input 1 it is a Fizz case
//If the loop count is a multiple of input 2 it is a Buzz case
//If the loop count is a multiple of both input it is a FizzBuzz case
//The order you test is MIGHT be very important