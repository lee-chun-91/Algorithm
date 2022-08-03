function solution(new_id) {
  var answer = "";

  let step1 = new_id.toLowerCase();
  let step2 = step1.replace(/[^\w-_.]*/g, ""); // [^문자] 는 괄호안의 문자 제외

  let step3 = step2.replace(/\.{2,}/g, ".");
  let step4 = step3.replace(/^\.|\.$/g, "");
  let step5 = step4.replace(/^$/g, "a");
  let step6;

  if (step5.length > 15) {
    step6 = step5.slice(0, 15).replace(/\.$/g, "");
  } else step6 = step5;

  let step7;

  if (step6.length < 3) {
    let addWord = step6.charAt(step6.length - 1);
    step7 = step6 + addWord.repeat(3 - step6.length);
  } else step7 = step6;

  answer = step7;

  return answer;
}

// 2단계
// 정규표현식 검색 패턴
// 1) [^문자] 는 [] 안에 있는 문자를 제외한다는 의미이다.

// 정규표현식 매칭 패턴
// 1) \w 는 밑줄 문자를 포함한 영숫자 문자에 대응하는 값으로 [A-Za-z0-9_] 와 동일하다.
// 2) \w 뒤에 -._ 을 순서대로 넣었는데, 이스케이핑(\)이 앞에 붙어있어서 그런지,
//    해당 기호들도 표현식에서 잘 인식하고 제외한다.
// 3) * 은 전부를 의미한다. [] 안에 있는 문자를 제외한 모든 것

// 정규식 플래그
// 1) g 는 문자열 내의 모든 패턴을 검색한다는 의미이다.

// 3단계
// 정규표현식 갯수(수량) 반복 패턴
// {Min, } 은 최소 Min 개 이상을 의미한다.

// 4단계
// 정규표현식 검색 패턴
// ^문자열 은 특정 문자열로 시작을 의미한다.
// 문자열$ 은 특정 문자열로 끝남을 의미한다.

// 5단계
// 정규 표현식 검색 패턴
// ^$ 은 빈 문자열을 의미한다.
// 시작과 끝남 사이에 들어가있는 문자열이 없기 때문이다
