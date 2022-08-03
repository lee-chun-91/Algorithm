function solution(answers) {
  var answer = [];
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let collect = [0, 0, 0];

  for (i = 0; i <= answers.length; i++) {
    if (arr1[i % 5] === answers[i]) collect[0]++;
    if (arr2[i % 8] === answers[i]) collect[1]++;
    if (arr3[i % 10] === answers[i]) collect[2]++;
  }
  const max = Math.max(...collect);
  let best = collect.indexOf(max);
  while (best != -1) {
    answer.push(best + 1);
    best = collect.indexOf(max, best + 1);
  }

  return answer;
}
