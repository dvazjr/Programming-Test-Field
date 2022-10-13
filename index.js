function isPasswordValid(password) {
  password = password.trim()
  if (password.length >= 10) {
    return true 
  } else {
    return false
  }
}

console.log(isPasswordValid(" 12345678 ")) 
//result w 10 characters including spaces is false because we trimmed the pw
//with our code