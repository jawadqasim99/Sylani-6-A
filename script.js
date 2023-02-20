// 1- Declare a variable called myVar and assign it the value of 5. Then, using the console.log function, print the value of myVar to the console.


var myVar = 5;
console.log(myVar);

// 2- Declare a variable called myString and assign it the value of "Hello, world!". Then, using the alert function, display the value of myString in an alert box.

var myString = "Hello, world!";
alert(myString);


// 3- Declare two variables called num1 and num2, and assign them the values of 5 and 10, respectively. Using the prompt function, ask the user to enter a number, and store the result in a variable called userNum. Then, using the console.log function, print the sum of num1, num2, and userNum to the console.

var num1=5;
var num2=10;
var userNum=parseInt(prompt("Enter a valid number :)"));
sum=num1+num2+userNum;
console.log(sum);
alert(sum);

// 4- Declare a variable called myBoolean and assign it the value of true. Using an if statement, check if myBoolean is true, and if so, use the console.log function to print "It's true!" to the console. Otherwise, print "It's false!" to the console.
var myBoolean=true;
if(myBoolean==true){
    alert("It is true!");
    console.log("it is true!");
}else{
    alert("It is false!");
    console.log("it is false!");
}

// 5- Use an if/else statement to check if a number is even or odd. If the number is even, log "even" to the console. If the number is odd, log "odd" to the console.
var number=parseInt(prompt("PLZ Enter number :)"));
if(number%2==0)
{
    alert("Even :)");
}else{
    alert("Odd :)")
}

// 6- Use the + operator to concatenate two strings together. Then, log the result to the console.

var string1="jawad";
var string2="Qasim";
console.log(string1 + " " + string2);

// 7- Use the * operator to multiply two numbers together. Then, log the result to the console


var userNum1=parseInt(prompt("Enter 1st  valid number :)"));
var userNum2=parseInt(prompt("Enter 2nd valid number :)"));
multiply=userNum1 * userNum2;
console.log(multiply);
alert(multiply);

// 8- Write a program that takes a string from the user using prompt and checks if it's equal to "password". If it is, display an alert saying "Access granted", otherwise display an alert saying "Access denied".
// 
var passWord=prompt("Plz Enter Vaild Password Thanku :)");
if(passWord=="password" || passWord == "PASSWORD"){
    alert("Access granted thanku :)");
} else{
    alert("Access Danied thanku :)");
}

// 9- Write a program that takes three numbers as input and returns the largest of those three numbers.

var num1=parseInt(prompt("Enter 1st  valid number :)"));
 var num2=parseInt(prompt("Enter 2nd valid number :)"));
var num3=parseInt(prompt("Enter 3rd  valid number :)"));
if( num1>num2 & num1>num2){
    alert(`Largest number is ${num1} :)`)
}else if(num2>num1 & num2>num3){
    alert(`Largest number is ${num2} :)`)
}
else{
    alert(`Largest number is ${num3} :)`)
}

// 10 -Write a program that takes two strings from the user using prompt and checks if they are equal. If they are, display an alert saying "The strings are equal", otherwise display an alert saying "The strings are not equal".
var str1=prompt("Plz Enter 1st string Thanku :)");
var str2=prompt("Plz Enter 2nd string Thanku :)");
if(str1==str2){
    alert("The strings are equal :)");
}else{
    alert("The strings are not equal :)");
}