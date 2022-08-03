function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    // 비트 or 연산
    // | 은 대응되는 비트 중 하나라도 1이면 1을 반환한다
    let row = (arr1[i] | arr2[i]).toString(2);
    // row 를 6자리 비트로 표현하기 위해 모양을 맞춰준다
    row = "0".repeat(n - row.length) + row;
    // 삼항연산자 앞 조건문이 falsy 인 값이면 : 뒤에 있는 값이 출력된다
    // 여기선 a 는 문자열, 문자열 앞에 + 를 붙여서 숫자로 형변환 시킨다
    // 0은 falsy 한 값이고, 1은 trusy 한 값이다
    row = row.replace(/[10]/g, (a) => (+a ? "#" : " "));
    answer.push(row);
  }

  return answer;
}
