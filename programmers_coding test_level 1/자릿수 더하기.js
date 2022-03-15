function solution(n) {
    var answer = 0;
    //숫자 문자로 변환
    var nStr = n.toString()
    //console.log(nStr)
    //문자를 배열로 변환
    var nStr_arr = nStr.split('')
    //배열의 요소를 숫자로 변환
    var nStr_arr_number = nStr_arr.map(str => Number(str))
    //console.log(nStr_arr_number)
    
    //answer 에 자리수 숫자를 더하는 reduce 문
    return nStr_arr_number.reduce((acc, cur) => acc + cur, 0);
}

