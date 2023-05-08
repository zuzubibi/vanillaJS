const age = parseInt(prompt("how old are you?"));

if (isNaN(age) || age <0) {
    console.log("please write a number");
} else if(age < 18) {
    console.log("you are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("you can drink")
} else if (age === 100) {
    console.log("wow you are wise")
} else {
    console.log("I'm nervous about your health");
}