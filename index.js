function getLetterFromGrade(grade) {
  if (grade >= 15) {
    return "A"
  } else if (grade >= 10) {
    return "B"
  } else {
    return "F"
  }
}

console.log(getLetterFromGrade(18))
console.log(getLetterFromGrade(15))
console.log(getLetterFromGrade(13))
console.log(getLetterFromGrade(5))