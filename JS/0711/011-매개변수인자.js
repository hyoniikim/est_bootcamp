//함수의 매개변수와 인자
//num1, num2 -> 매개변수
function sum(num1, num2) {
  return num1 + num2;
}
//2, 3 -> 인자(argument)
sum(2, 3);

//파선아실 : 파라미터는 선언, 아규먼트는 실행

console.log("---매개변수와 인자의 특징---");
function sumNumbs(a, b, c) {
  console.log(`-- ${a} + ${b} + ${c}`);
  return a + b + c;
}
console.log(sumNumbs(10, 20, 30, 40)); //60
console.log(sumNumbs(10, 20)); //NaN -> c = undefined

function sumNumbs2(d, e, f = 0) {
  console.log(`-- ${d} + ${e} + ${f}`);
  return d + e + f;
}
console.log(sumNumbs2(10, 20)); //30 (c=0)

function sumNumbs3(g = 10, h = 20, i = 30) {
  console.log(`-- ${g} + ${h} + ${i}`);
  return g + h + i;
}
console.log(sumNumbs3(0, undefined, 0)); //undefined -> 기본값
console.log(sumNumbs3(null, 0, 0)); //null -> null
//값이 전달되지 않았거나, undefined -> 기본값

console.log("---원시 call---");
let number = 10;
function test(num) {
  num = num + 10;
  console.log("function", num);
}
test(number);
console.log(number);

console.log("---객체 call---");
const object = { a: 1, b: 2 };
function test2(obj) {
  obj.c = 3; //객체가 수정됨
  obj = { name: "weniv" }; //새로 할당
  console.log("function", obj);
}
test2(object);
console.log(object);
