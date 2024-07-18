//객체 메서드

//객체 프로퍼티 키, 벨류, 키 벨류 쌍
const user = {
  name: "hati",
  job: "fe",
  sayHello: function () {
    console.log("Hello world!");
  },
};

console.log(Object.keys(user)); //key 배열 반환
console.log(Object.values(user)); //value 배열 반환 (f = fuction)
console.log(Object.entries(user)); //프로퍼티([key, value]) 쌍으로 반환

console.log("---hasOwnProperty---"); // in과 같은 역할을 함 //객체의 프로퍼티 키가 있는지 없는지를 판별
console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("company"));
//hasOwnProperty : 상속받은 프로퍼티는 찾지 못함

console.log("---for in---");
for (const elem in user) {
  // console.log(key); //프로퍼티의 키값들을 순회
  console.log(elem, user[elem]);
}
