// Task 1: Find index number with value let arr1 = [11, 15, 18, 19];

let arr1 = [11, 15, 17, 18, 19];

arr1.splice(1, 0, 12, 13, 14); // arr1 = [11, 12, 13, 14, 15, 17, 18, 19]
arr1.splice(5, 0, 16);// arr1 = [11, 12, 13, 14, 15, 16, 17, 18, 19],missing index included using splice method

console.log(arr1); // arr1 = [11, 12, 13, 14, 15, 16, 17, 18, 19]


// Finding index number with value using indexOf method

console.log("At the index", arr1.indexOf(11), "value is: ", arr1[0]);
console.log("At the index", arr1.indexOf(12), "value is: ", arr1[1]);
console.log("At the index", arr1.indexOf(13), "value is: ", arr1[2]);
console.log("At the index", arr1.indexOf(14), "value is: ", arr1[3]);
console.log("At the index", arr1.indexOf(15), "value is: ", arr1[4]);
console.log("At the index", arr1.indexOf(16), "value is: ", arr1[5]);
console.log("At the index", arr1.indexOf(17), "value is: ", arr1[6]);
console.log("At the index", arr1.indexOf(18), "value is: ", arr1[7]);
console.log("At the index", arr1.indexOf(19), "value is: ", arr1[8]);

// Finding index number with value using for loop and array.length method

console.log("Index number with value will be printed using for loop");

for(let i = 0; i < arr1.length; i++){
         
    console.log("At the index of arr1 ", i , "value is: ", arr1[i]);
    
}

/*******************************************************************************************/


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