// 제네릭(Generic)
// 함수

interface Obj {
   x: number;
}
type Arr = [number, number];

// 이건 오버로딩 방법
// function toArray(a: string, b: string): string[];
// function toArray(a: number, b: number): number[];
// function toArray(a: boolean, b: boolean): boolean[];
// function toArray(a: Obj, b: Obj): Obj[];
// function toArray(a: Arr, b: Arr): Arr[];
// function toArray(a: any, b: any) {
//    return [a, b];
// }
function toArray<T>(a: T, b: T) {
   return [a, b];
}

console.log(
   toArray<string>('Neo', 123), // 이렇게 명시해줄 수 있음
   toArray<number>(1, 2),
   toArray(true, false),
   toArray({ x: 1 }, { x: 2 }),
   toArray<Arr>([1, 2], [3, 4]),
);

// 클래스
class User<P> {
   //public payload: P;
   constructor(public payload: P) {
      //this.payload = payload;
   }
   getPayload() {
      return this.payload;
   }
}

interface UserAType {
   name: string;
   age: number;
   isValid: boolean;
}
interface UserBType {
   name: string;
   age: number;
   emails: string[];
}
const heropy = new User<UserAType>({
   name: 'Heropy',
   age: 85,
   isValid: true,
   //emails: []
});
const neo = new User({
   name: 'Neo',
   age: 102,
   emails: ['neo@gamil.com'],
});

// 인터페이스, 제약 조건(Constraints)
interface MyData<T extends string | number> {
   name: string;
   value: T;
}
const dataA: MyData<string> = {
   name: 'Data A',
   value: 'Hello world',
};
const dataB: MyData<number> = {
   name: 'Data B',
   value: 1234,
};
const dataC: MyData<boolean> = {
   name: 'Data C',
   value: true,
};
const dataD: MyData<number[]> = {
   name: 'Data D',
   value: [1, 2, 3, 4],
};
