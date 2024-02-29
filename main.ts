// task 18
// store the location in an array
let palcesTovist: string[] = ["Tokyo" , "Pakistan" , "America" ,"China" ,"japan"];

// print the array in its original order
console.log ("Original order :", palcesTovist);

// print the array in alpabetical order without modifying the actual list
console.log("Alphabetical order:",[...palcesTovist].sort());

// show that the array is still in its original order
console.log("orginal order after sorting:" , palcesTovist);

// print the array in reverse alphabetical order without changing the order of the original list
console.log ("Reverse alpabetical order:", [...palcesTovist] .sort().reverse());

// show that the array is still in its origianl oder
console.log ("Original order after reverse sorting:" , palcesTovist);

// Reverse the order of the list
palcesTovist.reverse();
console.log("Reversed order:" , palcesTovist);

// Reverse the order of the list again to get back to the original order
palcesTovist.reverse();
console.log("back to original order:", palcesTovist);

// sort the array in alphabatical order
palcesTovist.sort();
console.log ("sorted in alphabetical order:", palcesTovist);

// sort the array in reverse alphabetical order
palcesTovist.sort((a ,b) =>b.localeCompare(a));
console.log("sorted in revese alphabetical order:" , palcesTovist);