

function main() {
    question.innerHTML = 'What style of main dish are you enjoying?';
    button1.innerHTML = 'Meats';
    button2.innerHTML = 'Veggies';
    button3.innerHTML = 'Pasta';
    button1.addEventListener('click', meat);
    button2.addEventListener('click', veggie);
    button3.addEventListener('click', pasta);
}

function meat() {
    question.innerHTML = 'What type of protein are you enjoying?';
    button1.innerHTML = 'Surf';
    button2.innerHTML = 'Terf';
    button3.innerHTML = 'Poultry';
    button1.addEventListener('click', surf);
    button2.addEventListener('click', terf);
    button3.addEventListener('click', poultry);
}

function veggie() {
    question.innerHTML = 'What style of vegetables are you enjoying?';
    button1.innerHTML = 'Meats';
    button2.innerHTML = 'Veggies';
    button3.innerHTML = 'Cheeses';
    button1.addEventListener('click', meat);
    button2.addEventListener('click', veggie);
    button3.addEventListener('click', cheese);
}

function cheese() {
    question.innerHTML = 'What style of cheese are you enjoying?';
    button1.innerHTML = 'Creamy';
    button2.innerHTML = 'Hard';
    button3.innerHTML = 'Blue';
    button1.addEventListener('click', creamyCheese);
    button2.addEventListener('click', hardCheese);
    button3.addEventListener('click', blueCheese);
}

function foodPair() {
    question.innerHTML = 'What kind of food would you like to pair your wine with?';
    button1.innerHTML = 'Appetizers';
    button2.innerHTML = 'Main Course';
    button3.innerHTML = 'Desserts';
    button1.removeEventListener('click', foodPair);
    button2.removeEventListener('click', winePair);
    button3.removeEventListener('click', lifePair);
    button1.addEventListener('click', apps);
    button2.addEventListener('click', main);
    button3.addEventListener('click', dessert);
}
function apps() {

}
function dessert() {
    
}
function winePair() {

}

function lifePair() {

}