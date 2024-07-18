// switch

/*
switch (표현식) {
    case 값1:
        //값1에 대한 실행코드
    case 값2:
        //값2에 대한 실행코드
    // ...
    default:
        //모든 case에 일치하지 않는 경우 실행할 코드
}
*/

let name = "뽀로로";

switch (name) {
  case "뽀로로":
    console.log("관리자입니다.");
  case "펭수":
    console.log("매니저입니다.");
  case "루피":
    console.log("사용자입니다.");
  default:
    console.log("일치하지 않습니다.");
}

const today = new Date();
// new Date().getDay() -> 요일 정보를 가져올 수 있음
// 0 일요일, 1 월요일, 2 화요일, ..., 6 토요일
console.log("오늘은: ", today.getDay());

switch (today.getDay()) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  case 0:
    console.log("일요일");
    break;
  default:
    console.log("무슨 요일인지 모름");
}
