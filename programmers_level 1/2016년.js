function solution(a, b) {
    var week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var day = new Date(2016, a-1, b);
    var answer = week[day.getDay()];
    return answer;
}