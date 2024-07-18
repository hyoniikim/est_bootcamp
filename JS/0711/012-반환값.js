//반환값
//return 값

function sum(a, b) {
  return a + b;
  console.log("return문 뒤에 오는 코드!"); //return문 뒤에오는 코드는 실행되지 X
}
console.log(sum(2, 3));

function sub(a, b) {
  console.log(a - b);
}
console.log(sub(5, 2)); //반환값이 없는 함수는 undefined로 반환

//return을 만나면 함수는 종료됨
function sumNumb(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log("숫자가 아닙니다.");
    return;
  }
  // a와 b는 숫자
  return a + b;
}
console.log(sumNumb(10, 20)); //30
console.log(sumNumb("hello", 2)); //숫자가 아닙니다.
