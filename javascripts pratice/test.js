function multiply (a, b){

    var times = (a * b);
    return times;

}

var Myoutcome = multiply (3,4);
document.write(Myoutcome);

function division (a, b){

    var divide = (a / b);
    return divide;

}

var finalanswer = division (8,2);
document.write(finalanswer);

function subtraction (a, b){

    var minus = (a - b);
    return minus;

}

var myresult = subtraction (9,2);
document.write(myresult);

function addition (a, b){

    var sum = (a + b);
    return sum;

}

var answer = addition (4,9);
document.write(answer);



function addition(){

    var sum = 0;
    for ( e = 0; e < arguments.length; e++) {
        sum += arguments[e];
        
    }

    console.log(sum)
    return sum;

    addition(2,4,6,8,10,11)
}