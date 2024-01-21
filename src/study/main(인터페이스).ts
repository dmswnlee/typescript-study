// 인터페이스(Interface)

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

interface User {
   name: string;
   readonly age: number;
   isValid?: boolean;
}

const heropy: User = {
   name: 'Heropy',
   age: 85,
   isValid: true,
};

heropy.isValid = false; // 객체 재할당 가능
heropy.age = 22; // readonly이기 때문에 재할당 불가능

const neo: User = {
   name: 'Neo',
   age: 102,
   //isValid: false,
};

// 함수 타입 - 호출 시그니처(Call Signature)
// interface GetName {
//    (message: string): string
// }
// 이렇게 지정해도 되고 (재사용한다면 이 방식으로 하는게 좋다)

interface User2 {
   name: string;
   age: number;
   getName: (message: string) => string; // 이렇게 바로 지정을 해줘도 된다.
}

const heropy2: User2 = {
   name: 'Heropy',
   age: 85,
   getName(message: string) {
      console.log(message);
      return this.name;
   },
};
heropy2.getName('Hello~');

// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)
// 배열
interface Fruits {
   [item: number]: string;
}
const fruits: Fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[1]); // Banana

// 객체
interface User3 {
   // 밑에 있는 name, age를 제외하고는 값을 알 수 없다
   [key: string]: unknown;
   name: string;
   age: number;
}
const heropy3: User3 = {
   name: 'Heropy',
   age: 85,
};
heropy3['isValid'] = true;
heropy3['emails'] = ['123456@gamil.com', '789456@gamil.com'];
console.log(heropy3); // isValid, emails 추가됨

//
interface Payload {
   [key: string]: unknown;
}
function logValues(Payload: Payload) {
   for (const key in Payload) {
      console.log(Payload[key]);
   }
}

interface User4 {
   [key: string]: unknown;
   name: string;
   age: number;
   isValid: boolean;
}
const heropy4: User4 = {
   name: 'Heropy',
   age: 85,
   isValid: true,
};
logValues(heropy4);

// 확장(상속)
interface UserA {
   name: string;
   age: number;
}
interface UserB extends UserA {
   isValid: boolean;
}

const heropy5: UserA = {
   name: 'Heropy',
   age: 85,
   isValid: true,
};

const neo2: UserB = {
   name: 'Neo',
   age: 102,
   isValid: true,
};

//
interface FullName {
   firstName: string;
   lastName: string;
}

interface FullName {
   middleName: string; // 특정 속성을 추가로 작성
   lastName: string;
   //lastName: boolean;
   // 기존의 속성은 그대로 입력해줘야 에러가 나지 않음
}

const fullName: FullName = {
   firstName: 'Tomas',
   middleName: 'Sean',
   lastName: 'Connery',
};
