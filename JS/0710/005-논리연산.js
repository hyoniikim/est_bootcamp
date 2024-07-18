//논리연산
//boolean - true & false

console.log("---논리곱 and (&&)---");
console.log("true && true: ", true && true); //true
console.log("true && false: ", true && false); //false
console.log("false && true: ", false && true); //false
console.log("false && false: ", false && false); //false

let age = 20;
console.log(age > 5 && age < 25); //true
console.log("licat" && "wade");

console.log(age > 5 && false && age < 25); //false
console.log(age > 5 && "" && age < 25); // 빈문자열 -> 첫번째로 falsy한 값 -> 뒷부분은 평가하지않음
console.log(age > 5 && age < 25 && "licat"); // licat -> 마지막 truthy한 값

let isLoggedIn = true;
isLoggedIn && console.log("Hello User!"); //Hello User!

const result = isLoggedIn && console.log("Hello User!");
console.log(result); //undefined

const user = {
  name: "경현",
  adress: {
    city: "jeju",
  },
};
console.log(user.number); //undefined
//console.log(user.number.location); //객체가 중첩되는 경우, 오류발생
console.log(user.number && user.number.location); //undefined

console.log("---논리합 or (||)---");
console.log(`true || true : ${true || true}`); //true
console.log(`true || false : ${true || false}`); //true
console.log(`false || true : ${false || true}`); //true
console.log(`false || false : ${false || false}`); //false

let age2 = 20;
console.log(age < 10 || age < 25); //true
console.log("" || "licat" || NaN || null); //licat -> 값이 있는 문자열 = true / 비어있는 문자열 = false
console.log("" || NaN || null); //null -> 모든값이 falsy하다면 마지막값 반환

//let name = window.prompt("이름을 입력해주세요");
name = name || "사용자";
console.log("이름: ", name); //취소할땐 null / 그냥 확인 눌렀을땐 빈문자열

console.log("---논리부정 not(!)---");
console.log(!true); //false
console.log(!false); //true

//논리부정을 2번 사용해서 boolean 타입으로 변환가능
console.log(!23); //false -> 23은 truthy한 값
console.log(!!23); // true -> 부정의 부정 = true
