module.exports = function toReadable(number) {
    let numbersLessTwenty = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    let numbersTens = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let tens = ["hundred", "thousand", "million", "jdkf", "jjj", "kdsk", "jksjd"];
    // let twoDigits = numer / 100;


    // let digits = String(number)
    //     .split('')
    //     .map(Number);
    // console.log("split number " + digits);

    // digits = digits.slice(0, digits.length - 2);
    // console.log("slice " + digits);

    if (number === 0) {
        return "zero";
    }

    if (number < 100) {
        return toReadableLessHundred(number);
    }

    if (number === 100) {
        return ("one hundred");
    }

    if (number > 100) {
        console.log("number>100");
        if (number % 100 === 0) {
            console.log("number===100");
            console.log(toReadableLessHundred(Math.floor(number / 100)) + " " + tens[0]);
            return toReadableLessHundred(Math.floor(number / 100)) + " " + tens[0];
        }
        else {
            console.log("number!=100");
            console.log("hundreds " + Math.floor(number / 100));
            console.log(toReadableLessHundred(Math.floor(number / 100)) + " after 100 " + toReadableLessHundred(number % 100));
            return toReadableLessHundred(Math.floor(number / 100)) + " " + tens[0] + " " + toReadableLessHundred(number % 100);

        }
    }

    return "";
}

function toReadableLessHundred(number) {
    let numbersLessTwenty = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    let numbersTens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let tens = ["hundred", "thousand", "million", "jdkf", "jjj", "kdsk", "jksjd"];
    let lastDigit = "";
    if (number < 20) {
        if (number === 0) {
            return "";
        }
        else {
            return numbersLessTwenty[number];
        }
    }
    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return numbersTens[Math.floor(number / 10) - 2];
        }
        else {
            return numbersTens[Math.floor(number / 10) - 2] + " " + numbersLessTwenty[number % 10];
        }
    }
}

function toReadableHudreds(nOfHundred) {
    return numbersLessTwenty[nOfHundred] + " " + tens[0];
}
