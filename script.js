let addNoteBtn = document.getElementById("btnAddNote");
addNoteBtn.addEventListener("click", (e) => {
  let text = document.getElementById("text");
  let notes = localStorage.getItem("note");
  if (text.value.length === 0) {
    alert("Please type something");
  } else {
    if (notes == null) {
      newNote = [];
    } else {
      newNote = JSON.parse(notes);
    }
  }
  newNote.push(text.value);
  text.value = "";
  localStorage.setItem("note", JSON.stringify(newNote));
  console.log(newNote);
  displayNotes();
});

const displayNotes = () => {
  let notes = localStorage.getItem("note");
  if (notes == null) {
    newNote = [];
  } else {
    newNote = JSON.parse(notes);
  }
  let body = "";
  newNote.forEach((element, index) => {
    body += `
        <div class="notes-sec">
           <div class="text-sec">
             <h4><i class="fa-solid fa-book-open"></i> Note ${index + 1}</h4>
             <p>${element}</p>
           </div>
           <div class="btn-sec">
             <button id=${index} onclick="removeNotes(this.id)">
               <i class="fa-solid fa-trash"></i> 
             </button>
           </div>
        </div>
        `;
  });
  let cont = document.getElementById("noteCont");
  if (notes.length != 0) {
    cont.innerHTML = body;
  }
};

const removeNotes = (index) => {
  console.log(`i am removing ${index}`);
  let notes = localStorage.getItem("note");
  if (notes == null) {
    newNote = [];
  } else {
    newNote = JSON.parse(notes);
  }
  newNote.splice(index, 1);
  localStorage.setItem("note", JSON.stringify(newNote));
  displayNotes();
};
const removeAll = () => {
  let message = confirm("This will permanently delete all notes do you agree?");

  if (message == true) {
    localStorage.clear();
    location.reload();
  }
};

//darkMode
let switchMode = document.getElementById("switchMode");
switchMode.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    switchMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  } else {
    switchMode.innerHTML = `<i class="fa-solid fa-sun">`;
  }
});