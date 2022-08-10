"use strict";

// const random1 = Math.floor(Math.random() * 45) + 1; => 1부터 45까지의 랜덤 숫자
// 랜덤한 로또번호 생성 로직
const n = 6;
let lottoarr = new Array(n).fill(0); // 배열길이 6으로 생성

for (let i = 0; i < n; i++) {
  lottoarr[i] = Math.floor(Math.random() * 45) + 1; // i번째에 랜덤한 번호 넣기(범위는 1부터 45까지)
  lottoarr = [...new Set(lottoarr)]; // 중복된 로또번호 제거

  // 중복된 번호가 있다면 undefined값이 들어가기 때문에
  // 배열의 i번째가 undefined라면 그 i번째에 새로운 랜덤한 번호 넣어줌.
  if (lottoarr[i] === undefined) {
    lottoarr[i] = Math.floor(Math.random() * 45) + 1;
  }
}
// 로또 번호가 담긴 배열 오름차순으로 정렬
lottoarr = lottoarr.sort((a, b) => {
  return a - b;
});

console.log(lottoarr);

const number1 = document.getElementById("number1");
number1.innerText = lottoarr[0];
const number2 = document.getElementById("number2");
number2.innerText = lottoarr[1];
const number3 = document.getElementById("number3");
number3.innerText = lottoarr[2];
const number4 = document.getElementById("number4");
number4.innerText = lottoarr[3];
const number5 = document.getElementById("number5");
number5.innerText = lottoarr[4];
const number6 = document.getElementById("number6");
number6.innerText = lottoarr[5];
