
function developerInfo(lastName, firstName, position = 'Розробник') {
    alert(`Прізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}


developerInfo('Яцик', 'Олег');


function userDialog() {
    let name = prompt("Введіть ваше ім'я:");
    if (name) {
        let isEnjoying = confirm("Вам подобається наш готель?");
        if (isEnjoying) {
            alert(`Дякуємо, ${name}! Ми раді, що вам подобається!`);
        } else {
            alert(`Шкода, ${name}. Ми постараємося стати кращими.`);
        }
    }
}

userDialog();


function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert(`Рядки однакової довжини: ${str1} і ${str2}`);
    }
}


compareStrings('Готель', 'Розкішний готель');


document.body.style.backgroundColor = 'lightgreen';
setTimeout(() => {
    document.body.style.backgroundColor = '#f0f8ff';
}, 30000);


setTimeout(() => {
    location.href = 'https://example.com';
}, 10000);


document.getElementById('info').innerHTML = 'Оновлена інформація про наші послуги';
document.querySelectorAll('p').forEach((p, index) => {
    p.textContent += ` (абзац ${index + 1})`;
});


let firstParagraph = document.querySelector('p');
firstParagraph.innerHTML = 'Це оновлений <b>текст</b> абзацу.';
let heading = document.querySelector('h1');
heading.outerHTML = '<h1>Оновлений заголовок сторінки</h1>';


document.write('<p>Це додано за допомогою document.write.</p>');

let newDiv = document.createElement('div');
let newText = document.createTextNode('Це новий div, доданий за допомогою createElement та createTextNode.');
newDiv.appendChild(newText);
document.body.appendChild(newDiv);

let newParagraph = document.createElement('p');
newParagraph.textContent = 'Це новий абзац, доданий за допомогою append.';
document.body.append(newParagraph);

let anotherParagraph = document.createElement('p');
anotherParagraph.textContent = 'Це ще один новий абзац, доданий за допомогою prepend.';
document.body.prepend(anotherParagraph);

let referenceNode = document.querySelector('table');
let insertedParagraph = document.createElement('p');
insertedParagraph.textContent = 'Це новий абзац, доданий за допомогою after.';
referenceNode.after(insertedParagraph);

let replacedParagraph = document.createElement('p');
replacedParagraph.textContent = 'Це абзац, який замінив інший абзац.';
firstParagraph.replaceWith(replacedParagraph);


let lastParagraph = document.querySelector('body p:last-of-type');
lastParagraph.remove(); 