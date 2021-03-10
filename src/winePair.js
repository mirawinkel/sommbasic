

function winePair() {
    question.innerHTML = 'What kind of wine are you enjoying?';
    button1.innerHTML = 'White';
    button2.innerHTML = 'Red';
    button3.innerHTML = 'Sparkling';
    button1.removeEventListener('click', foodPair);
    button2.removeEventListener('click', winePair);
    button3.removeEventListener('click', lifePair);
    button1.addEventListener('click', white);
    button2.addEventListener('click', red);
    button3.addEventListener('click', sparkling);
}
function red() {
    question.innerHTML = 'What kind of wine are you enjoying?';
    button1.innerHTML = 'White';
    button2.innerHTML = 'Red';
    button3.innerHTML = 'Sparkling';
    button1.removeEventListener('click', foodPair);
    button2.removeEventListener('click', winePair);
    button3.removeEventListener('click', lifePair);
    button1.addEventListener('click', white);
    button2.addEventListener('click', red);
    button3.addEventListener('click', sparkling);
}