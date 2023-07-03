const button = document.getElementById("button");
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const resultData = document.getElementById("resultData");

const isString = true;

function add(num1: number, num2:number) {
    return num1+num2;
}

button?.addEventListener("click", function() {
    if(resultData) {
        resultData.innerText = (add(+input1.value, +input2.value)).toString();
    }    
})

/// * ------------------------------------- *///

let numberTwo:number;
numberTwo = 7;
console.log("numberTwo ", numberTwo);

enum Role {
    ADMIN = 'ADMIN', READ_ONLY='READ_ONLY', AUTHOR='AUTHOR'
} // default sorting => 0, 1, 2, .... eg. ADMIN=0, READ_ONLY=1, AUTHOR=2 

let person: {
    name:string,
    age: number,
    nickname: string,
    hobbies: string[],
    role: [number, string],
    exercise: [{}],
    enumRole: Role
} = {
    name: "hnin hnin",
    age: 30,
    nickname: "hnin",
    hobbies: ["swimming", "reading"],
    role: [1, 'author'],
    exercise: [
        {
            name: "Book",
            type: "Reading"
        }
    ],
    enumRole: Role.ADMIN
}

person.role.push("admin")
person.role.push(2)

console.log(person.nickname)

if(person.enumRole == Role.ADMIN) {
    console.log(person.enumRole)
}

// start - custom type //
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";
// any //

function combine(value1: Combinable, value2: Combinable, defaultMessage: ConversionDescriptor ) {
    let result: any;
    if(typeof value1 === "number" && typeof value2 === "number") {
        result = value1 + value2;
    } else {
        result = value1.toString() + value2.toString();
    }
    return result  + " /// " + defaultMessage;
}

console.log(combine(10, 5, "as-number"));
console.log(combine("Hello ", "World", "as-string"));

// end - custom type //


// start - define return type in function 

function combineTwoString (string1: string, string2: string): void {
    console.log(string1 + " / " + string2);
} // not return value

combineTwoString("Hello World", "Hnin Hnin");

function multiply(number1: number, number2: number): number {
 return number1 * number2;
} // have return value type

let multiplyFunction: (a: number, b: number) => number;
multiplyFunction = multiply;

console.log(multiplyFunction(5, 6));

// end - define return type in function 


// start - define positional param function

function multiplyOption(number1: number, number2?: number): number {
    if(number2) {
        return number1 * number2;
    }
    return number1 * 1; 
}
console.log(multiplyOption(5, 6));
console.log(multiplyOption(5));

// end -- define positional param function


// start - handle function with callback

function handle(n1: number, n2: number, cb: (a: number) => void): void {
    const result =  n1 + n2;
    const value = cb(result);
    console.log({value})
}
   
// let handleFunction: Function;
// handleFunction = handle;

handle(5, 6, (result) => {
    console.log({result})
    return result;
});

// end - handle function with callback


// start -casting

const x:unknown = "Hello World";

console.log((x as string).length)
console.log((<string>x).length)

// end -casting

