function solution(n) {
    //정수를 배열로 바꿈
    var arr = (n+'').split('')
    //배열을 큰것부터 솔트함
    var arr1 = arr.sort((a, b) => b - a)
    //솔트한 배열을 다시 정수로 바꿈
    var answer = Number(arr1.join(''));
      return answer;
  }
  
  