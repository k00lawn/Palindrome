
function pal(input) {
    
    var realName = input.toString().replace(/[&\/\\#,+()$~%.'":*?<>{}/\s]/g, '').toLowerCase();
    var name = realName.split("").reverse().join("");

    if(name === realName) {
        return console.log('\"' + input + '\"'  + ' is a palindrome')
    }
    else {
        return console.log(input + ' is not a palindrome')
    } 
}

console.log(pal('Hello World'));

//Outputs not a palindrome
