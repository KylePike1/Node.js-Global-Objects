const validator = require('validator');

//Example strings for validation
const email = 'kylepike@yahoo.com';
const url = 'https://www.kylepike.com';
const invalidEmail = 'Invalid-Email';
const invalidURL = 'Invalid-URL';

//test if emails are valid
console.log('email is a valid email?:', validator.isEmail(email)); 
console.log('invalidEmail is a valid email?:', validator.isEmail(invalidEmail));

//test if URLs are valid
console.log('URL is a valid URL?:', validator.isURL(url)); 
console.log('invalidURL is a valid URL?:', validator.isEmail(invalidURL));



const dirtyString = '           Hello, World!          ';
const cleanString = validator.trim(dirtyString);
//validator.trim will remove the unnessecary blank spaces
console.log("Original:", dirtyString);
console.log("Trimmed:", cleanString);