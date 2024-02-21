console.log("TypeScript Learning");

let sales = 789456123;       // type : number         
let course = 'TypeScript';   // type : string
let is_published = true;     // type : boolean
let level;                   // type : any

//type : array
let marks: number[] = [];
marks[0] = 1;
// marks[1] = '1';            This will throw error because marks is a number type array

let subject: string[] = ['Maths', 'English', 'Science'];

// Of course, you can always initialize an array like 
// shown below, but you will not get the advantage of TypeScript's type system
let arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];


// Multitypes Array
let values: (string | number)[] = ['A', 2, 'B', 3, 4, 'C'];


// type : Tuple 
let employee: [number, string] = [1, "Steve"];
console.log(employee[1].length);    // 5


//type : enums
const enum Size { Small = 1, Medium, larger };
let mySize: Size = Size.Medium;

console.log(mySize)


// functions
function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2024) {
        return income * 1.2;
    }
    return income * 1.3;
}

console.log(calculateTax(10000, 2012));

// calling functions with missing arguments

function calculateTax2(income: number, taxYear = 2024): number {
    if (taxYear < 2024) {
        return income * 1.2;
    }
    return income * 1.3;
}

// console.log(calculateTax2(10000)); This will throw an error if a default value is not set
console.log(calculateTax2(10000));
