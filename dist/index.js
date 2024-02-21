"use strict";
var _a, _b, _c;
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
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let numResult = kgToLbs(10);
let strResult = kgToLbs('15');
console.log(numResult);
console.log(strResult);
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let metric = 'cm';
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Name required....");
    }
}
greet("parveen");
greet(null);
const user = {
    id: 1,
    name: "Bruce Wayne",
    address: {
        city: "Gotham",
        postalCode: "101010"
    }
};
const userName = user.name;
const userCity = (_a = user.address) === null || _a === void 0 ? void 0 : _a.city;
console.log("User Name:", userName);
console.log("User City:", userCity);
const userPostalCode = (_c = (_b = user.address) === null || _b === void 0 ? void 0 : _b.postalCode) === null || _c === void 0 ? void 0 : _c.toUpperCase();
console.log("User Postal Code:", userPostalCode);
//# sourceMappingURL=index.js.map