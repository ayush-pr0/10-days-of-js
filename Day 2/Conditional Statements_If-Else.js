function getGrade(score) {
    let grade;
    // Write your code here
    const scores = [0, 5, 10, 15, 20, 25, 30];
    const grades = ['F','E','D','C','B','A'];
    
    for(let i = 0; i < scores.length; i++){
        if(score<=scores[i+1] && score>scores[i]){
            grade = grades[i]
        }
    }
    return grade;
}