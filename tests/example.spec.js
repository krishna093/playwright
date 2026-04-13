const {test} = require('@playwright/test');

test('My First Playwright test',async ()=>  //async keyword is used to declare a function as asynchronous function and await keyword is used to wait for the promise to resolve before moving to the next step
{
/* write your playwright code here to start write a test case you must declare requare import package 
/playwright/test otherwise you will not be able to use test function and other functions of playwright
java script is a asynchronous programming language so we have to use async and await keywords to 
handle the asynchronous code in playwright 
step1: launch the browser
step2: enter U/P 2sec
step3: click on login button
in java it wait in every step becuse java is a synchronous programming language 
but in java script we have to use await keyword to wait for the step to complete before
moving to the next step otherwise it will move to the next step without waiting 
and it will throw an error because the element is not foun*/


});