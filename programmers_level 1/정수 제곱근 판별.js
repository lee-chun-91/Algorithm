function solution(n) {  
    var answer = 0;
    //n의 제곱근을 구하는 함수 Math.sqrt()
    //n의 제곱근이 정수이면 true 를 출력하는 Number.isInteger() 
    if (Number.isInteger(Math.sqrt(n))==true) {
      answer = (Math.sqrt(n)+1) ** 2  // 거듭제곱 **
    }
    else {
      answer = -1
    }
    return answer
  }