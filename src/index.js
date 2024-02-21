console.log("TypeScript Learning");
var sales = 789456123; // type : number         
var course = 'TypeScript'; // type : string
var is_published = true; // type : boolean
var level; // type : any
//type : array
var marks = [];
marks[0] = 1;
// marks[1] = '1';            This will throw error because marks is a number type array
var subject = ['Maths', 'English', 'Science'];
// Of course, you can always initialize an array like 
// shown below, but you will not get the advantage of TypeScript's type system
var arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];
// Multitypes Array
var values = ['A', 2, 'B', 3, 4, 'C'];
// type : Tuple 
var employee = [1, "Steve"];
console.log(employee[1].length);
