console.log("--- label break ---");
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break outer;
    }
    console.log(i, j);
  }
}
//break -> 반복문 종료

console.log("--- label continue ---");
outer2: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      continue outer2;
    }
    console.log(i, j);
  }
}
//continue - 다음 스텝으로 넘어감

//label을 최소화하는 것을 권장
