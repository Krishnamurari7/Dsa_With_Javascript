
// function generateOTP() { 
// 	let digits = '0123456789'; 
// 	let OTP = ''; 
// 	let len = digits.length 
// 	for (let i = 0; i < 4; i++) { 
// 		OTP += digits[Math.floor(Math.random() * len)]; 
// 	} 
	
// 	return OTP; 
// } 

// console.log("OTP of 4 digits: ") 
// console.log(generateOTP());

import otpGenerator from otpGenerator

otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });