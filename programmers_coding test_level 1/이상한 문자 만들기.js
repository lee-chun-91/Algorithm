function solution(s) {
    var words = s.split(' ')
    var answer = ''  
    
    for (i=0; i<words.length; i++) {
      var word = words[i]
      for(j=0; j<word.length; j++) {
        var wordLetter = word.substr(j,1)
        if (j == 0) {
          answer = answer + wordLetter.toUpperCase();
        }
        else if(j % 2 == 0) {
          answer = answer + wordLetter.toUpperCase();
        }
        else {
          answer = answer + wordLetter.toLowerCase();
        }
      }
      answer = answer + ' '
    }
    return answer.substring(0,answer.length-1)
  }