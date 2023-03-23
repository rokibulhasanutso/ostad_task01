// Assignment of module 01
/*
Question: Write a program that generates a multiplication table For a given number using a for loop.

Instructions: 
Create a JavaScript function called "multiplicationTable" that takes a single argument "num" (an integer) as input.
Inside the function, create a for loop that iterates from 1 to 10.
Inside the loop, multiply the current iteration number by the input "num" to generate the product.
Log the product to the console in the format "num x iteration = product".
Test the function with different input numbers to generate multiplication tables.
*/


// Answer:
let start = 1, end = 10;  // you can test here different input numbers. But you can just use integer inputs otherwaise

if(Number.isInteger(start) && Number.isInteger(end)){
    if(start <= end){
        // this function use for multiplication iterates table one by one.
        for(let count = start; count <= end; count++){
            console.log('Multiplication Table '+count);
            multiplicationTable(count); // call 'multiplicationTable' function.
            (count==end) ? console.log('\n\'Multiplication Table\' session End'):console.log(''); // "console.log('')" use for new blank line after one by one multiplication table.
        };
    }else{console.error('Error: Please input start number less than last number.')}
}else{console.error('Error: Please enter Integer number.')}

// this function use for genarate a multiplication tables.
function multiplicationTable(num=0){
    for(let count = 1; count <= 10; count++){  // In case of multiplication 1 to 10 number is fixed
        console.log(`${num} x ${count} = ${num*count}`);
    }
}
