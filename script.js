
/**
 * Exercise 0: angryGandalf (example)
**/
 
// Define angryGandalf with input parameters
// var angryGandalf = function(type) {
 
// 	// Define the variables needed
// 	var message;
 
// 	// Run conditional on type for 'grey' and 'white'
// 	if (type === 'grey') {
// 		message = "YOU...SHALL NOT... PASS!";
// 	} else if (type === 'white') {
// 		message = "You merely passed me to your demise.";
// 	} else {
// 		message = "I don't think I'm Gandalf anymore.";
// 	}
 
// 	// Return message
// 	return message 
 
// }
 
// console.log(angryGandalf('grey'));  // Expect "YOU...SHALL NOT... PASS!" 
// console.log(angryGandalf('white')); // Expect "You merely passed me to your demise."
// console.log(angryGandalf(2)); // Expect "I don't think I'm Gandalf anymore."
 
 
/**
 * Exercise 1: tellFortune
**/
 
// Create function with name tellFortune and appropriate parameters
// var tellFortune = function(job,location,partner,children) {
// 	// takes 4 arguments: number of children, partner's name, geographic location, job title.

// 		var f = job.charAt(0){
// 		if (f === 'a' || f === 'e' || f === 'i' || f === 'o' || f === 'u')
// 	}
 
// 	// Define string variable that will have that output
// 	var fortune = "You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids."
	
	

// 	// Return that string
// 	return fortune;
// };
 



// }


// console.log(tellFortune('aball player', 'spain', 'Shaq', 3)); // Expect 'You will be a bball player in spain and married to Shaq  with 3 kids. '
// console.log(tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000)); // Expect 'You will be a stunt double in Japan and married to Ryan Gosling  with 3000 kids. '
// console.log(tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0)); // You will be a Elvis impersonator in Russia and married to The Oatmeal  with 0 kids. 
 
 
 
/**
 * Exercise 2: calculateAge
**/

/**
 * Exercise 2 Part 1: ofAge
**/

// Write a function named `ofAge` that:
    // takes 1 argument: age.
    // calculate if that age is 21 or above.
    // Output true or false based on if the age is above age

//     var ofAge = function(age) {

//     	if (age >= 21) {
//     		return true;
//     	}else {
//     		return false;
//     		}
//     	}
    	
 

// console.assert(ofAge(21) === true);
// console.assert(ofAge(22) === true);
// console.assert(ofAge(18) === false);
// console.assert(ofAge(0) === false);
// console.assert(ofAge(-2) === false);



 
// Create function with name calculateAge and appropriate parameters
// 	function c
 
// 	Define number variable age and save the age based on the years given, ie 2010-1990 = '20'
 
// 	Define a number variable that will account for month discrepcies, ie Jan 2010 - August 1990 = '19'
    
//     return string that says 'You are either XX or YY'
 
// console.log(calculateAge(1984, 2012)); // You are either 28 or 27 
// console.log(calculateAge(1988, 2012)); // You are either 24 or 23 
// console.log(calculateAge(1982, 2012)); // You are either 30 or 29 
 
 /**
 * Exercise 2 Part 2: getAge
**/

    function calculateAge(birthMonth, birthDay, birthYear) {

        // Get Todays Date
        var todayDate = new Date(),
            todayYear = todayDate.getFullYear(),
            todayMonth = todayDate.getMonth(),
            todayDay = todayDate.getDate();

        // Calculate Age
        var age = todayYear - birthYear;

        // Check month discrepancies
        if (todayMonth < (birthMonth - 1)) {
            age--;
        }

        // Check day discrepancies
        if (((birthMonth - 1) == todayMonth) && (todayDay < birthDay)) {
            age--;
        }

        // @return {Number} age
        return age;
    }

 /**
 * Exercise 2 Part 3: checkOfAge
**/

// Write a function named `checkOfAge` that:
	var checkOfAge = function(month, day, year)
		console.log(calculateAge);
		consple.log(getAge)
	
    // takes 3 arguments: month, day, year.
    // Use the getAge function to calculate the age.
    // calculate if that age is 21 or above.
    // Output true or false based on if the age is above age

console.assert(checkOfAge(12,01,1988) === true);
console.assert(checkOfAge(1,1,1993) === true);
console.assert(checkOfAge(1,1,2001) === false);

// console.assert calculateAge(08, 24, 1981) === 3;
// console.assert calculateAge(12, 02, 1981) === 32;
// console.assert calculateAge(12, 03, 1979) ===5;
// console.assert calculateAge(12, 24, 2013) ===6;

 

/**
 * Exercise 3: calculateSupply
**/
 
// Create function with name calculateSupply and appropriate parameters
 
	// define max age as 100
    
    // Do math to substract max string - string
 
    // Create Message
 
    // Return Message
 
// console.log(calculateSupply(28, 36)); // You will need 946080 cups of tea to last you until the ripe old age of 100
// console.log(calculateSupply(28, 2.5)); // You will need 65700 cups of tea to last you until the ripe old age of 100
// console.log(calculateSupply(28, 400));  // You will need 10512000 cups of tea to last you until the ripe old age of 100 
 


 
 
/**
 * Exercise 4: The Circle Calculator
**/
 
// Create function with name calcDiameterFromRadius and appropriate parameters
 
	// Define string variable that will have that output
    
    // return string to pass the tests below
 
// Create function with name calcCircumfrence and appropriate parameters
 
	// Define string variable that will have that output
 
	// Get Diameter from radius with calcDiameterFromRadius() made above
    
    // Create string to pass test below
 
    // return string
 
// console.log(calcCircumfrence(3)); // The circumference is 18.84
// console.log(calcCircumfrence(4)); // The circumference is 25.12
// console.log(calcCircumfrence(5)); // The circumference is 31.4


/**
 * Exercise 5:  The Temperature Converter
**/
 
// Create a function called convertTemp:
// Give it 2 parameters, the first being number, second being inputType. inputType should accept strings 'F' or 'C'
	
	// Define the variables used
 
	// Convert the number from the inputType to the opposite
	
	// Return that number

// console.log(convertTemp(32, 'F')); // 0
// console.log(convertTemp(100, 'C')); // 212
 

/**
 * Exercise 6:  The Temperature Converter
**/

// Create a function called waterState. This function will tell you if a temperature is boiling, liquid, or freezing:
// Give it 2 parameters, one that's a number and the second that's a inputType, ie 'F' or 'C'. 
 	
 	// Write a conditional and save proper water state variables based on if the inputType parameter is 'C' or 'F'.

	// Define a variable that will save the string of the conditional below.
 
	// Write a conditional if then statement that saves 'boiling', 'liquid', or 'freezing' depending on what the temperature is.
	
    // return string "It's currently XXX degrees in the XXX standard and water is in a XXX state.'
        
// console.log(waterState(50, 'C')); // "It's currently 50 degrees in the Celsius standard and water is liquid. "
// console.log(waterState(213, 'F')); // "It's currently 213 degrees in the Fahrenheit standard and water is boiling. "
// console.log(waterState(-1, 'F')); // "It's currently -1 degrees in the Fahrenheit standard and water is liquid. " 


