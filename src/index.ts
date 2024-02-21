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

