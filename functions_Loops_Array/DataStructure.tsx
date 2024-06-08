// Functions

//when we define function we check some properties of that function taht is function return type parameter types and other things that is necessary in order to define or working with code of js

function MyName(): string {
  return "Adil Zeb";
}
const myname = MyName();
console.log(myname);

//parameters

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const numberAdd = add(23, 10);
console.log(numberAdd);

//Return Type Object

function UserIdentities(name: string, id: number): {} {
  return { name, id };
}

const identity = UserIdentities("Adil", 23);
console.log(identity);

//Return Type Array

function userInfo(name: string, id: number): [string, number] {
  return [name, id];
}

const info = userInfo("Adil", 23);

//optioanl parameters

function student(name: string, cnic?: number): {} {
  if (cnic == undefined) {
    return (cnic = 1302010201);
  } else {
    return { name: name, cnic: cnic };
  }
}

const studentinfo = student("Adil", 40);

console.log(studentinfo);

//default parameters

function defpara(fname: string, age = 23): any {
  return `name:${fname} and age ${age}`;
}

const getdefpara = defpara("Adilzeb");

console.log(getdefpara);

//Arrays

//array of strings

let alphbets: Array<string> = ["a", "b", "c", "d", "e", "f"];
console.log(alphbets);

//array of numbers

let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

//array of mixed types

let mixedarray: Array<number | string> = [1, 2, 3, "4", 5, "6"];
console.log(mixedarray);

//array of objects

let users: Array<{ name: string; age: number; adress: string }> = [
  { name: "Adil", age: 23, adress: "Abbottabad Pakistan" },
];

console.log(users);

//tuple
//tuples in typescript is just arranging the data type inside the array
//we can't change the order of data and types or it is not possible to perform array operations on tubles because they are read only
let ourtuple: [string, number, boolean];

ourtuple = ["Adil", 23, true];
console.log(ourtuple);

//nested Array

const Imei: number[][] = [
  [223, 332, 22, 33],
  [233, 334, 33, 22],
];

console.log(Imei.flat(2));

//multiple data inside array

let dataarray: (number | string)[] = [1, 2, 3, 4, "a", "b", "c", "d", "e"];
dataarray.map((x): number | string => {
  if (typeof x === "number") {
    return x;
  } else {
    return x.toUpperCase();
  }
});
console.log(dataarray);

//loops

for (let i: number = 0; i <= 10; i++) {
  console.log(i);
}
