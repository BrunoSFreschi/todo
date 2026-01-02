const content = document.querySelector('.content');
const btnNew = document.querySelector('.add-note');


let dbItems = localStorage.getItem('dbItems')
    ? JSON.parse(localStorage.getItem('dbItems'))
    : [];

const colors = [
    '#845EC2',
    '#008F7A',
    '#008E9B',
    '#FFC75F',
    '#FF8066',
    '#BA3CAF',
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

function loadItems() {
    content.innerHTML = '';
    verifyNulls();

    dbItems.forEach((item, i) => {
        addHTML(item, i);
    });

    addEvents();
}

btnNew.onclick = () => {
    addHTML();

    addEvents();
};

function addHTML(item) {
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="item" style="background: ${item?.color || randomGradient()}">
          <span class="remove">X</span>
          <textarea>${item?.text || ''}</textarea>
        </div>`;


    content.appendChild(div);
}

function randomGradient() {
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    let color2 = colors[Math.floor(Math.random() * colors.length)];

    // garante que as cores sejam diferentes
    while (color1 === color2) {
        color2 = colors[Math.floor(Math.random() * colors.length)];
    }

    return `linear-gradient(135deg, ${color1}, ${color2})`;
}

function addEvents() {
    const notes = document.querySelectorAll('.item textarea');
    const remove = document.querySelectorAll('.item .remove');

    notes.forEach((item, i) => {
        item.oninput = () => {
            dbItems[i] = {
                text: item.value,
                color: dbItems[i]?.color || item.parentElement.style.backgroundColor,
            };

            localStorage.setItem('dbItems', JSON.stringify(dbItems));
        };
    });

    remove.forEach((item, i) => {
        item.onclick = () => {
            content.children[i].remove();
            if (dbItems[i]) {
                dbItems.splice(i, 1);
                localStorage.setItem('dbItems', JSON.stringify(dbItems));
            }
            addEvents();
        };
    });
}

function verifyNulls() {
    dbItems = dbItems.filter((item) => item);
    localStorage.setItem('dbItems', JSON.stringify(dbItems));
}

loadItems();