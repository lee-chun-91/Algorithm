function solution(numbers) {
    let answer = [];
    let sum = [];
    // 요소 2개를 선택해 더하는 경우를 모두 구해서, 빈 배열 sum에 그 합을 push 함
    for (i = 0; i < numbers.length - 1; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            sum.push(numbers[i] + numbers[j])
        }
    };
    // 배열 sum 확인
    console.log(sum)
    // 배열 sum에 있는 중복값을 지우기 위해 filter함수로 주어진 조건을 만족하는 요소들만 추출하여 배열 answer에 집어넣음
    // 아래에 주어진 조건 설명
    // val가 처음 나오는 index를 구해서(indexOf() 함수), 그 index값이랑 index랑 같은 경우를 찾아냄
    answer = sum.filter((val, idx) => {
        return sum.indexOf(val) === idx;
    });
    //중복 제거된 배열 answer 를 오름차순으로 정렬
    answer.sort((a, b) => a - b)
    return answer;
}

