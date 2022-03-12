function solution(num) {
    var answer = 0;

    for (var i = 0; i < 500; i++) {
      //num이 1이 아니라면 아래 조건으로 반복
          if (num != 1) {
               num = num % 2 == 0 ? num / 2 : num * 3 + 1;
          } else { //num이 1이라면 answer 에 i를 출력
              return answer = i;
          }
    }

    //500번을 반복했는데 num에 1이 안나오면 1을 반환
    return answer = -1;
}