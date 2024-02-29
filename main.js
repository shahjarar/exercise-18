var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// task 18
// store the location in an array
var palcesTovist = ["Tokyo", "Pakistan", "America", "China", "japan"];
// print the array in its original order
console.log("Original order :", palcesTovist);
// print the array in alpabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], palcesTovist, true).sort());
// show that the array is still in its original order
console.log("orginal order after sorting:", palcesTovist);
// print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alpabetical order:", __spreadArray([], palcesTovist, true).sort().reverse());
// show that the array is still in its origianl oder
console.log("Original order after reverse sorting:", palcesTovist);
// Reverse the order of the list
palcesTovist.reverse();
console.log("Reversed order:", palcesTovist);
// Reverse the order of the list again to get back to the original order
palcesTovist.reverse();
console.log("back to original order:", palcesTovist);
// sort the array in alphabatical order
palcesTovist.sort();
console.log("sorted in alphabetical order:", palcesTovist);
// sort the array in reverse alphabetical order
palcesTovist.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in revese alphabetical order:", palcesTovist);
