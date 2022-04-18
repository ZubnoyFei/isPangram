
<!--Напишите функцию isPangram, которое принимает в себя строку и возвращает логическое значение -->

function isPangram(string) {
    string=string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
        return string.indexOf(x) !== -1;
    })
}


console.log(isPangram("The quick brown fox jumps over the lazy dog"))