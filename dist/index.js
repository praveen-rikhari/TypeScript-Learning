"use strict";
console.log("TypeScript Learning");
let sales = 789456123;
let course = 'TypeScript';
let is_published = true;
let level;
let marks = [];
marks[0] = 1;
let subject = ['Maths', 'English', 'Science'];
let arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];
let values = ['A', 2, 'B', 3, 4, 'C'];
let employee = [1, "Steve"];
console.log(employee[1].length);
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2024) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(10000, 2012));
function calculateTax2(income, taxYear = 2024) {
    if (taxYear < 2024) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax2(10000));
let student = {
    id: 1,
    name: "Parveen"
};
console.log(student);
let student1 = {
    id: 2,
    name: "Rikhari"
};
console.log(student1);
//# sourceMappingURL=index.js.map