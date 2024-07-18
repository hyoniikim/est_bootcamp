// 객체
const obj = {
  name: "뽀로로",
  company: "EBS",
  "co-worker": ["펭수", "루피"],
  sayHello() {
    console.log("Hello World!");
  },
};

console.log(obj["name"]); // 뽀로로 -> 대괄호 안에 문자열로 키를 전달
console.log(obj["company"]); // EBS -> 대괄호 안에 문자열로 키를 전달
console.log(obj.name); // 뽀로로 -> key값이 변수명 작성규칙을 만족할 때만 가능

console.log(obj["co-worker"]); // ['펭수', '루피']
console.log(obj.company); // EBS
//console.log(obj.co-worker); // 변수명 작성규칙을 만족하지 않아서 오류
console.log(obj.co); // undefined -> 속성값을 찾지못해서 undefined

// 메서드
obj["sayHello"]();
obj.sayHello();

console.log(obj[name]); // undefined -> name이 변수로 동작하기 때문에 undefined

const key = "name";
console.log(obj[key]); // 뽀로로 -> name과 동일하게 작동 (문자열이 아닌 key를 변수로 인식)

// 객체 변경
obj["name"] = "하티";
console.log(obj);

// 객체 추가
obj["job"] = "FE";
console.log(obj);

// property = 속성
// 객체 삭제
delete obj["job"];
console.log(obj);

// 프로퍼티값이 있는지 확인
// includes랑 비슷한 역할
console.log("company" in obj);
console.log("job" in obj);
