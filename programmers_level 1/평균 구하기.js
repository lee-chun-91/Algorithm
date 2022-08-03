function solution(arr) {
    var answer = 0;
    let sumarr = 0;

    for (let i = 0; i <arr.length; i++) {
      sumarr += arr[i];
    }
    return answer = sumarr / arr.length;
}

