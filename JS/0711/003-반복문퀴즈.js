//반복문 퀴즈

//1. 1부터 100까지 짝수의 합을 구하는 반복문 코드
//1)
let total = 0;
for (i = 0; i <= 100; i = i + 2) {
  total = total + i;
}
console.log("짝수의 합: ", total); //짝수의합: 2550

//2)
let evenSum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) evenSum += 1;
}
console.log("짝수의 합: ", total); //짝수의합: 2550

//2. 반의 평균을 구하는 반복문 코드 (reduce 사용 x)
const score = [84, 92, 39, 55, 71];

let total2 = 0;
for (let i = 0; i < score.length; i++) {
  total2 += score[i];
}
console.log("반의 평균: ", total2 / score.length.toFixed(1) + "점"); //반의 평균: 68.2점
