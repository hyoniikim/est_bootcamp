//비교연산
//결과는 항상 boolean(true, false);

//크기를 비교하는 대소관계 연산자
let x = 20;
let y = "10";
console.log("x > y", x > y); //true
console.log("x < y", x < y); //false

let z = 20;
console.log("x >= z", x >= z); //true
console.log("x <= z", x <= z); //true

//비교연산에서는 문자열로 적용해도 숫자형으로 변경되어 적용

console.log("100" < "2"); //true
console.log("100" < 2); //false -> 100 < 2

console.log("Hello" < 2); //NaN < 2 -> false
console.log(2 < "Hello"); // 2 < NaN -> false
//NaN는 모든 비교 연산에 있어서 false를 반환함

console.log(NaN < NaN);

//동등 == / 부등 !=
console.log("---동등과 부등---");
let num1 = 30;
let num2 = 20;

//==동등연산자는 타입변환이 발생
console.log(num1 == 30); //true
console.log(num1 == "30"); //true
console.log(num1 == 30n); //true
console.log(num1 == num2); //false -> 값이 다른 경우
console.log(num1 == "30n"); //false

//!= 부등연산자는 타입변환이 발생
console.log(num1 != num2); //true
console.log(num1 != "30"); //false (30 != 30)
console.log(num1 != 30n); //false

console.log("---자동 형 변환---");
console.log(+false); // 0
console.log(+true); // 1

console.log(+"234"); //234
console.log(+"Hello"); // NaN
console.log(+""); // 0

console.log(+null); // 0
console.log(+undefined); //NaN

console.log("---다른 형 비교---");
console.log("" == false); //true
console.log("Hello" == true); //false
console.log("Hello" == NaN); //false

console.log("isNaN", isNaN("Hello")); //true
console.log("Number isNaN", Number.isNaN("Hello")); //false

console.log(null == undefined); //true
// null == null, null == undefined, undefined == undefined
console.log(null == "");

console.log("---객체의 비교---");
const obj1 = { a: "1", b: "2" };
const obj2 = { a: "1", b: "2" };
const obj3 = obj1;

console.log(obj1 == obj2); //false
console.log(obj1 == obj3); //true

console.log([] == []); //false

console.log("---객체 vs 원시타입---");
//객체를 원시 타입에 맞춰서 변환
console.log([1, 2] == "1,2"); //true
console.log([] == 0); //true

//일치(===) / 불일치(!==)
//타입 변환이 없고, 값과 타입을 모두 비교
console.log("---일치(===) / 불일치(!==)---");
let num3 = 30;
let num4 = 20;

console.log(num3 === 30); //값과 타입을 비교
console.log(num3 === "30"); //타입이 다르기 때문에 false
console.log(num3 === 30n); //false

console.log(num3 !== 30); //false
console.log(num3 !== "30"); //true
console.log(num3 !== num4); //true

const obj4 = [1, 2, 3, 4];
const obj5 = [1, 2, 3, 4];
const obj6 = obj4;
console.log(obj4 === obj5); //false
console.log(obj4 === obj6); //true
