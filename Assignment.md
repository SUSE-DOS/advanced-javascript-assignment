[<img src="assets/images/su-logo.png" alt="Skills Union Logo" height="80px" />](https://www.skillsunion.com/)

# Advanced-JavaScript: Assignment

## Problems

### 1: Scope

Write a JavaScript code that has a global variable defined in first line in global scope. Then  =have a local variable defined inside the a function.

1. Under the `src` directory, create a file named `scope.js`
1. Declare a global variable
1. Define a function named `demo`
1. Declare a local variables

**Example:**

```js
// global
  demo(){
    //local
  };
```



### 2: Hoisting

Write a JavaScript code that will Hoist a function scoped variable

1. Under the `src` directory, create a file named `hoisting.js`
1. Define a function named `demo`
1. Declare, log and assign value to the variable

**Example:**

```js
function demo(){
  // define variable
  //console log variable
  // assign value
    }
demo(); // print values
};
```



### 3: Closure

Write a JavaScript closure that will execute the inner function

1. Under the `src` directory, create a file named `hoisting.js`
1. Define a function named `outer`
1. Inside outer function declare a function `inner` with a variable
1. Make a call to `inner` function and display the value

**Example:**


```js
           // closure
         function outer()
      	 {
        		//variable to be created
      		 function inner(){
      			 // variable to be returned
    		 }
    		 return inner;
    		 }
  	       //store inner function in variable

    	    // make call to inner function to display variable

```
### 4: IIFE

Write a JavaScript Immediately invoked function that says Hello World!!

1. Under the `src` directory, create a file named `iife.js`
1. Define the hello world function



### 5: Higher order function

Write a JavaScript function that would take another function as input

1. Under the `src` directory, create a file named `higherOrder.js`
1. Define two function named `function 1` and `function 2`
1. Pass `function 1`as input parameter to  `function 2`  and return  `function 1`



**Example:**

```js

   function function1(a, b) {
   return a + b;
   }

   function function2(a, b, function1) {
    // return function1
   }

```


## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
