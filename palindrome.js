var input = ("my name's jEff");
var realName = input.replace(/[&\/\\#,+()$~%.'":*?<>{}/\s]/g, '').toLowerCase();
var name = realName.split("").reverse().join("")

if(name === realName) {
    console.log('\"' + input + '\"'  + ' is a palindrome')
}
else {
    console.log(input + ' is not a palindrome')
} 
    

