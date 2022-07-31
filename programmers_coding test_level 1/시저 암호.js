function solution(s, n) {
  var answer = "";

  answer = s
    .split("")
    .map((v) => {
      if (v === " ") {
        return " ";
      }
      const tmp = v.charCodeAt();
      return v.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(tmp + n - 26)
        : String.fromCharCode(tmp + n);
    })
    .join("");

  console.log(answer);

  return answer;
}
