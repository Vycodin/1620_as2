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
  save_side_nav(note_title, arrayOfLines)
  remove_Note(evt)
}
function save_side_nav(title, body){
  const list_title = document.createElement('li')
  const list_p = document.createElement('p')
  list_p.innerText = title
  list_title.appendChild(list_p)
  notes_list.appendChild(list_title)
  list_title.addEventListener('click', () =>{
    read_note(list_title,  body)
  })
}
//read note section

const  reading_area = document.querySelector('.read-note-area')

function read_note(evt, body){
  const note_div = document.createElement('div')
  const note_P = document.createElement('p')
  const close_btn = document.createElement('button')
  close_btn.innerHTML = 'X'
  close_btn.className='close_button'
  note_P.innerHTML = body
  reading_area.appendChild(note_div)
  note_div.appendChild(note_P)
  note_div.appendChild(close_btn)
  close_btn.addEventListener('click', () => {close_btn.parentElement.remove()})
}