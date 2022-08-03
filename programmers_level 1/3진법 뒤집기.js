function solution(n) {
    var answer = 0;
    // Number.prototype.toString() 메소드 : Number 인스턴스의 값을 해당하는 진법의 문자열로 반환
    // String.prototype.split() 메소드 : String 인스턴스를 구분자(separator)를 기준으로 나눈 후, 나뉜 문자열을 하나의 배열로 반환
    // Array.prototype.reverse() 메소드 : 배열 요소의 순서를 전부 반대로 교체
    // Array.prototype.join() 메소드 : 배열의 모든 요소를 하나의 문자열로 반환
    var arr = n.toString(3).split("").reverse().join("")
    // Number.parseInt() 메소드 또는 전역함수 parseInt()
    // : 문자열을 파싱하여, 문자열에 포함된 숫자 부분을 특정 진법의 정수 형태로 반환
    var answer = parseInt(arr,3)
    return answer;
}