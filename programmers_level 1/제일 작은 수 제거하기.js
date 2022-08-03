function solution(arr) {
    var answer = [];
    if (arr.length == 1) {
        answer = [-1]
    } else {
            //  arr 배열 복사 
        var copy = arr.slice()
        //  arr배열을 오름차순하는 copy1 배열을 만듦.
        var copy1 = copy.sort(function(a,b) {
          return a-b
        })
        //에서 가장 작은 값 하나 추출
        var small = copy1[0]
        //arr에서 small 만 추출해서 뺌
        arr.splice(arr.indexOf(small),1) 
        //answer 에 arr 초기화
        answer = arr
    }
    
    return answer
}