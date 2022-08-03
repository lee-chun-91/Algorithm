function solution(numbers) {
    var sum = 0
    for (i = 0; i <10; i++) {
    // numbers 에 없는 숫자를 찾는다
        if(!numbers.includes(i)) {
        //없는 숫자를 sum 에 합한다
        sum += i;
      }   
    }
    return sum;
  }