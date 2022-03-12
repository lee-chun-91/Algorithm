function solution(a, b, c) {
    var week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var day = new Date(a, b-1, c);
    var answer = week[day.getDay()];
    return answer;
}