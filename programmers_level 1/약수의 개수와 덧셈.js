function solution(left, right) {
  var answer = 0;
  let count = 0;

  for (let num = left; num <= right; num++) {
    for (let divisor = 1; divisor <= num; divisor++) {
      if (num % divisor === 0) count++;
    }
    if (count % 2 === 0) answer += num;
    else answer -= num;
    count = 0;
  }
  return answer;
}

// 1. left 부터 right 까지 반복문으로 해당 수의 약수 갯수가 짝수/홀수인지 구한다
// 2-1. 해당 수가 짝수이면, answer += 해당 수
// 2-2. 해당 수가 홀수이면, answer -= 해당 수

// 3. answer 출력
