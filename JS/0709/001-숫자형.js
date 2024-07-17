//숫자형 메소드

console.log("----------parseInt----------");
//문자열 데이터 -> 숫자형
//Int = Integer
console.log(parseInt("36"));
//36px
console.log(parseInt("36px"));
console.log(parseInt("12.5px"));
console.log(parseInt("width: 25px")); //NaN(Nnot a Number) -> 숫자가 아닌 값이 시작이면 NaN로 반환

console.log("----------parseFloat----------");
console.log(parseFloat("12.5px")); //12.5 -> 실수값 반환

console.log("----------isNaN----------");
console.log(isNaN(23)); //false -> number
console.log(isNaN(undefined)); // true -> Not a Number
console.log(isNaN("hello")); //true
console.log(isNaN("2345")); //false
//isNaN : 자동으로 숫자로 변환해서 확인
//undefined는 변환하면 NaN로 반환

console.log("----------Number.isNaN----------");
//Number.isNaN : 형변환X, 숫자형 NaN일 경우에만 true를 반환
console.log(Number.isNaN(23)); //false
console.log(Number.isNaN(undefined)); //false
console.log(Number.isNaN("2345")); // false
console.log(Number.isNaN("hello")); //false
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN("hello" * 3)); //true

console.log("----------toFixed----------");
//toFixed(소수점n자리) = 소수점n자리까지 반환 / 결과는 문자형(string)으로 반환
const pi = 3.1415926; //3.14
console.log(pi.toFixed(2)); //3.14
console.log(pi.toFixed(3)); //3.142 (반올림을 해서 반환)
console.log(pi.toFixed(10)); //3.1415926000 (0으로 반환)
console.log(typeof pi.toFixed(10)); //string
console.log(pi.toFixed()); //3 -> 빈칸이면 정수만 반환
