function vowelsAndConsonants(s) {
    var vowels = "aeiou";
    var consonants = "";
    
    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else {
            consonants += s[i];
        }
    }
    
    // Print consonants after all vowels
    for (var j = 0; j < consonants.length; j++) {
        console.log(consonants[j]);
    }
}
