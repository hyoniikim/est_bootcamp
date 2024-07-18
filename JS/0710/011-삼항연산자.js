//삼항연산자

// (조건식) ? (조건식이 참일 때 실행할 코드) : (조건식이 거짓일 때 실행할 코드)

console.log("---삼항연산자---");
true ? console.log("true") : console.log("false"); //true
false ? console.log("true") : console.log("false"); //false
const result = false ? console.log("true") : console.log("false");
console.log(result); //undefined

let num = 10;
const item = num > 5 ? "apple" : "banana";
console.log(item); //apple
// if문
// 삼항 연산자 -> 값으로 평가될 수 있기 때문에 표현식

console.log("---삼항연산자 중첩---");
let price = 2000;
//6000보다 크면 : '비싸요'
//3000보다 크면 : '적당해요'
//3000보다 크고 6000보다 작거나 같으면: '적당해요'
//3000보다 작거나 같으면: '저렴해요'
let message = price > 6000 ? "비싸요" : price > 3000 ? "적당해요" : "저렴해요";
console.log(message);
