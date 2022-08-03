function solution(sizes) {
    // 가로 세로 중 큰 값을 가로로 변환
    const rotated = sizes.map(([w,h]) => w<h ? [h,w] : [w,h]);
    let maxSize = [0,0];
    // rotated 함수의 각 [w,h] 별로 반복문 수행
    // maxSize 요소에 반복문 결과값 초기화
    rotated.forEach(([w,h]) => {
      if (w > maxSize[0]) maxSize[0] = w;
      if (h > maxSize[1]) maxSize[1] = h;
    })
    //maxSize 요소별 곱해서 지갑 사이즈 뽑아냄
    return maxSize[0]*maxSize[1]
}