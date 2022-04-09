const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//create note taking buttoon

const addButton = document.querySelector('i')
const writingArea = document.querySelector('.write-note-area')
let textarea = "<textarea id='note-textarea'></textarea><button id='save'>Save</button> <button id='cancel_note'>Cancel</button>"

function addNote(evt){
  writingArea.insertAdjacentHTML('afterbegin', textarea)
  const cancel_btn = document.querySelector('cancel_note')
  const save =  document.querySelector('save')
  cancel_btn.addEventListener('click', remove_Note)
  save.addEventListener('click', saveNote)
}


