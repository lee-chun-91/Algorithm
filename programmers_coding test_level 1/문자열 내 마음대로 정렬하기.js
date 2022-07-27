function solution(strings, n) {
  var answer = [];
  answer = strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
  });
  return answer;
}

// strings 를 sort 하는건데
// 기준은 문자열.split("")[n] 값을 모두 구해서
// 그 값을 전체를 두고 비교하는 것
// 문자열 비교는 비교 연산자 ( < > ) 을 통해서 하는데, ASC2 값을 비교하여 결과를 리턴
// 사전순인데, 앞에 나오는 애가 더 작은 값입니다.

//sort 는 return 값이 양수이면 작성한 파라미터 2개의 순서를 뒤집어 정렬하고,
//        return 값이 음수이면 작성한 파라미터 2개를 순서대로 정렬하고,
//        return 값이 0이면, a와 b의 순서를 변경하지 않습니다.
