let grade = process.argv[2];

gradeChecker(grade);

function gradeChecker(grade) {
    switch (grade) {
        case 'A':
            console.log("Grade ",grade," : Excellent");
            break;
        case 'B':
            console.log("Grade ",grade," : Good");
            break;
        case 'C':
            console.log("Grade ",grade," : Average");
            break;
        case 'D':
            console.log("Grade ",grade," : Poor");
            break;
        case 'F':
            console.log("Grade ",grade," : Fail");
            break;
        default:
            console.log("Invalid Grade");
    }
}

