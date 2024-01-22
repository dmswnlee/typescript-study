```ts
{
  // 여기 입력된 값들은 모두 기본값
  // 따로 입력하지 않으면 여기에 있는 값 그대로 입력됨!

  // 컴파일러 옵션 지정
  "compilerOptions": {
    // 컴파일될 ES(JS) 버전 명시 - "ES2015"(ES6) 권장
    // ES6지만 연도로 입력하는 걸 권장
    "target": "ES3",
    // 모듈 시스템 지정 - "commonJS", "AMD", "ESNext"(ESM)
    "module": "commonJS",
    // 모듈 해석 방식 지정 - "Node", "classic"
    "moduleResolution": "Node",
    // ESM 모듈 방식 호환성 활성화 여부
    "esModuleInterop": false,
    // 모든 파일을 모듈로 컴파일, import 혹은 export 키워드 필수
    "isolatedModule": false,
    // 모듈 해석에 사용할 기준 경로 지정
    "baseUrl": "./",
    // 컴파일러가 참조할 타입 선언(d.ts)의 경로를 지정
    "typeRoots": ["./node_modules/@type"],
    // 컴파일에서 사용할 라이브러리 지정 - "ESNext", "DOM"
    "lib" : [],
    // 더엄격한 타입 검색 활성화
    "strict": false,
    // 암시적 any 타입 검사 활성화
    "noImplicitAny": false,
    // 암시적 this 타입 검사 활성화
    "noImplicitThis": false,
    // 엄격한 Nullish 타입 검사 활성화
    "strictNullChecks": false,
    // 엄격한 함수의 매개변수 타입 검사 활성화
    "strictFunctionType": false,
    // 엄격한 클래스의 속성 초기화 검사 활성화
    "strictPropertyInitial": false,
    // 엄격한 bind, call, apply 메소드의 인수 검사 활성화
    "strictBindCallApply": false
  }

  // 컴파일할 파일 경로 목록
  // 자바스크립트로 변환이 필요한 타입스크립트의 경로를 작성
  "include": [
    "src/**/*.ts"
  ],
  // 컴파일에서 제외할 파일 경로 목록
  "exclude": [
    "node_modules"
  ]
}

```
