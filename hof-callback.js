/*
1 Ans:
A higher-order function is a function that takes another function(s) as an argument(s) and/or returns a function to its callers.
Here, the function(s) which is passed as the argument is called as the call-back function.


2 Ans:
Filter is a higher order function as it takes in a callback function that returns true/false 


*/
/*
3 Ans:In below program, blockchainLanguages function is HOF as its taking concat function as an argument.
Concat function is a callback function, as it is passed to blockchainLanguages function
*/
function blockchainLanguages(callback_fun, str) {
   str +=' js';
   callback_fun(str);
}

function concat(str)
{
  str += ' solidity';
  console.log(str);
}

blockchainLanguages(concat, 'blockchain');

/*4.
a) What will be the output of this program ?
Ans: 
Hello John
Hello Tina
Hello Kale
Hello Max
b) Which function is a Higher Order function here ?
Ans:
useFunction, as its taking argFn function as argument
*/
