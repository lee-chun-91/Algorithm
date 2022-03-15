function solution(price, money, count) {  
    var sum_price = 0
    for (i=0; i <= count; i++) {
      //총 이용 금액 산출
      sum_price += price*i
      if (sum_price > money) {
        answer = sum_price - money
      } else {
        answer = 0
      }
      
    }
      return answer;
  }