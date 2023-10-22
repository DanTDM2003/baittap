const dragItems = document.querySelectorAll('.accordion');
let dragItem = null;

function makeVisible(id) {
    var slug = document.getElementById(id).nextElementSibling;
    slug.classList.toggle('appear');
}

document.querySelectorAll(".news").forEach((element) => {
    element.addEventListener("click", changeColor); 
});

function changeColor(e) {
    if (this.nextElementSibling.classList.length > 1) {
        this.style.backgroundColor = "#ff893b";
        this.childNodes[1].classList.toggle("active");
    } else {
        this.style.backgroundColor = "#fdba8d";
        this.childNodes[1].classList.toggle("active");
    }
}

document.querySelector('.blank').addEventListener('dragstart', dragStart);
document.querySelector('.blank').addEventListener('dragover', dragOver);
document.querySelector('.blank').addEventListener('drop', dragDrop);
document.querySelector('.blank').addEventListener('dragenter', dragEnter);
document.querySelector('.blank').addEventListener('dragleave', dragLeave);
document.querySelector('.blank').addEventListener('dragend', dragEnd);

dragItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
    dragItem = this;
    setTimeout(() => {
        dragItem.style.display = 'none';
    }, 0);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
}

function dragLeave() {
    this.classList.remove('drag-over');
}

function dragDrop() {
    this.classList.remove('drag-over');
    this.parentNode.insertBefore(dragItem, this);
}

function dragEnd() {
    this.style.display = 'block';
    dragItems.forEach(item => {
        item.classList.remove('drag-over');
    });
}