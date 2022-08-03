function solution(a, b) {
    var answer = null
    for (i=0; i <a.length; i++){
        answer += a[i]*b[i]
    }
    return answer;
}