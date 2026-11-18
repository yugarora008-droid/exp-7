const titleInput = document.getElementById("titleInput"); 
const contentInput = document.getElementById("contentInput"); 
const addBtn = document.getElementById("addBtn"); 
const saveBtn = document.getElementById("saveBtn"); 
const notesContainer = document.getElementById("notesContainer"); 
const searchInput = document.getElementById("searchInput"); 
 
let notes = []; 
let editIndex = null; 
 
addBtn.addEventListener("click", function() { 
 
 
    titleInput.value = ""; 
    contentInput.value = ""; 
    editIndex = null; 
 
    saveBtn.innerText = "Save Note"; 
 
}); 
 
saveBtn.addEventListener("click", function() { 
 
    let title = titleInput.value; 
    let content = contentInput.value; 
 
    if (title === "" || content === "") { 
        alert("Please enter title and note"); 
        return; 
    } 
 
    let newNote = { 
        title: title, 
        content: content 
    }; 
 
    if (editIndex === null) { 
 
        notes.push(newNote); 
 
    } else { 
 
        notes[editIndex] = newNote; 
        editIndex = null; 
 
    } 
 
    titleInput.value = ""; 
    contentInput.value = ""; 
 
    saveBtn.innerText = "Save Note"; 
 
    displayNotes(); 
 
}); 
 
function displayNotes() { 
 
    notesContainer.innerHTML = ""; 
 
    let search = searchInput.value.toLowerCase(); 
 
    notes.forEach(function(note, index) { 
 
        if ( 
            note.title.toLowerCase().includes(search) || 
            note.content.toLowerCase().includes(search)  
 
        ) { 
 
            let div = document.createElement("div"); 
            div.className = "col-md-6 col-lg-4"; 
 
            div.innerHTML = ` 
                <div class="note-card"> 
 
                    <h5>${note.title}</h5> 
 
                    <p>${note.content}</p> 
 
                    <button class="btn btn-outline-primary btn-sm" 
                    onclick="editNote(${index})"> 
                        Edit 
                    </button> 
 
                    <button class="btn btn-outline-danger btn-sm" 
                    onclick="deleteNote(${index})"> 
                        Delete 
                    </button> 
 
                </div> 
            `; 
 
            notesContainer.appendChild(div); 
 
        } 
 
    }); 
 
} 
 
function editNote(index) { 
 
    titleInput.value = notes[index].title; 
    contentInput.value = notes[index].content; 
 
    editIndex = index; 
 
    saveBtn.innerText = "Update Note"; 
 
    titleInput.focus(); 
 
} 
 
function deleteNote(index) { 
 
    notes.splice(index, 1); 
 
    if (editIndex === index) { 
        editIndex = null; 
        titleInput.value = ""; 
        contentInput.value = ""; 
        saveBtn.innerText = "Save Note"; 
} 
displayNotes(); 

} 
searchInput.addEventListener("input", displayNotes); 
displayNotes();
