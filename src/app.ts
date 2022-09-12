function add(n1: number, n2: number) {
  const result = n1 + n2;
  console.log('Sum is ' + result);
}

const number1 = 5;
const number2 = 10;

add(number1, number2);

enum Department {
  DEV,
  QA,
  HR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[]; // array type
  role: [number, string]; // tuple type
  department: Department; // enum type
} = {
  name: 'Max',
  age: 30,
  hobbies: ['cooking', 'painting'],
  role: [1, 'admin'],
  department: Department.DEV,
};
console.log(person);
// person.role = [2, 4];

// literal type
type Combinable = number | string;

// union type
function combine(
  input1: number | string,
  input2: number | string,
  resultType: 'as-string' | 'as-number' //literal type
): Combinable {
  // function return type
  let result: Combinable;
  if (typeof input1 == 'number' && typeof input2 == 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultType == 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

console.log(combine(4, 2, 'as-number'));
console.log(combine('Max', 'Ana', 'as-string'));
console.log(combine(1, 'Ana', 'as-number'));
console.log(combine('Ana', 1, 'as-string'));

//function type
let addFunc: (a: number, b: number) => void;
addFunc = add;
console.log(addFunc(2, 8));

// function with callback
function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
  let sum = n1 + n2;
  cb(sum);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// never type
function throwError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const err = throwError('An error occurred', 500); // does not return anything
console.log(err);
