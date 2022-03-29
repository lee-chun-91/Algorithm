function solution(lottos, win_nums) {
    let answer = [];
    let zero = lottos.filter((l, i) => l === 0);
    let cross = lottos.filter(it => win_nums.includes(it))

    if (cross.length + zero.length === 6) {
        answer[0] = 1
    } if (cross.length + zero.length === 5) {
        answer[0] = 2
    } if (cross.length + zero.length === 4) {
        answer[0] = 3
    } if (cross.length + zero.length === 3) {
        answer[0] = 4
    } if (cross.length + zero.length === 2) {
        answer[0] = 5
    } if (cross.length + zero.length === 1 || cross.length + zero.length === 0) {
        answer[0] = 6
    };

    if (cross.length === 6) {
        answer[1] = 1
    } if (cross.length === 5) {
        answer[1] = 2
    } if (cross.length === 4) {
        answer[1] = 3
    } if (cross.length === 3) {
        answer[1] = 4
    } if (cross.length === 2) {
        answer[1] = 5
    } if (cross.length === 1 || cross.length === 0) {
        answer[1] = 6
    };

    return answer;
}