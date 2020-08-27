// Create an Array from 0...100 without using traditional For-loop
let arr = [...Array(101).keys()];
console.log("An Array from 0...100 without using traditional For-loop", JSON.stringify(arr));

//  Create an Array of only even numbers from the above array
var evens = arr.filter(number => number % 2 == 0);
console.log("An Array of only even numbers from the above array: ", JSON.stringify(evens))

// create an array of even squares using the previous array
let result = evens.map(x => x ** 2);
console.log("An array of even squares using the previous array: ", JSON.stringify(result));



// Question 4: Sum of all the squares from the above array of Even Squares
let a= 0;
let result1 = result.map((num) => a+=num);
console.log("Sum of all the squares from the above array of Even Squares: ", result1[result1.length-1]);


// Question 5: Call the above square Promise function with all numbers from 0-100
// and ensure that the errors are not thrown
// then print the following:
// 1. Number of errors
// 2. The resultant array
// 3. Number of objects in the resultant array

async function oddeven(arr){
    try{
        var evens = arr.filter(number => number % 2 == 0);
        var evenerr = arr.filter(number => number % 2 != 0);
        console.log("Number of errors: ", evenerr.length)
        console.log("The resultant array: ", JSON.stringify(evens))
        console.log("Number of objects in the resultant array: ", evens.length)
    } catch (err){
        console.log(err);
    }
}

oddeven(arr);


// Q1: Create a template string of a button HTML Element. Save the title
// for the button in a separate var and use it in the button correctly.

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Save";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
  
// Q2: Create a function that returns a list element (<li>) HTML
// use this function to create a ordered list HTML structure of numbers from
// 1-30 without breaking the template string invocation i.e. usage of += is disallowed.

  const ulLi = (num,type = null) => {
	var str = '<ul>';
	var strEven = '';
	var ulArray = [...Array(num).keys()];
	ulArray.forEach((item)=>{
	  if(type == 'even'){
		  if(item%2==0){
			$("ul").append(`<li>${item}</li>`);
		  }
	  }else{
		  $("ul").append(`<li>${item}</li>`);
	  }
	});
}

ulLi(30);

  
// Q3: Now only print the even numbers. Again, breaking the template string
// invocation is disallowed
  
ulLi(30,'even');
  
// Q4: Create a promise that simulates a delay of 1-3s randomly. Create an array of
// 10 such promises. Only print the output when all promises have been resolved.

const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
var array = [];
setInterval(function(){
array = Array.from({length: 10}, (x, i) => i);
}, 3000);
    resolutionFunc(array);
});
  