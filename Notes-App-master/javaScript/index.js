

showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function () {

    let addText = document.getElementById('textArea');
    let notes = localStorage.getItem('notes');
    if (addText.value != 0) {

        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addText.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addText.value = ` `;
        console.log(notesObj)
        showNotes();
    }


})
function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="cards">
        <h3>Notes ${index + 1}</h3>
        <p>${element}</p>
        <button id="${index}" onclick="delBtn(this.id)">Delete</button>
        <button id="view">view</button>
        <button id="bookmark">Bookmark</button>
        </div> `

    });

    let notesElm = document.getElementById('notes');
    if (notesElm != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show!`;
    }
}

function delBtn(index) {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('search');
search.addEventListener("input", function () {

    let searchval = search.value;
    let cards = document.getElementsByClassName('cards');
    Array.from(cards).forEach(function(element){
        let cardText = element.getElementsByTagName('p')[0].innerText;

        if(cardText.includes(searchval)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }

    })
  
})