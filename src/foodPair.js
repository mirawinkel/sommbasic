

function main() {
    question.innerHTML = 'What style of main dish are you enjoying?';
    button1.innerHTML = 'Meats';
    button2.innerHTML = 'Veggies';
    button3.innerHTML = 'Pasta';
    button1.removeEventListener('click', apps);
    button2.removeEventListener('click', main);
    button3.removeEventListener('click', dessert);
    button1.addEventListener('click', meat);
    button2.addEventListener('click', veggie);
    button3.addEventListener('click', pasta);
}

function meat() {
    question.innerHTML = 'What type of protein are you enjoying?';
    button1.innerHTML = 'Surf';
    button2.innerHTML = 'Terf';
    button3.innerHTML = 'Poultry';
    button1.removeEventListener('click', meat);
    button2.removeEventListener('click', veggie);
    button3.removeEventListener('click', pasta);
    button1.addEventListener('click', surf);
    button2.addEventListener('click', terf);
    button3.addEventListener('click', poultry);
}

function veggie() {
    question.innerHTML = 'What style of vegetables are you enjoying?';
    button1.innerHTML = 'Root Veggies';
    button2.innerHTML = 'Green Veggies';
    button3.innerHTML = 'Squash';
    button1.removeEventListener('click', meat);
    button2.removeEventListener('click', veggie);
    button3.removeEventListener('click', pasta);
    button1.addEventListener('click', root);
    button2.addEventListener('click', green);
    button3.addEventListener('click', squash);
}

function pasta() {
    question.innerHTML = 'What style of pasta are you enjoying?';
    button1.innerHTML = 'Red Sauce';
    button2.innerHTML = 'White Sauce';
    button3.innerHTML = 'Something Else';
    button1.removeEventListener('click', meat);
    button2.removeEventListener('click', veggie);
    button3.removeEventListener('click', pasta);
    button1.addEventListener('click', redPasta);
    button2.addEventListener('click', whitePasta);
    button3.addEventListener('click', otherPasta);
}
function apps() {
    question.innerHTML = 'What style of appetizer are you enjoying?';
    button1.innerHTML = 'Fried';
    button2.innerHTML = 'Chilled';
    button3.innerHTML = 'Warm';
    button1.removeEventListener('click', apps);
    button2.removeEventListener('click', main);
    button3.removeEventListener('click', dessert);
    button1.addEventListener('click', fried);
    button2.addEventListener('click', chilled);
    button3.addEventListener('click', warm);
}

function dessert() {
    question.innerHTML = 'What style of dessert are you enjoying?';
    button1.innerHTML = 'Fruit Focused';
    button2.innerHTML = 'Rich and Intense';
    button3.innerHTML = 'Cheeses';
    button1.removeEventListener('click', apps);
    button2.removeEventListener('click', main);
    button3.removeEventListener('click', dessert);
    button1.addEventListener('click', meat);
    button2.addEventListener('click', veggie);
    button3.addEventListener('click', pasta);
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
