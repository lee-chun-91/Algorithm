function solution(s) {
    // s 길이가 4 또는 6
    //parseInt() 를 통해 정수를 숫자로 바꾸고, 그걸 s 랑 비교해서 같으면 s가 모두 숫자라는 거!
    return (s.length === 4|| s.length === 6)&& s == parseInt(s)
}