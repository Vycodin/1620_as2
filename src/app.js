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
let textarea = "<textarea id='note-textarea'></textarea> <button id='save'>Save</button> <button id='cancel_note'>Cancel</button>"

function addNote(evt){
  writingArea.insertAdjacentHTML('afterbegin', textarea)
  const cancel_btn = document.querySelector('#cancel_note')
  const save =  document.querySelector('#save')
  cancel_btn.addEventListener('click', remove_Note)
  save.addEventListener('click', saveNote)
}

addButton.addEventListener('click', addNote)



//cancel button

function remove_Note(evt){
  while (writingArea.firstChild){
    writingArea.removeChild(writingArea.firstChild)
  }
}

//save button

const notes_list = document.querySelector('.notes-list')

function saveNote(evt){
  const textarea = document.querySelector('textarea')
  arrayOfLines = textarea.value.split('\n')
  note_title = arrayOfLines.shift()
  notes.push({title: note_title, noteBody: arrayOfLines, id:notes.length +1})
  console.log(notes)
  const list_title = document.createElement('li')
  const list_p = document.createElement('p')
  list_p.innerText = note_title
  list_title.appendChild(list_p)
  notes_list.appendChild(list_title)
  list_title.addEventListener('click', () =>{
    read_note(list_title)
  })
  remove_Note(evt)
}

//read note section

const  reading_area = document.querySelector('.read-note-area')

function read_note(evt){
  const note_div = document.createElement('div')
  const note_P = document.createElement('p')
  const close_btn = document.createElement('button')
  read_title = evt.innerText
  console.log(read_title)
  for (const note of notes){
    if (note.title == read_title){
      note_content = note.noteBody
      console.log('bruh')
    }
  }
  close_btn.innerHTML = 'X'
  note_P.innerHTML = note_content
  reading_area.appendChild(note_div)
  note_div.appendChild(note_P)
  note_div.appendChild(close_btn)
  close_btn.addEventListener('click', () => {close_btn.parentElement.remove()})
}