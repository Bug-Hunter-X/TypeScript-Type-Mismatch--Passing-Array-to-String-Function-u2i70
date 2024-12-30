function greeter(person: string): string {
  return "Hello, " + person;
}

function isString(input: any): input is string {
  return typeof input === 'string';
}

let user = ["Jane", "Doe"];
let userName = user.join(' '); //join the array to a string
if (isString(userName)) {
  console.log(greeter(userName));
} else {
  console.log("Invalid input: Expected a string.");
}

let user2 = "John Doe";
console.log(greeter(user2));