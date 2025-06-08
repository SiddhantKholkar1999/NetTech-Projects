let charInput = process.argv[2].toString();

vowelConsonantChecker(charInput);

function vowelConsonantChecker(charInput) {
    switch (charInput) {
        case 'A': case 'a': case 'E': case 'e': case 'I': case 'i': case 'O': case 'o': case 'U': case 'u':
            console.log(charInput,"is a Vowel");
            break;
        default:
            if (charInput.toLowerCase() != charInput.toUpperCase()) {
                console.log(charInput,"is a Consonant");
            } else {
                console.log(charInput,"is not an Alphabet");
            }
    }
}

