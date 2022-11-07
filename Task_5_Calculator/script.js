// Basic JavaScript Calculator

alert("This is Javascript Calculator");
let num1 = prompt("Enter first Number: ");
let Operator = prompt("Enter an Operator");
let num2 = prompt("Enter Second Number: ");


switch(Operator){
    case '+':
        document.write("Addition of ", num1, " ", Operator, " ", num2, " is: ", (Number(num1)+Number(num2)));
        break;

    case '-':
        document.write("Subtraction of ", num1, " ", Operator, " ", num2, " is: ", (Number(num1)-Number(num2)));
        break;

    case '*':
            document.write("Multiplication of ", num1, " ", Operator, " ", num2, " is: ", (Number(num1)*Number(num2)));
            break;
            
    case '/':
            document.write("Division of ", num1, " ", Operator, " ", num2, " is: ", (Number(num1)/Number(num2)));
            break;

    case '%':
            document.write("Reminder of ", num1, " ", Operator, " ", num2, " is: ", (Number(num1)%Number(num2)));
            break;

    default:
            document.write("You have entered wrong operator, please enter one of following operator: +, -, /, %, *.");
}