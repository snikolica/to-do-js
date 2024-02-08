const input = document.querySelector('.input');
const btn = document.querySelector('button');

const liContainer = document.querySelector('.list-container')

btn.addEventListener('click', function () {
    if (input.value === "") {
        alert('You must write something!')
        save();
    } else {
        let li = document.createElement('LI');
        li.innerHTML = input.value;
        liContainer.appendChild(li);
        let span = document.createElement('SPAN');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
        save();
    }
    input.value = "";
})

liContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        save();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        save();
    }
})

function save() {
    localStorage.setItem('data', liContainer.innerHTML)
}

function showLists() {
    liContainer.innerHTML = localStorage.getItem('data')
}
showLists();