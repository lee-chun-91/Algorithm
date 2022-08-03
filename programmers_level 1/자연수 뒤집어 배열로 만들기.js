function solution(n) {
    //숫자를 문자로 변환 toString()
    //문자를 배열로 변환 split('')
    //배열의 요소를 숫자로 변환 map(str => parseInt(str))
    //배열 순서 뒤집기 reverse()
    var answer = n.toString().split('').map(str => parseInt(str)).reverse()
    return answer
}