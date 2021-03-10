

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
    question.innerHTML = 'What kind of red wine are you enjoying?';
    button1.innerHTML = 'Big and Bold';
    button2.innerHTML = 'Medium Bodied';
    button3.innerHTML = 'Light and Elegant';
    button1.removeEventListener('click', white);
    button2.removeEventListener('click', red);
    button3.removeEventListener('click', sparkling);
    button1.addEventListener('click', white);
    button2.addEventListener('click', red);
    button3.addEventListener('click', sparkling);
}
function white() {
    question.innerHTML = 'What kind of white wine are you enjoying?';
    button1.innerHTML = 'Oakey or Buttery';
    button2.innerHTML = 'Bright and Refreshing';
    button3.innerHTML = 'Floral or Sweet';
    button1.removeEventListener('click', white);
    button2.removeEventListener('click', red);
    button3.removeEventListener('click', sparkling);
    button1.addEventListener('click', white);
    button2.addEventListener('click', red);
    button3.addEventListener('click', sparkling);
}
function sparkling() {
    question.innerHTML = 'Will you just drink the bubbles nowg?';
    button1.innerHTML = 'Yes';
    button2.innerHTML = 'Bubbles are life';
    button3.innerHTML = 'Is there More?';
    button1.removeEventListener('click', white);
    button2.removeEventListener('click', red);
    button3.removeEventListener('click', sparkling);
    button1.addEventListener('click', white);
    button2.addEventListener('click', red);
    button3.addEventListener('click', sparkling);
}