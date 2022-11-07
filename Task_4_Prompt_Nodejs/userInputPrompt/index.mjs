import PromptSync from "prompt-sync";

const prompt = PromptSync();

let name = prompt("Please Enter your name: ");
let age = prompt ("Enter your age: ");

console.log("The candidate name is ", name, " and his age is: ", age);
console.log("Welcome to our Company");