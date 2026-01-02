const content = document.querySelector('.content');
const btnNew = document.querySelector('.add-note');


let dbItems = localStorage.getItem('dbItems')
    ? JSON.parse(localStorage.getItem('dbItems'))
    : [];

const colors = [        // const colors = [
    '#1B9CFC',       //   '#FF7675',
    '#55EFC4',       //   '#FAB1A0',
    '#00CEC9',       //   '#FDCB6E',
    '#74B9FF',       //   '#E84393',
    '#0984E3',       //   '#E17055',
    '#6C5CE7',       //   '#D63031',
];                     // ];


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
        <div class="item" style="background: ${item?.color || randomGradient()}; border-radius: 5%; padding: 0 5px;">
          <span class="remove">X</span>
          <textarea>${item?.text || ''}</textarea>
        </div>`;


    content.appendChild(div);
}

function randomGradient() {
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];

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
                color: dbItems[i]?.color || item.parentElement.style.background,
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
    dbItems = dbItems.filter((item) => item && item.text.trim().length > 0);
    localStorage.setItem('dbItems', JSON.stringify(dbItems));
}

loadItems();