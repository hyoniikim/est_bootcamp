// 구조 분해 할당 (destructuring)
// 구조를 분해해서 변수에 할당하는 기능

const foods = {
  food1: "과일",
  food2: "생선",
  food3: "채소",
};

/*
let food1, food2, food3;
food1 = foods["food1"];
food2 = foods["food2"];
food3 = foods["food3"];
console.log(food1, food2, food3);
*/

const obj = { one: 1, two: 2 };
let { two: myNum } = obj;
console.log(myNum);

/*
let { one: one, two: two } = { one: 1, two: 2 };
console.log(one);
console.log(two);
*/

let { one, two, three } = { one: 1, two: 2 };
console.log(one);
console.log(two);
console.log(three);

let { food1, food2, food3 } = foods;
console.log(food1, food2, food3);

console.log("---배열의 디스트럭처링---");
const arr = [1, 2, 3, 4, 5];

let [a, b, c] = arr;
console.log(a, b, c);

//빈값으로 두면 필요한 값만 가져옴
let [d, , f] = [1, 2, 3, 4, 5];
console.log(d, f);

let [x, y, z] = [1, 2];
console.log(x, y, z);

console.log("---함수의 매개변수 디스트럭처링---");
function func1({ a, b }) {
  console.log(a, b);
}
func1({ a: "hello", b: "world" });
//매개변수 {a, b} = {a:'hello', b:'world'} 인자

func1({ b: 20, a: 10 }); // 10 20
//{a, b} = {b: 20, a:10}

function func2([a, b, c]) {
  console.log(a, b, c);
}
func2([10, 20, 30]);
//매개변수 [a, b, c] = [10, 20, 30] 인자
//순서대로 들어감
