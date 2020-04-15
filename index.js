// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively
. Create another value called name and give it the value of your own name.
*/
let principalAmt = 200000;
let interestRate = .05;
let years = 30;

let monthlyInterestRate;
let periods;
let monthlyPayment;


// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/
monthlyInterestRate = .05/12; //round or not?
periods = years*12;
// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called 
monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called 
"numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/
//M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]

let base = 1 + monthlyInterestRate;
// console.log("base = " + base);
// console.log("monthlyInterestrate = " + monthlyInterestRate);

let resultTop = Math.pow(base, periods);
// console.log("resultTop =  " + resultTop);
// console.log("periods = " + periods);

let numerator = resultTop * monthlyInterestRate;
// console.log("numerator = " + numerator);

let denominator = Math.pow(base, periods) -1;
// console.log("denominator = " + denominator);

 let result = numerator/denominator;
//  console.log("result = " + result);

 payment = principalAmt * result;
  //console.log("payment = " + payment);
  monthlyPayment = payment.toFixed(2);
//  console.log("principalAmt = " + principalAmt);
console.log(monthlyPayment);



// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/
mortgageCalculator = (name) => {
    let principalAmt = 200000;
    let interestRate = .05;
    let years = 30;

    let monthlyInterestRate;
    let periods;
    let monthlyPayment;

    monthlyInterestRate = .05/12; //round or not?
    periods = years*12;

    let base = 1 + monthlyInterestRate;
    let resultTop = Math.pow(base, periods);
    let numerator = resultTop * monthlyInterestRate;
    let denominator = Math.pow(base, periods) -1;
    let result = numerator/denominator;

    payment = principalAmt * result;

    monthlyPayment = payment.toFixed(2);

    return `${name}, your monthly rate is ${monthlyPayment}`;
}
console.log(mortgageCalculator("bill"));
//console.log(monthlyPayment);

// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(2000000, 0.05, 30); <-- should return 1,073.64
*/
mortgageCalculator2 = (amount, rate, numYears) => {
    let principalAmt = amount;
    let interestRate = rate;
    let years = numYears;
console.log("Interest rate = " + interestRate);
    let monthlyInterestRate;
    let periods;
    let monthlyPayment;

    monthlyInterestRate = interestRate/12; //round or not?
    periods = years*12;

    let base = 1 + monthlyInterestRate;
    let resultTop = Math.pow(base, periods);
    let numerator = resultTop * monthlyInterestRate;
    let denominator = Math.pow(base, periods) -1;
    let result = numerator/denominator;

    payment = principalAmt * result;

    monthlyPayment = payment.toFixed(2);

    return monthlyPayment;
}
console.log(mortgageCalculator2(200000, .05, 30));
//console.log(monthlyPayment);

// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, 
interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/
mortgageCalculator3 = (amount, rate, numYears, score) => {
    let principalAmt = amount;
    let interestRate = rate;
    let years = numYears;
//console.log("score " + interestRate);  
    let monthlyInterestRate;
    let periods;
    let monthlyPayment;

    if (score > 740){
        newRate = rate - .05;
        interestRate = newRate.toFixed(2);
  //      console.log("over 740" + interestRate)
    }else if (score < 660){
        newRate = rate + .05;
        interestRate = newRate.toFixed(2);
    //    console.log("under 660 " + interestRate)
    }else{
        newRate = rate;
        interestRate = newRate.toFixed(2);
      //  console.log("bill" + interestRate);
    }

    //console.log("rate " + interestRate);  
    monthlyInterestRate = interestRate/12; //round or not?
    periods = years*12;

    let base = 1 + monthlyInterestRate;
    let resultTop = Math.pow(base, periods);
    let numerator = resultTop * monthlyInterestRate;
    let denominator = Math.pow(base, periods) -1;
    let result = numerator/denominator;

    payment = principalAmt * result;

    monthlyPayment = payment.toFixed(2);

    return monthlyPayment;
}
console.log("call over 740 " + mortgageCalculator3(200000, .15, 30,750));
console.log("call under 660 " + mortgageCalculator3(200000, .15, 30,650));
console.log("call 700 " + mortgageCalculator3(200000, .15, 30,700));

// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment 
for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/

variableInterestRate = (amount, rate, numYears, score) => {
    let principalAmt = amount;
    let interestRate = rate;
    let years = numYears;
//console.log("score " + interestRate);  
    let monthlyInterestRate;
    let periods;
    let monthlyPayment;

    if (score > 740){
        newRate = rate - .05;
        interestRate = newRate.toFixed(2);
  //      console.log("over 740" + interestRate)
    }else if (score < 660){
        newRate = rate + .05;
        interestRate = newRate.toFixed(2);
    //    console.log("under 660 " + interestRate)
    }else{
        newRate = rate;
        interestRate = newRate.toFixed(2);
      //  console.log("bill" + interestRate);
    }
    
    //console.log("rate " + interestRate);  
   
    
for(let i=.02; i<= .06;  i +=.005){
    
    monthlyInterestRate = i/12; //round or not?
    periods = years*12;
    let base = 1 +monthlyInterestRate;
    let resultTop = Math.pow(base, periods);
    let numerator = resultTop * monthlyInterestRate;
    let denominator = Math.pow(base, periods) -1;
    let result = numerator/denominator;

    payment = principalAmt * result;

    monthlyPayment = payment.toFixed(2);

   // console.log("payment " +  monthlyPayment);
}
}
console.log("varInterestRatez " + variableInterestRate(200000, .10, 30,750));




// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */

// mortgageCalculator5 = (desiredMonthlyPayment) => {
    

    
//         let principalAmt = 100000;
//         let interestRate = .05;
//         let years = 30;
    
//         let monthlyInterestRate;
//         let periods;
//         let monthlyPayment;
    
//         monthlyInterestRate = .05/12; //round or not?
//         periods = years*12;
    
//         let base = 1 + monthlyInterestRate;
//         let resultTop = Math.pow(base, periods);
//         let numerator = resultTop * monthlyInterestRate;
//         let denominator = Math.pow(base, periods) -1;
//         let result = numerator/denominator;
    
//         payment = principalAmt * result;
    
//         monthlyPayment = payment.toFixed(2);
//         //console.log("payment really? " + monthlyPayment);
//         console.log()
//     while(monthlyPayment < desiredMonthlyPayment){
//             principalAmt = principalAmt +10000;
//             console.log("princ amt " + principalAmt);
//     }

//     return monthlyPayment;
// }
// mortgageCalculator5(2000)
//console.log(mortgageCalculator("bill"));

//mortgageCalculator(2000000, 0.05, 30); <-- should return 1,073.64

mortgageCalculator4 = (amount, rate, numYears) => {
    
    let principalAmt = amount;
    let interestRate = rate;
    let years = numYears;
console.log("Interest rate = " + interestRate);
    let monthlyInterestRate;
    let periods;
    let monthlyPayment;

    monthlyInterestRate = interestRate/12; //round or not?
    periods = years*12;

    let base = 1 + monthlyInterestRate;
    let resultTop = Math.pow(base, periods);
    let numerator = resultTop * monthlyInterestRate;
    let denominator = Math.pow(base, periods) -1;
    let result = numerator/denominator;

    payment = principalAmt * result;

    monthlyPayment = payment.toFixed(2);
console.log("User inputed response " + monthlyPayment)
    return monthlyPayment;
}
let amount = prompt("Enter amount of loan");
let rate = prompt("enter interest rate of loan");
let numYears = prompt("Enter number of years for the loan")
console.log("amt " + amount);
mortgageCalculator4(amount, rate, numYears);


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
