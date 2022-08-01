function solution(board, moves) {
  var answer = 0;
  console.log(board);
  console.log(moves);

  // 담길 배열
  let basketArray = [];

  // moves[0] 이 1이면, board[0][0] ~ board[4][0] 까지 순회하며 0이 아닌 수가 나왔을 때, 그 값을 basketArray[0] 값에 푸쉬

  moves.forEach((v) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][v - 1] > 0) {
        if (basketArray[basketArray.length - 1] === board[i][v - 1]) {
          basketArray.pop();
          answer += 2;
        } else {
          basketArray.push(board[i][v - 1]);
        }
        board[i][v - 1] = 0;
        break;
      }
    }
  });

  return answer;
}

// [문제 회고]
// basket의 원소가 연속으로 같은 경우 두 원소를 제거하고 answer에 2를 더하는 방법을 생각하지 못했다.
