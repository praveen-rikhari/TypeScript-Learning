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


// objects
let student: {
    readonly id: number,
    name: string
} = {
    id: 1,
    name: "Parveen"
}

// To dynamically add value like
// student.name = "Parveen"
// it is required to set name property either to a empty string (name : '')
// or can set it as a optional value (name?: string)

console.log(student);

// we can  change the id of student any time which is not valid
// so to overcome this problem we can set id to readonly

// type Aliases
// to increase reusability of the code we can do 👇

type Student = {
    readonly id: number,
    name: string
}

let student1: Student = {
    id: 2,
    name: "Rikhari"
}
console.log(student1);


// Union Types

function kgToLbs(weight: number | string): number {
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

// Intersection Types

type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}


// Literal Types

type Quantity = 50 | 100;
let quantity: Quantity = 100;

// This below code will throw error
// let quantity : Quantity = 10;

type Metric = 'cm' | 'inch';
let metric: Metric = 'cm'

// This below code will throw error
// let metric : Metric = 'mm';


// Null Types

function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Name required....")
    }
}
greet("parveen");
greet(null);