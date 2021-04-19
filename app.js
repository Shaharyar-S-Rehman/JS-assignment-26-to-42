// _____________^^^^^^^^^_______________Chapter 26 to 30_____________^^^^^^^^^^^____________________


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Qno1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var a = +prompt("Enter your value");
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);

// document.write("Number" + a + "<br>" + " round off value " + b + "<br>" + "floor value" + c + "<br>" + "ceil value" + d )

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Qno2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a = +prompt("Enter your value");
// var e = a*-1
// var b = Math.round(e);
// var c = Math.floor(e);
// var d = Math.ceil(e);

// document.write("Number" + e + "<br>" + " round off value " + b + "<br>" + "floor value" + c + "<br>" + "ceil value" + d )


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var a = +prompt("Enter your value");
// var b = Math.abs(a);
// document.write("absolute value of " + a + " is " + b)


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// var a = +prompt("Enter your value");
// Math.floor( Math.random(a) * 6 )
// var diceRoll = Math.floor( Math.random(a) * 6 ) +1;
// alert("random Dice value: " + diceRoll);


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser



// var a = +prompt("Enter your value");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("2 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// 6. Write a program that shows a random number between 1 and 100 in your browser.

// var a = +prompt("Enter your value");
// Math.random(a);
// var theRandomNumber = Math.floor(Math.random(a) * 100) + 1;
// document.write("The Random Number between 1 and 100 :" + theRandomNumber)



// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var a = +prompt("Enter your weight in kilograms");
// document.write("The weight of user is " + a + "kilograms") 


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret number, congratulate the user.


// var a = +prompt("Enter a number between 1 and 10")
// if (a ===5 ){
//     alert("Congratulate")

// }
// else{
//     alert("Try again")
// }



// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// _____________^^^^^^^^^_______________Chapter 31 to 34_____________^^^^^^^^^^^____________________


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Qno1. Write a program that displays current date and time in your browser.


// var Now = new Date();
// document.write(Now)


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno2. Write a program that alerts the current month in words. For example December.

// var a =["January","February", "March","April","May","June","July", "August","September","October","November","December"]
// var rightNow = new Date();
// var theMonth = rightNow.getMonth();
// var nameOfMonth = a[theMonth];
// document.write("Current month: " + nameOfMonth)


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun

// var a =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var Now = new Date();
// var today = Now.getDay();
// var nameOfDay = a[today];
// document.write("Today is " + nameOfDay) 


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.


// var a = prompt(" Enter day name", "type like this sun");
// if (a === "sat" || a === "sun"){
//     document.write("it's Fun day")
// }
// else {
//     document.write("Working day")
// }

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// var a =  new Date();
// var b = a.getDate();
// if(b >=1 && b<= 15 ){
//     document.write("First fifteen days of the month")
// }
// else{
//     document.write("Last Days of the month")
// }


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Qno6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't
// been declared beforehand. Use any variable you like to represent the Date object.

// var a = prompt("enter date","jan. 1, 1970")
// var b = new Date();
// var c = b.getTime();
// var d = new Date(a)
// var e = d.getTime();
// var f = c-e;
// var g = (f/ (1000 * 60 * 60 * 24 * 365))*1000; 
// var h = (f/ (1000 * 60 * 60 * 24 * 365))/60; 
// document.write("Current " + b + "<br>" + " ellapsed milliseconds since jan 1, 1970: " + g +  "<br>" + " ellapsed minutes since jan 1, 1970: " + h)


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var a = new Date();
// var b = a.getTime();
// if(b>=0 && b<=11){
//     document.write("It's AM")
// }
// else{
//     document.write("It's PM")
// }


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var a = new Date("december 31, 2020");
// document.write(a)

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// var a = new Date(2015, 05, 18);
// var b= a.getTime();
// var today = new Date();
// var c = today.getTime();
// var diff = c-b;
// var day = diff/(1000*60*60*24);
// var day=Math.floor(day);
// document.write(day + " day have passed since 1st Ramdan, 2015");


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Qno10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.


// var a = new Date(2015);
// var b = a.getTime();
// var c = new Date();
// var d = c.getTime();
// var diff = c-b;
// var day = diff/1000;
// var day = Math.floor(day);
// document.write("On reference date " + c + "<br>" + day + " seconds had passed since begining of 2015");


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.


// var a = prompt("enter your birthday", " december 26, 1999")
// var sil = a.slice(13, 18);
// var b = new Date(a);
// var c = b.getTime()
// var d = new Date()
// var e = d.getTime()
// var f = e - c;
// var g = f/(1000*60*60*24*365)
// var h = Math.floor(g)
// document.write("your age is " + h + "<br>" + "your birth year is" + sil)


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current 
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var a = prompt("Enter your name");
// var month = prompt("Enter your month of bill")
// var units = prompt("Enter your units of bill")
// var Charges = 16;
// var lateCharges = 350
// var netAmount =  units * Charges ;
// var grossAmount = netAmount + lateCharges;
// document.write("<h1> K-Electric Bill </h1> " + "<br>" + "Customer Name: " + a + "<br>" + "Month: " + month + "<br>" + "Number of Units: " + units + "<br>" + "Charges: " + Charges 
//  + "<br>" + "Net Amount Payable (within Due Date) = "  + netAmount + "<br>" + "Late paymnet surcharges: " + lateCharges + "<br>" + "Gross Amount Payable (after Due Date) = " + grossAmount)


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// _____________^^^^^^^^^_______________Chapter 35 to 38_____________^^^^^^^^^^^____________________


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// 1. Write a function that displays current date & time in your browser.


// function date(){
//     var a = new Date()
//     document.write(a)
// }
// date();


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno2. Write a function that takes first & last name and then it greets the user using his full name.


// function name(){
//     var firstName= prompt("Enter your first name")
//     var lastName= prompt("Enter your last name")
//     var fullName = firstName + lastName;
//     document.write(fullName);
// }
// name();


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
 

// function add(){
//     var a = +prompt("Enter value")
//     var b = +prompt("Enter value")
//     var sum = a + b;
//     return sum;

// }
// var g = add()
// document.write(g)


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function Calculator(){
//     var a = +prompt("Enter value")
//     var b = +prompt("Enter value")
//     var c = prompt("Enter operator")
// if(c === '+'){
//     return(a+b)
// }
// else if(c ==='-'){
//     return(a-b)
// }
// else if(c === '*'){
//     return(a*b)
// }
// else if(c === '/'){
//     return(a/b)
// }
// }     
// var result = Calculator()
// document.write("<b> Calculator </b>" + "<br>" + result)


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno5. Write a function that squares its argument.

// function square(){
//     var num = +prompt("Enter value")
//     var sq= num * num;
//     return sq;
// }
// var a = square();
// document.write(a)


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno6 Write a function that computes factorial of a number.


// function factorial(){
//     var num = +prompt("Enter the factorial of a number");
//     var fact = 1;
//     for(var i=num; i>=1;i--){
//         fact=fact*i;
//     }
//     return fact;
// }
// var result = factorial();
// alert(result);

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno7 Write a function that take start and end number as inputs & display counting in your browser.



// function counting(){
//     var sNum = +prompt("Enter the start number");
//     var lNum = +prompt("Enter the end number");
//     for(var i=sNum; i<=lNum;i++){
//         document.write(i+"<br>")
//     }
// }
// var result = counting();



// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno8 Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse(){
//     function calculateSquare(){  
//     var b = +prompt("Enter the base");
//     var p = +prompt("Enter the perpendicular");
//         var base = b*b;
//         var per = p*p;
//         var h=base+per;
//         var hypotenuse =h*h;
//         return hypotenuse; 
//        }
//        var result=calculateSquare();
//        return result;
// }
// var result1=calculateHypotenuse();
// document.write(result1);

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno9 Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables



// function area(){
//     var width =+prompt("Enter the width");
//     var height=+prompt("Enter the height");
//     a = width * height;
//     return a;
// }
// var result = area();
// alert(result);

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno10 Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.


// function palindrome(){
//     var name =prompt("Enter the name");
//     var split = name.split("").reverse().join("");
//     if(name===split){
//         alert("It is palindrome");
//     }
// else{
//     alert("It is not palindrome");
// }
// }
// var result = palindrome();



// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function uppercase(str) {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// alert(uppercase("the quick brown fox"));

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno12 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'





// function find_longest_word(str) {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++) {
//     if(result.length < array1[x].length){
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(find_longest_word('Web Development Tutorial'));

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno13 Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of  occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'




// function char_count(str, letter) {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) {
//     if (str.charAt(position) == letter){
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(char_count('JSResourceS.com', 'o'));

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno14 The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


// function Geometrizer(){
//     function calcCircumference(){
//         var pi = 3.14;
//         var r=prompt("Enter the radius");
//         var circum = 2*pi*r;
//         document.write("Circumference of circle  " + circum);
//     }
//     function calcArea(){
//         var rr = r*r;
//         a=pi*rr;
//         document.write("Area of circle  " + a);
//     }
//     return calcCircumference + calcArea;
//     }
//     var result=Geometrizer(); 

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// _____________^^^^^^^^^_______________Chapter 38 to 42_____________^^^^^^^^^^^____________________


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno1 Write a custom function power ( a, b ), to calculate the value of a raised to b.


// function myFunction() {
//     var a =+prompt("Enter the base;");
//     var b=+prompt("Enter the power");
//     value=Math.pow(a, b); 
//     document.write("Power is"+" "+a +"<br>");
//     document.write("Base is"+" "+b+"<br>");
//     document.write("a raised to b :"+" "+value);
// }
// myFunction();


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …



// var a =+prompt("Enter any year");
//     b=a%4;
// switch (b){
    
//     case 0:
//         document.write("This year is a Leap year:")
//         break;
    
//     default:
//         document.write("This year is not a Leap year:")
    
//     }

// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


// function firstFunction(){
//     var a =+prompt("Enter the first side of triangle");
//     var b =+prompt("Enter the second side of triangle");
//     var c =+prompt("Enter the third side of triangle");
//     var d = a+b+c;
//     var S= d/2;
//     var e =S-a;
//     var f=S-b;
//     var g=S-c;
    
//     function secondFunction(){
//         var area = S*e*f*g;
//     alert("The Area of Triangle is:   "+ area);
//     }
//     secondFunction();
//     }
//     firstFunction();


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// Qno4 Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.


// function mainFunction(){
//     var marks1 =+prompt("Enter the marks of first student");
//     var marks2 =+prompt("Enter the marks of second student");
//     var marks3  =+prompt("Enter the marks of third student");
//     function average(){
//         total=marks1+marks2+marks3;
//         avg=total/3;
//         document.write("The average of marks  " + avg+"<br>");
//     }
//     function percentage(){
//         per=total/3;
//         document.write("The percentage of marks  "+per+"%");
//     }
//     average();
//     percentage();
// }
// mainFunction();    


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.


// function myFunction() {
//     var str = "Hello world, welcome to the universe.";
//     var n = str.indexOf("welcome");
//     alert(n);
//   }
//   myFunction();


// _________________________________________________________________________________________________________________________________________________
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// Qno9 Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work for fractional part of an hour.


// function currEncy(){
//     var a =+prompt("Enter amount to withdraw:");
//     var b =Math.floor( a/100);
//     var c = b*100;
//     var d = a-c;
//     var e=Math.floor( d/50);
//     var f = e*50;
//     var g = c+f;
//     var h = a-g;
//     var i = Math.floor( h/10);
//     document.write("You will have  " + b + "  hundred notes  " + e + "  fifty notes  " + i + "  ten notes")

// }
// currEncy();
