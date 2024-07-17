//배열의 요소를 추가하거나 삭제
const arr = [10, 20, 30];

//push & pop
console.log("---push---");
const length = arr.push(40); //길이값을 반환
console.log(arr);
console.log("length", length);
arr.push(50, 60, 70); //여러개의 요소도 추가 가능
console.log(arr);

const element = arr.pop(); //마지막 요소를 반환
console.log(arr);
console.log("element", element); //40

console.log("---unshift & shift---");
arr.unshift(50); //길이값을 반환환
arr.shift(); //첫번째 요소를 반환
console.log(arr);

// splice
// 추가
// splice(n번째자리에 넣을것, 변경할 요소(없으면 0), 넣고자하는값)
console.log("---splice---");
const arr2 = [1, 2, 3];
arr2.splice(1, 0, 4, 5, 6); //추가
console.log(arr2); //[1, 4, 5, 6, 2, 3]

//삭제
// splice(삭제할 n번째 자리, 삭제할 요소의 개수)
arr2.splice(2, 2);
console.log(arr2); // [1, 4, 2, 3]

//변경
// splice(변경할 n번째 자리, 변경할 요소의 개수, 변경할 요소)
arr2.splice(3, 1, 5, 8);
console.log(arr2); //[1, 4, 2, 5, 8]

//slice
//slice(시작하는 인덱스 배열의 순서, 종료하는 인덱스 배열의 순서+1)
console.log("---slice---");
const fruits = ["사과", "바나나", "체리", "블루베리", "두리안"];
console.log(fruits.slice(1, 3)); //[바나나, 체리]

//slice(시작하는 인덱스 배열의 순서) -> 시작하는 인덱스부터 끝까지 새로운 배열을 생성
console.log(fruits.slice(3)); //[블루베리, 두리안]

const fruits2 = fruits.slice(); //배열전체 복사가능

fruits2[0] = "딸기";
console.log("fruits:", fruits); //[사과, 바나나, 체리, 블루베리, 두리안]
console.log("fruits2:", fruits2); //[딸기, 바나나, 체리, 블루베리, 두리안]

//push : 마지막 요소를 추가
//pop : 마지막 요소를 제거
//shift : 맨앞요소를 추가
//unshift : 맨앞요소를 제거
//splice : 추가/삭제/변경

console.log("---sort---");
fruits.sort();
console.log(fruits); //유니코드 -> 사전식

const numbers = [1, 5, 2, 4];
numbers.sort();
console.log(numbers); //[1, 2, 4, 5]

const numbers2 = [5, 100, 27, 36];
numbers2.sort();
console.log(numbers2); //[100, 27, 36, 5]

//숫자를 오름차순
numbers2.sort(function (a, b) {
  return a - b;
});
console.log(numbers2);

//숫자를 내림차순
numbers2.sort(function (a, b) {
  return b - a;
});
console.log(numbers2);

console.log("---indexOf---");
const arr3 = [1, 2, 3, 1, 2, 3, 4];
console.log(arr3.indexOf(2)); //1 -> 2가 있는 첫번째 요소의 자리 : 1
console.log(arr3.indexOf(5)); //-1 -> 값이 없는 경우 : -1
console.log(arr3.indexOf(2, 3)); //4

console.log("---include---");
console.log(arr3.includes(3)); //true -> 3이 있는가? : 있다(true)
console.log(arr3.includes(5)); //false -> 5가 포함되어있는가? : 없다(false)

console.log("---forEach---");
const fruits3 = ["참외", "키위", "감귤"];
fruits3.forEach(function (item, index) {
  console.log(item, index); //참외 0 / 키위 1 / 감귤 2
  fruits3[index] = item + "💛"; //요소뒤에 추가
});
console.log(fruits3); //['참외💛', '키위💛', '감귤💛']
// -> 문제점 : 원본도 같이 변경됨

const fruits4 = ["사과", "바나나", "포도"];
const result = [];
const resultArr = fruits4.forEach(function (item, index) {
  console.log(item, index); //사과 0 / 바나나 1 / 포도 2
  result.push(item + "💜");
});
console.log(fruits4);
console.log(result);
console.log("resultArr->", resultArr);
// -> push메소드를 이용하여 원본유지함

console.log("---map---");
const arr4 = [10, 20, 30];
const newArr = arr4.map(function (item, index) {
  console.log(item, index); //10 0 / 10 1 / 20 2
  return item * index;
});
console.log(newArr); // [0, 20, 60]
console.log(arr4); // [10, 20, 30]
//forEach, map(새로운 배열 반환) -> 순회하는 메소드

console.log("---filter---"); //반환값이 true인 요소만 가져옴
const arr5 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const filterArr = arr5.filter(function (item, index) {
  //짝수만 -> 짝수를 2로 나누면 나머지가 0이 나옴
  return item % 2 === 0;
});
console.log(filterArr); // [2, 4, 2, 4]

console.log("---reduce---");
const arr6 = [1, 2, 3, 4, 5];
const reduceRes = arr6.reduce(function (a, c) {
  return a + c;
}, 0);
console.log(reduceRes);

const redRes = [].reduce(function (a, c) {
  console.log("in reduce: ", a, c);
  return a + c;
}, 0);
console.log(redRes);

console.log("---join---"); //split의 반대기능
const arr7 = ["hello", "world", "weniv"];
console.log(arr7.join(" "));
console.log(arr7.join("-"));

console.log("---concat---"); //배열을 복사할 때 사용
//배열은 풀어서, 값은 요소로 넣음
//원본 배열은 수정되지 X
const arr8 = [1, 2, 3];
const arr9 = [4, 5, 6];

const concatRes = arr8.concat(arr9, 7, 8, [10]);
console.log(concatRes); // [1, 2, 3, 4, 5, 6, 7, 8, 10]
console.log(arr8);
console.log(arr9);

const arr10 = [0, 1, [2, 3]];
const copyArr = arr10.concat();
copyArr[0] = 10;
copyArr[2][0] = 20;
console.log("origin: ", arr10);
console.log("copy: ", copyArr);
