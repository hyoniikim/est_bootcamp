//Math 객체

//원주율
console.log(`Math.PI: ${Math.PI}`);

//숫자를 반올림, 올림, 버림
console.log(`Math.floor: ${Math.floor(8.6)}`); //버림
console.log(`Math.round: ${Math.round(4.7)}`); //반올림
console.log(`Math.round: ${Math.round(4.3)}`); //반올림
console.log(`Math.ceil: ${Math.ceil(9.3)}`); //올림

//정수부만 가져옴
console.log(`Math.trunc: ${Math.trunc(4.7)}`); //4
console.log(`Math.trunc: ${Math.trunc(-1.5)}`); //-1

//제곱과 제곱근
console.log(`Math.pow: ${Math.pow(2, 3)}`); //8 -> 2의 3제곱
console.log(`2 ** 3 = ${2 ** 3}`);
console.log(`Math.sqrt: ${Math.sqrt(16)}`); ///4 -> 16의 제곱근

//절대값
console.log(`Math.abs: ${Math.abs(-5)}`); //5
console.log(`Math.abs: ${Math.abs(4)}`);

//랜덤숫자
console.log(`Math.random: ${Math.random()}`); //0~1사이의 수를 랜덤으로 반환
// 1부터 10까지
// 0 <= random < 1
// 0 <= random < 10 -> *10
// 1 <= random < 11 -> +1 / random = 1.1, 10.999
// 소수점 버림
console.log(`1부터 10까지의 랜덤 정수: ${Math.floor(Math.random() * 10 + 1)}`);

//가장 큰 값 max, 가장 작은 값 min
console.log(`Math.max: ${Math.max(10, 20, 30, 40, 20)}`); //40
console.log(`Math.min: ${Math.min(10, 20, 30, 40, 20)}`); //10
