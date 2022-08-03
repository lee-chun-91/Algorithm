function solution(s){
    // 변수 선언
    var answer
    var s_small = s.toLowerCase().split('')
    var p = 0
    var y = 0
    //p, y 나올 때마다 p,y 변수에 1씩 더하기
    for (i=0; i < s_small.length; i++) {
        if (s_small[i] == 'p') {
            p += p + 1
        } else if (s_small[i] == 'y') {
            y += y + 1
        }
    }
    // p,y 가 같으면 true, 아니면 false 출력 (삼항 연산자)
    var answer = (p == y) ? true : false;
    // answer 출력
    return answer;
}