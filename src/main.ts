// 타입 종류
// 해당 타입이라고 명시해줌으로써 해당 데이터만 할당할 수 있는 구조로 만들어준다.

// 문자
let str: string;
let red: string = 'red';
let green: string = 'Green';
let myColor: string = `My color id ${red}`;
let yourColor: string = 'Your color is' + green;

// 숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

// 불린
let isBoolean: boolean;
let isDone: boolean = false;

// Null / Undefined
// null, undefined는 타입으로 명시하는일이 거의 없다.
// 지정하는 것이 가능하다는 것만 알고있자.
let nul: null;
let und: undefined;
nul = null; // null 변수는 null만 할당가능
console.log(nul);
console.log(und);

// 배열
// 배열과 그안에 들어갈 타입을 꼭 같이 명시해줘야한다.
const fruits: string[] = ['Apple', 'Banana', 'Cherry'];
const number: number[] = [1, 2, 3, 4, 5, 6, 7];
const union: (string | number)[] = ['Apple', 1, 2, 'Banana', 3];

// 객체
// typeOf DATA === 'object'
// object는 거의 사용하지 않음
const obj: object = {};
const arr: object = [];
const func: object = function () {};

const userA: {
   name: string;
   age: number;
   isValid: boolean;
} = {
   name: 'Heropy',
   age: 85,
   isValid: true,
};

const userB: {
   name: string;
   age: number;
   isValid: boolean;
} = {
   name: 'Neo',
   age: 22,
   isValid: false,
};

// 중복되는 객체타입은 interface에서 해결할 수 있음!
// 이렇게 명시를 하면 다른 속성을 추가할 수 없음
// 만약 속성 이름에 오타가 있다면 에러를 통해 알 수 있음
interface User {
   name: string;
   age: number;
   isValid: boolean;
}

const userC: User = {
   name: 'Lewis',
   age: 35,
   isValid: false,
};

// 함수
const add: (x: number, y: number) => number = function (x, y) {
   return x + y;
};

const a: number = add(1, 2);

// 함수에 return 키워드가 없으면 undefined가 아닌 void를 반환한다.
const hello: () => void = function () {
   console.log('Hello world~');
};
const h: void = hello();

// Any
// 아무거나 변수의 데이터타입으로 사용할 수 있는 것
// 일반적으로 타입스크립트에서 잘 사용하지 않는게 좋음
// 타입스크립트는 엄격하게 하는 것이 좋기 때문!
let halo: any = 'Hello world';
halo = 123;
halo = false;
halo = null;
halo = {};
halo = [];
halo = function () {};

// Unknown
// 정확히 어떤 데이터가 할당될지 알 수 없으니 일단 알 수 없음으로 표시 하겠다는 것
const b: any = 123;
const u: unknown = 123;

const any: any = b;
const boo: boolean = b;
const num2: number = b;
const arr2: string[] = b;
const obj2: { x: string; y: number } = b;

// 타입스크립트에서 코드를 작성할 때 데이터의 타입을  정확하게
// 무엇으로 지정해야 될지 모르는 상황에서는 any 대신 unknown을 지정하면
// any 보다 훨씬 엄격하게 조건을 따져 가능한지 아닌지 알려준다.
// 생각보다 많이 사용됨!

// Tuple
// 배열을 사용하는 개념이긴 하지만 배열의 정확한 아이템 개수까지 명시하는 타입
// 배열 데이터의 개수가 달라지는 곳에서는 적합하지 않다.
// 배열 데이터의 명확한 아이템 순서가 존재할 때 사용됨
const tuple: [string, number, boolean] = ['a', 1, false];
const users: [number, string, boolean][] = [
   [1, 'Neo', true],
   [2, 'Evan', false],
   [3, 'Lewis', true],
];

// void
// 타입스크립트에서는 undefined가 아닌 void를 명시해줌
// 즉, return 키워드를 반환해주지 않으면 undefined가 반환되지만
// 명시적으로는 void를 작성해줘야된다.
// 왜? 그래야 타입스크립트가 return 키워드가 없는 함수라고 이해할 수 있음!
function hi(msg: string): void {
   console.log(`hi ${msg}`);
}
const bye: void = hi('world');

// Never
// 절대 발생하지 않을 값
// 직접 명시하는 일은 거의 없음
// 만약 에러메세지에서 never 타입을 만나게 된다면
// 타입지정이 잘못된건 아닌지 확인할 수 있음
const nev: [] = [];
nev.push(3);

// Union
// |
// 동시에 여러가지 타입을 할당하고 싶을 때 사용
let union2: string | number; // 문자 또는 숫자 할당가능
union2 = 'Hello type!';
union2 = 123;
union2 = false; // 할당 불가능!

// Intersection
interface User {
   name: string;
   age: number;
}
interface Validation {
  isValid: boolean
}

const heropy: User & Validation = {
  name: 'Neo',
  age: 85,
  isValid: true
}
