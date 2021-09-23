const number = 21;
const names = ["orwille", "dennis"];

// console.log(typeof number.toString()); // --> type string
// console.log(names.join(" + ")); // --> type string

const points = [40, 100, 1, 5, 25, 10, -10000];

// points.sort(
//     function(a, b){
//         return a - b
//     }
// );

// console.log(Math.max(...points));
// console.log(Math.min(...points));

// Foreach --> change the array
// points.forEach((num) => {
//   console.log(num * 2);
// });

const numbers1 = [45, 4, 9, 16, 25];
const user = ["Orwille", "Dennis", "Jackie"];

const numbers2 = numbers1.map((value) => value * 2);
const numbers3 = numbers1.filter((value) => value < 9);
const user2 = user.filter((value) => value === "Dennis");
const reduce = numbers1.reduce((total, value) => total + value);
const every = numbers1.every((value) => value > 18);
const indexofsample = user.indexOf("Jackie");
const includessample = user.includes("Dennis");
// console.log(numbers1);
// console.log(numbers2);
// console.log(numbers3);
// console.log(user2);
// console.log(reduce);
// console.log(every);
// console.log(indexofsample);
console.log(includessample);









