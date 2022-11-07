
//Task 2: Prototype methods of array and create your own methods

/*The JavaScript array prototype constructor is used to allow to add new methods and properties
to the Array() object. Once the prototype method is created can be used for all array in the
JavaScript file.*/

/* Following are Array prototype methods of Array:
1. fill()
2. reverse()
3. pop()
4. shift()
5. shift()
6. unshift()
7. sort()
8. splice()
9. slice() */

// Creation of Array prototype method

// Syntex is: Array.prototype.constuctor name = value

/*Following Array prototype method will count the lenght of each index of the array.*/

Array.prototype.strLength = function(){
    for(let i = 0; i < this.length; i++){
        this[i] = this[i].length;
    }
};

//Applying strLenght mehtod on an Array:
const fruits = ["Mango", "Banana", "Orange", "Strawbarry", "Apple"];
fruits.strLength();
console.log(fruits);


// Following Array prototype method will conver an Array to UPPER CASE

Array.prototype.upperCase = function(){
    for(let i = 0; i < this.length; i++){
        this[i] = this[i].toUpperCase();
    }
};

//Applying upperCase mehtod on an Array:
const fruits2 = ["Mango", "Banana", "Orange", "Strawbarry", "Apple"];
fruits2.upperCase();
console.log(fruits2);