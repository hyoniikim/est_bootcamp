//숫자형 변환

console.log("---숫자 형변환---");
console.log("1. Number");
console.log(Number("102")); //102
console.log(Number("Hello")); //Nan
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

console.log("2. parseInt, parseFloat");
//문자열 -> 숫자형 (only)

console.log("3. 단항 연산자");
console.log(+"102"); //102
console.log(+"Hello"); //NaN
console.log(+true); //1
console.log(+false); //0
console.log(+null); //0
console.log(+undefined); //NaN

console.log("4. 자동 형 변환 -> 곱하기(*1)");
//더하기를 제외한 산술연산 -> 숫자형으로 변환
console.log("201" * 1); //201
console.log("Hello" * 1); //NaN
console.log(true * 1); //1
console.log(false * 1); //0
console.log(null * 1); //0
console.log(undefined * 1); //NaN
