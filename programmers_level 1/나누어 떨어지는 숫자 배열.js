function solution(arr, divisor) {
    var answer = [];
    //arr[i] 를 divisor 으로 나눠, 나머지가 없는 경우 이 수를 따로 배열에 추가
    for (i=0; i<arr.length; i++) {
      if(arr[i] % divisor === 0) {
        answer.push(arr[i]);
      } else {
      }
    }
    //오름차순 정렬. sort()는 문자열 비교를 하게 되므로, 숫자정렬 함수 넣어줘야 함
    //answer.length 값이 0이면 answer에 -1을 push()해 줌
    answer.length !== 0 ? answer.sort(function(a,b){return a-b}) : answer.push(-1);
    
    //answer 반환
    return answer;
  }