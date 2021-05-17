// Checking if a number is big

const numberBig = function(number) {
   if (number > 100) {
       return true;
   } return false;
};

const sum = numberBig(101);
console.log(sum);

// Bouncer at a club

const entrance = function (people, age) {
    let result;
    if (people > 500 && age >= 18) {
        result = "It's too busy now, come back later";
    } else if (people >= 500 && age < 18) {
        result = 'This is a club for adults';
    } else if (people < 500 && age < 18) {
        result = 'This is a club for adults';
    } else {
        result = 'Come in';
    }
    return result;
};

console.log(entrance(255, 18));
console.log(entrance(555, 25));
console.log(entrance(100, 16));
console.log(entrance(655, 14));

// Calculating the average

const calculateAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    return average;
};

const result1 = calculateAverage([1, 6, 2, 8, 5]);
const result2 = calculateAverage([1, 8.5, 3.6, 7, 12]);
const result3 = calculateAverage([66, 46, 76, 16, 44]);
console.log(Math.round(result1));
console.log(Math.round(result2));
console.log(Math.round(result3));