function solution(arr) {
    var answer = [];
    //반복문
    for (let i=0; i < arr.length; i++) {
        if(arr[i] !== arr[i+1]) { //arr[i] 와 arr[i+1] 값이 같지 않으면 arr[i] 값을 answer 배열에 추가
        answer.push(arr[i]);
        }
    }
    return answer; //answer 출력
}