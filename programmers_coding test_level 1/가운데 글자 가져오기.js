function solution(s) {
  // mid 객체에 Math.floor() 메소드를 사용하여 글자수의 중간값(홀수인 경우 중간값-0.5)을 구함
  // Math.floor()메소드는 인수로 전달받은 값과 같거나 작은 수 중에서 가장 큰 정수를 반환함.
  const mid = Math.floor(s.length/2);
  // s.length 가 홀수인 경우, 가운데 글자 s[mid] 출력
  // s.length 가 짝수인 경우, 가운데 두글자 s[mid-1]+s[mid] 출력
  return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}