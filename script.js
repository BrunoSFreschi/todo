const content = document.querySelector('.content');
const btnNew = document.querySelector('.add-note');


let dbItems = localStorage.getItem('dbItem')
  ? JSON.parse(localStorage.getItem('dbItem'))
  : [];


const colors = [
  "#845EC2",
  "#008F7A",
  "#008E9B",
  "#FFC75F",
  "#FF8066",
  "#BA3CAF",
];


const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

btnNew.onclick = () => {
    addHtml();
    addEvents();
};

function loadItems() {
    content.innerHTML = '';
    verifyNulls();

    dbItems.forEach((item, i) => {
        addHtml(item, i);
    });

    addEvents();
}

function addHtml(item) {
    const div = document.createElement('div');

    div.innerHTML = `<div class="item" style="background-color: ${
        item?.color || randomColor()}">
        <span class="remove">X</span>
        <textarea>${item?.text || ""}</textarea>
    </div>`;

    content.appendChild(div);
}

function addEvents() {
    const notes = document.querySelectorAll('.item textearea');
    const remove = document.querySelectorAll('.item .remove');

    notes.forEach((item, i) => {
        item.oninput = () => {
            dbItems[i] = {
                text: item.value,
                color: dbItems[i]?.color || item.parentElement.style.backgroundColor,
            };

            localStorage.setItem('dbItem', JSON.stringify(dbItems));
        };
    });

    remove.forEach((item, i) => {
        item.onclick = () => {
            dbItems.splice(i, 1);
            localStorage.setItem('dbItem', JSON.stringify(dbItems));
            loadItems();
        };
        addEvents();
    });
}