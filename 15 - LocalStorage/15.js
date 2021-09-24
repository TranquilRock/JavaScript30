const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
var items = JSON.parse(localStorage.getItem('items')) || [];
function save() {
    localStorage.setItem('items', JSON.stringify(items));
}


function addFood(e) {
    e.preventDefault();// By default submit would redirect the page, hence reload.
    console.log(this);
    let newTAPAS = this.querySelector('[name = item]').value;
    items.push({
        text: newTAPAS,
        done: false,
    });
    updateList();
}


function updateList() {
    itemsList.innerHTML = items.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
    save();
}

document.querySelector('#delete').addEventListener('click', () => {
    items = items.filter((plate) => {
        return !plate.done;
    });
    updateList();
});

document.querySelector('#uncheck').addEventListener('click', () => {
    items.forEach(plate => {
        plate.done = false;
    });
    updateList();
});

window.onload = function () {
    updateList(items);
    addItems.addEventListener('submit', addFood);//This way, this in addFood would be form. Otherwise, it would be window
    itemsList.addEventListener('click', (e) => {
        if (!e.target.matches('input')) return;
        // console.log(e.target);//Label and checkbox will both be called, we only need one.
        //You don't have to handle the element in html
        const index = e.target.dataset.index;
        items[index]['done'] = !items[index]['done'];
        save();
    });
}