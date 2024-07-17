//BigInt
// -> 큰 정수를 나타내는 인수형 / 정수형표현만 가능
// bigInt끼리는 연산이 가능하지만, bigInt와 숫자는 연산불가능
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let bigNum1 = 123456n; //숫자에 n을 붙임
console.log(typeof bigNum1);

//bigint 연산
console.log(5n / 2n); //2n
//console.log(5n / 2); //BigInt와 다른타입의 연산은 불가능
console.log(5n / BigInt(2));

//bigInt 변환시 주의사항
console.log(BigInt("9007199254740992"));
console.log(BigInt("9007199254740993"));
console.log(BigInt("9007199254740994"));
console.log(BigInt("9007199254740995"));
//""를 이용하여 문자열로 안전하게 변환헤야함
