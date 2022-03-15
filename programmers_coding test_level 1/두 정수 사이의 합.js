function solution(a, b) {
    var sum = 0
    //a보다 b가 크면 a값부터 b값까지 정수를 sum에 합함
    if(a < b) {
      for (i = a; i <= b; i++) {
      sum += i
      } 
    }
    //b보다 a가 크면 b값부터 a값까지 정수를 sum에 합함
    else 
      for (i = b; i <= a; i++) {
      sum += i
      } 
    // sum을 반환
    return sum;
}