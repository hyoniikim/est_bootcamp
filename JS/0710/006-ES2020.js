//ES2020에 도입된 연산

console.log("---nullish (??)---");
// or연산과 비슷한 기능 -> 첫 번째로 오는 true
// ?? nullish -> 첫 번째로 오는 undefined나 null이 아닌 값

console.log(null ?? null); //null
console.log(null ?? null ?? undefined); //undefined -> 마지막까지 평가를 이어가서 마지막인 undefined가 반환
console.log(null ?? "weniv" ?? undefined); //weniv
console.log(null ?? "" ?? undefined); // 빈문자열 -> null이나 undefined가 아닌 값 반환

const a = null;
const b = 23;
console.log(a ?? b); //23
console.log(b ?? a); //23

//let name = window.prompt("이름을 입력해주세요");
name = name ?? "사용자";
console.log("이름: ", name); // 취소를 누르면, 이름: 사용자 / 입력하지않고 확인을 누르면, 이름:___(빈문자열)

console.log("---옵셔널 체이닝 (?.)---");
const user = {
  name: "경현",
  address: {
    city: "jeju",
  },
  number: {
    location: "seoul",
  },
  sayHello() {
    console.log("Hello world"); //Hello world
  },
};
console.log(user.number); // undefined
//console.log(user.number.location); //undefined.location (undefined에서 속성을 가져오지 못함) = undefined의 속성을 가져올 수 없음
console.log(user && user.number && user.number.location);
console.log(user?.number?.location); //undefined // null이나 undefined가 아니면 뒷값으로 넘어감
//user.number?.location -> user.number가 존재하지 않기 때문에 undefined
//console.log(user.sayHello()); //오류발생 (user.sayHello의 함수값을 반환하기 때문에 오류)
console.log(user.sayHello?.()); //undefined (sayHello의 반환값이 없기때문에 undefined) -> return값이 있어야 반환값이 생성

//옵셔널과 널리쉬를 함께 사용
console.log("---옵셔널 & 널리쉬---");
console.log(user?.number?.location ?? "jeju"); //jeju
