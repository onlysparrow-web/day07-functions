let studentScore = prompt("Enter the score of student");
function score(studentScore) {
  if (studentScore < 50) {
    output = "student grade is F";
  } else if (studentScore >= 50 && studentScore <= 59) {
    output = "student grade is E";
  } else if (studentScore >= 60 && studentScore <= 69) {
    output = "student grade is D";
  } else if (studentScore >= 70 && studentScore <= 79) {
    output = "student grade is C";
  } else if (studentScore >= 80 && studentScore <= 89) {
    output = "student grade is B";
  } else {
    output = "student grade is A";
  }
  return output;
}
var finalop = score(studentScore);
console.log(finalop);
