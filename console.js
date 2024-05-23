//display message to console that program started
console.info("Program Started");

//get time of program starting
console.time("Getting data");
//simple calculations
let x = 76
let y = 98
let z = (x * y/17 + x)
//write result to console
console.log('Z:', z);
//get end time of program to find runtime
console.timeEnd('Getting data');
//display message of program ending
console.info("Program Ended")
