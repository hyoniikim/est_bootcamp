//do while

let num = 12;
do {
  console.log(num);
  num++;
} while (num < 11);
//최소 한 번의 실행을 보장

let inpNum;
let count = 0;
do {
  if (count >= 3) {
    break;
  }
  inpNum = window.prompt("숫자를 입력하세요");
  count++;
} while (inpNum === "" || isNaN(inpNum));

if (inpNum !== null) {
  console.log(`입력된 숫자는 ${inpNum}`);
}
console.log(`입력된 숫자는 ${inpNum}`);
