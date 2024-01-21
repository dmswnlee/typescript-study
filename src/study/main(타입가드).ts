// 타입 가드(Guards)
// if 조건등 작성된 코드가 실제로 잘 동작할 수 있도록 코드 상에서 방어하는 것
// 조건으로 들어가는 내용은 어떤 것이든 상관없다.

function logText(el: Element) {
   console.log(el.textContent);
}

// 잘못된 단언
// const h1El = document.querySelector('h1') as HTMLHeadingElement;

// 거짓데이터는 if 조건을 통과할 수 없기때문에
const h1El = document.querySelector('h1');
if (h1El) {
   logText(h1El);
}

const h2El = document.querySelector('h2');
if (h2El instanceof HTMLHeadingElement) {
   logText(h2El);
}

function add(val: string | number) {
   let res = 'Result =>';
   if (typeof val === 'number') {
      res += val.toFixed(2);
   } else {
      res += val.toUpperCase();
   }
   console.log(res);
}

add(3.141592);
add('hello world');
