function setActive(icon, answer) {
    const plusPath="./assets/images/icon-plus.svg";
    const minusPath="./assets/images/icon-minus.svg";

    if (icon.classList.contains('active')) {
        icon.classList.remove('active');
        icon.src = plusPath;
    } else {
        icon.classList.add('active');
        icon.src = minusPath;
    }
    answer.classList.toggle('collapse');
}

const questions = document.getElementsByClassName('question-container')
const icons = document.getElementsByClassName('icon');
const answers = document.getElementsByClassName('answer');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => setActive(icons[i], answers[i]));
}