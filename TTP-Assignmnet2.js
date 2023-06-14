let arr = [ 1, 2, 3, 4, 5, 6, 'TTPRocks'];

//forEach() helps to loop over array by executing a provided callback function for each element in an array.
function myEach(arr, myElems){
    for(let i =0; i< arr.length; i++) {
        myElems(arr[i]);
    }
}

function myElems(element) {
    console.log(element);
}
  
myEach(arr, myElems);

//map() creates a new array with the results of calling a provided function on every element in this array.
function myMap(arr, addThirty) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(addThirty(arr[i]));
    }
    return result;
  }
  
  function addThirty(element) {
    return element + 30;
  }
  
  console.log(myMap(arr, addThirty));

//filter() creates a new array with only elements that passes the condition inside the provided function.
function myFilter(arr, isEven) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (isEven(arr[i])) { //callback is referring to the isEven function
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function isEven(element) { //our conditioned function
    return element % 2 === 0;
  }
  
 
  console.log(myFilter(arr,isEven));


//some() checks if at least one element in the array passes the condition, returning true or false as appropriate.
function mySome(arr, isGreaterThanTwo) {
   let onePass = false;
   for(let i=0; i< arr.length; i++) {
        if(isGreaterThanTwo(arr[i])) {
            youPass = true;
        }
   }
   return onePass;
}

function isGreaterThanTwo(element) {
    return element > 2; 
}

console.log(mySome(arr,isGreaterThanTwo));


//every() checks every element in the array that passes the condition, returning true or false as appropriate.
function myEvery(arr, isGreaterThanThree) {
    let everyPass = false;
    for(let i=0; i< arr.length; i++) {
         if(!isGreaterThanThree(arr[i])) {
             everyPass = false;
             break;
         }
    }
    return everyPass;
 }
 
 function isGreaterThanThree(element) {
     return element > 3; 
 }
 
 console.log(myEvery(arr,isGreaterThanThree));

//reduce() applies a function against an accumulator and each element in the array to reduce it to a single value.
function myReduce(arr, sum, initialVal) {
    let accumulator = initialVal;
    for (let i = 0; i < arr.length; i++) {
      accumulator = sum(accumulator, arr[i]);
    }
    return accumulator;
  }
  
  function sum(accumulator, element) {
    return accumulator + element;
  }
  
  console.log(myReduce(arr, sum, 0));

//includes() checks if an array includes the element that passes the condition, returning true or false as appropriate.
function myIncludes(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return true;
      }
    }
    return false;
}
console.log(myIncludes(arr, 2));


//indexOf() returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.
function myIndexOf(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    return -1;
}
console.log(myIndexOf(arr, 2));

//push() adds one or more elements to the end of array and returns the new length of the array.
function myPush(arr, element) {
        arr[arr.length] = element;
   return arr.length;
}

console.log(myPush(arr, 79));
console.log(arr);

//lastIndexOf()
    function myLastIndexOf(arr, element) {
        for (let i = arr.length; i < 0; i--) {
          if (arr[i] === element) {
            return i;
          }
        }
        return -1;
    }
    console.log(myLastIndexOf(arr, 4));

//Object.keys()
function grabKeys(obj) {
    const keys = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
}

  const menu = {
    entree: 'soup',
    dinner: 'steak',
    dessert: 'icecream'
  }
  
  const keys = grabKeys(menu);
  console.log(keys);

//Object.values()
function grabValues(obj) {
    const values = [];
        for (let value in obj) {
            if (obj.hasOwnProperty(value)) {
                values.push(obj[value]);
            }
        }
        return values;
};
  const supermarket = {
    fresh: 'tomato',
    frozen: 'peas',
    bakery: 'bread'
};
  
  const values = grabValues(supermarket);
  console.log(values);

//The Sum of a Range
/*Write a range function that takes two arguments, start and end, and returns an array containing all the 
numbers from start up to (and including) end. Next, write a sum function that takes an array of numbers and 
returns the sum of these numbers. Run the example program and see whether it does indeed return 55. */

function range(start, end) {
    const myArr = [];
    for(let i = start; i <= end; i++) {
        myArr.push(i);
    }
    return myArr;
}

function sum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum+= array[i];
    }
    return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// → 55


//Reversing an Array
/* For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray,
 takes an array as argument and produces a new array that has the same elements in the inverse order. The second, 
 reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its 
 elements. Neither may use the standard reverse method.  */
 function reverseArray(arr) { //working backwards from the end of the array to the start, index 0
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  function reverseArrayInPlace(array){
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
           let temp = array[i];
           array[i] = array[array.length - 1 - i];
           array[array.length - 1 - i] = temp;
       }
   }

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


//A List
/*Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes 
an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes 
a list and a number and returns the element at the given position in the list (with zero referring to the first element) 
or undefined when there is no such element. */

/*
function listToArray(list) {
    let arr = [];
    let listArr = list;
    while (listArr !== null) {
      arr.push(listArr.value);
      listArr = listArr.next;
    }
    return arr;
  }
  

*/



//Deep Comparison
/*Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the 
same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
To find out whether values should be compared directly (use the === operator for that) or have their properties compared, 
you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to 
take one silly exception into account: because of a historical accident, typeof null also produces "object". */
/*
function deepEqual(value1, value2) {
    
        if (value1 === value2){
            return true;
        }
        else if (typeof value1 !== 'object' || typeof value2 !== 'object' || value1 == null || value2 == null){
        }
       
    }
*/


/*Given an array nums, write a function to move all 0's to the end of it while maintaining the 
relative order of the non-zero elements. */

function moveZeros (nums) {
        let count = 0; 
      
        for (let i = 0; i < nums.length; i++) { //checks if the element equals zero
          if (nums[i] !== 0) { //if it doesnt add it to the array from the end 
            nums[count] = nums[i];
            count++;
          }
        }
      
        while (count < nums.length) {
          nums[count] = 0;
          count++;
        }
      
        return nums;
}


let arrayy = [0,1,0,3,12];
console.log(moveZeros(arrayy));
/*
Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/