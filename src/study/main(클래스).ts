// 클래스

// 접근 제어자(Access Modifiers)
// public - 어디서나 자유롭게 접근 가능, 클래스 바다에서 생략 가능
// protected -  나와 파생된 후손 클래스 내에서 접근 가능
// private - 내 클래스에서만 접근 가능

class UserA {
   // first: string = ''; 초기화도 가능!
   //  public first: string;
   //  protected last: string;
   //  private age: number;
   constructor(
    public first: string, 
    public last: string, 
    public age: number
    ) {
      // this.first = first;
      // this.last = last;
      // this.age = age;
   }
   protected getAge() {
      return `${this.first} ${this.last} is ${this.age}`;
   }
}
class UserB extends UserA {
   getAge() {
      return `${this.first} ${this.last} is ${this.age}`;
   }
}
class UserC extends UserB {
   getAge() {
      return `${this.first} ${this.last} is ${this.age}`;
   }
}

const neo = new UserA('Neo', 'Anderson', 102);
console.log(neo.first);
console.log(neo.last);
console.log(neo.age);
neo.getAge();
