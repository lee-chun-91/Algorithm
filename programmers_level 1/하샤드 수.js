function solution(x) {
    var answer = true;
    //toString() 문자열로 바꾸기 
    // split('') 문자열 배열로 바꾸기 
    //자연수 a,b를 reduce로 더하기 반복문 
    var sum = x.toString().split('').reduce((a, b) => +a + +b, 0)
    //x를 sum으로 나눈 나머지가 0이면 true
    if (x % sum == 0) {
      answer = true
    } 
    //아니면 false 
    else {
      answer = false
    }
    return answer;
}