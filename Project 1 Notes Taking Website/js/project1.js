console.log("We are at Project 1");
showNotes();

// If User Adds a Note, it is added to the localStorage.

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', add);


// Function to add the note and title to out localStorage
function add(e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if (notes == null){
        notesObj = [];
    } 
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push([addTxt.value, addTitle.value]);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
    showNotes();
};

// Function to Show Notes in the Card inside Show Notes section by fetching them from localStorage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html=``;
    notesObj.forEach(function(element, index) {
        html += `
        <div class="card mx-2 my-2 noteCard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element[1]}</h5>
                <p class="card-text">${element[0]}</p>
                <button  onclick="deleteNote(this.id)" class="btn btn-primary" id="${index}">Delete Note</button>
            </div>
        </div>
        `;  
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show. Use "Add a Note" section above to add a Note.`
    }

}

// Function to Delete the Note
function deleteNote(index) {
    // console.log("Deleted");
    let notes = localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input' ,function (e) {
   let inputVal = searchTxt.value.toLowerCase();
   let noteCard = document.getElementsByClassName('noteCard');
   Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.toLowerCase().includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none"
        }
   });
});

 
/* 
More Features:-
1. Add a Note Title.
2. Mark a Note as Important 
3. Separate notes by User
4. Sync and Host to a Web Server
*/
