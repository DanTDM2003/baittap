const dragProducts = document.querySelectorAll('.product-name');
const lists = document.querySelectorAll(".list");

lists.forEach(list => {
    console.log(list);
    list.addEventListener('dragover', dragOver);
    list.addEventListener('dragenter', dragEnter);
    list.addEventListener('dragleave', dragLeave);
    list.addEventListener('drop', dragDropProduct);
});

dragProducts.forEach(item => {
    item.addEventListener('dragstart', dragStart1);
    item.addEventListener('dragend', dragEndProduct);
});

function dragStart1(e) {
    dragItem = this;
    setTimeout(() => {
        dragItem.style.display = 'none';
    }, 0);
}

function dragEndProduct() {
    this.style.display = 'flex';
    dragItems.forEach(item => {
        item.classList.remove('drag-over');
    });
    document.getElementById(previousList).addEventListener('dragover', dragOver1);
}

function dragDropProduct() {
    this.classList.remove('drag-over');
    this.lastElementChild.appendChild(dragItem);
}