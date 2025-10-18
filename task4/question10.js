function emailValidation(mail){
    if(mail.includes(".com") && mail.includes("@")){
        return true
    }
    else{
        return false
    }
}
console.log(emailValidation("test@example.com"))
console.log(emailValidation("invalid.email.com"))
console.log(emailValidation("user@domain"))