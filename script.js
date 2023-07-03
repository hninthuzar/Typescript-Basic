var button = document.getElementById("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var resultData = document.getElementById("resultData");
var isString = true;
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    if (resultData) {
        resultData.innerText = (add(+input1.value, +input2.value)).toString();
    }
});
var numberTwo;
numberTwo = 7;
console.log("numberTwo ", numberTwo);
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {})); // default sorting => 0, 1, 2, .... eg. ADMIN=0, READ_ONLY=1, AUTHOR=2 
var person = {
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
};
person.role.push("admin");
person.role.push(2);
console.log(person.nickname);
if (person.enumRole == Role.ADMIN) {
    console.log(person.enumRole);
}
// any //
function combine(value1, value2, defaultMessage) {
    var result;
    if (typeof value1 === "number" && typeof value2 === "number") {
        result = value1 + value2;
    }
    else {
        result = value1.toString() + value2.toString();
    }
    return result + " /// " + defaultMessage;
}
console.log(combine(10, 5, "as-number"));
console.log(combine("Hello ", "World", "as-string"));
// define return type in function 
function multiply(number1, number2) {
    return number1 * number2;
}
var multiplyFunction;
multiplyFunction = multiply;
console.log(multiplyFunction(5, 6));
// handle function with callback
function handle(n1, n2, cb) {
    var result = n1 + n2;
    var value = cb(result);
    console.log({ value: value });
}
// let handleFunction: Function;
// handleFunction = handle;
handle(5, 6, function (result) {
    console.log({ result: result });
    return result;
});
