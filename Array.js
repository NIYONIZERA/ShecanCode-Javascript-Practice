const scores = [40, 50, 80, 90, 35, 60];
const checkScores = (score) => {
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum += scores[i];
    }
    console.log(`The sum of all score is:${sum}`);
    let average = sum / score.length;
    console.log(`The average of scores is: ${average}`)
    if (average >= 50) {
        console.log("Performance is good")
    }
    else {
        console.log("Improvement is needed")
    }

}

checkScores(scores);
