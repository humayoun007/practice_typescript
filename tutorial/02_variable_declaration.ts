

//old way using var

var oneApple = 1;

function scooping(initialize: boolean) {
    if (initialize) {
        var x = 100;
    }

    return x;//may be return undefined
}

scooping(true);//return 100
scooping(false); //return undefined


function scoopingV2(initialize: boolean) {
    if (initialize) {
        let x = 100;
    }

    //return x; //can't find name x --compile error for let keyword
}

//below code : showing 5 , 5 , 5 ...same in 5 times
for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

//solution to call IIFE function
for (var i = 0; i < 5; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}

//this should work
for (let i = 0; i < 10 ; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

//a++; // illegal to use 'a' before it's declared;
let a;

//example of const
const luckyNumber = 7;
//luckyNumber = 9; //you can't assign to const number again

//destructing example
let myinput = [4,8];
let [firstnumber,secondnumber]=myinput;
console.log(firstnumber); //output 4
console.log(secondnumber); //output 8

//swapping
[firstnumber,secondnumber] = [secondnumber,firstnumber] 

//parameter passing in function --destructing
function destructingFunction([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
destructingFunction([1, 2]);

//for remaining items
let [firstn,...rest] = [1,2,3,4];
console.log(firstn); //output 1
console.log(rest); //output [ 2, 3, 4 ]





