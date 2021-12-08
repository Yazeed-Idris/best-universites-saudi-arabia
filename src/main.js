const acceptanceScore = 90;

let stdscore = 0;
let highSchoolGpa = 0;
let aptitudeTest = 0;
let achievementTest = 0;

function getUniversityOption() {
    let option = document.getElementById('universityOption');
    return option.options[option.selectedIndex].value;
}

function changeScores() {
    let acceptanceLabel = document.getElementById('acceptanceScore');
    let stdLabel = document.getElementById('calculatedScore');

    acceptanceLabel.innerText = acceptanceScore.toString();
    stdLabel.innerText = stdscore.toString();
}

function calculateScore() {

    highSchoolGpa = parseFloat(document.getElementById('highSchoolGpa').value);
    aptitudeTest = parseFloat(document.getElementById('aptitudeTest').value);
    achievementTest = parseFloat(document.getElementById('achievementTest').value);

    if ((highSchoolGpa & aptitudeTest & achievementTest) >= 0) {
        let universityOption = this.getUniversityOption();

        switch (universityOption){
            case 'imam':
                stdscore = highSchoolGpa * 0.5 + aptitudeTest * 0.3 + achievementTest * 0.2
                break;
            case 'kfupm':
                stdscore = highSchoolGpa * 0.2 + aptitudeTest * 0.3 + achievementTest * 0.5
                break;
            case 'kau':
                stdscore = highSchoolGpa * 0.5 + aptitudeTest * 0.3 + achievementTest * 0.2
                break;
            case 'kaust':
                stdscore = highSchoolGpa * 0.3 + aptitudeTest * 0.2 + achievementTest * 0.5
                break;
            default:
                stdscore = highSchoolGpa * 0.5 + aptitudeTest * 0.3 + achievementTest * 0.2
                break;
        }
    } else {
        stdscore = 0;
    }
    this.changeScores();
}
