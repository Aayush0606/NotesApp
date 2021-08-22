// shownotes();

// //Select the button element from DOM
// let btnElem = document.getElementById('btnAdd');

// //add event listner on click on button
// btnElem.addEventListener('click', function () {
//     //element to access the textarea input
//     let inputText = document.querySelector('#inputText');
//     let inputTitle=document.querySelector('#inputTitle');

//     //checking local storage for previous entries
//     let notes = localStorage.getItem('notes');
//     let title=localStorage.getItem('title');
//     if (notes == null) {
//         notesObj = [];
//         notesTitleObj = [];
//     }
//     else {
//         notesObj = JSON.parse(notes);
//         notesTitleObj=JSON.parse(title);
//     }

//     console.log(notesObj);
//     console.log(notesTitleObj);

//     // updating local storage and notesObj with new input
//     notesObj.push(inputText.value);
//     notesTitleObj.push(inputTitle.value);
//     localStorage.setItem('notes', JSON.stringify(notesObj));
//     localStorage.setItem('title',JSON.stringify(notesTitleObj));

//     inputText.value = "";
//     inputTitle.value="";
// //     //showing previous notes from local storage
//     shownotes();
// })

// function shownotes() {
//     let notes = localStorage.getItem('notes');
//     let title=localStorage.getItem('title');
//     if (notes == null) {
//         notesObj = [];
//         notesTitleObj = [];
//     }
//     else {
//         notesObj = JSON.parse(notes);
//         notesTitleObj=JSON.parse(title);
//     }
//     let html = "";
//     notesObj.forEach(function (element, index) {
//         html += `<div class="noteCard col mb-4">
//         <div class="card">
//             <div class="card-body" style="height: 13.5rem; overflow: auto; ">
//                 <h5 class="card-title">${notesTitleObj[index]}</h5>
//                 <p class="noteText card-text">${element}</p>
//                 <div class="d-flex justify-content-around flex-column">
//                 <button onclick="editNoteElem(${index})" class="editNode btn btn-primary">Edit Note</button>
//                 <button onclick="delNoteElem(${index})" class="delNode btn btn-primary my-2">Delete Note</button>
//                 </div>
//             </div>
//         </div>
//     </div>`
//     });
//     let cardHolder = document.getElementById('cardHolder');
//     if (notesObj.length != 0) {
//         cardHolder.innerHTML = html;
//     }
//     else {
//         cardHolder.innerHTML = `Enter new notes using "New Note" section above`;
//     }
// }

// function delNoteElem(index) {
//     console.log('bb')
//     let notes = localStorage.getItem('notes');
//     let title= localStorage.getItem('title');
//     let notesObj = JSON.parse(notes);
//     let notesTitleObj=JSON.parse(title);
//     notesObj.splice(index, 1);
//     notesTitleObj.splice(index, 1);
//     localStorage.setItem('notes', JSON.stringify(notesObj));
//     localStorage.setItem('title', JSON.stringify(notesTitleObj));
//     shownotes();
// }


// function editNoteElem(index){
//     let inputText=document.getElementById('inputText');
//     let inputTitle=document.getElementById('inputTitle');
//     inputText.value=document.getElementsByTagName('p')[index].innerHTML;
//     inputTitle.value=document.getElementsByTagName('h5')[index].innerHTML;
//     delNoteElem(index);
// }


// let searchElem = document.getElementById('search');
// searchElem.addEventListener('click', function () {
//     let searchText=document.getElementById('searchText').value;
//     if(searchText==""){
//         return;
//     }
//     else{
//         noteCard =document.getElementsByClassName('noteCard');
//     Array.from(noteCard).forEach(function(element,index){
//         let noteText=document.getElementsByTagName('p')[index].innerHTML;
//         let notesTitle=document.getElementsByTagName('h5')[index].innerHTML;
//         if(!noteText.includes(searchText) && !notesTitle.includes(searchText)){
//             element.style.display = "none";
//         }
//     })
//     }
    
// })

// let searchText=document.getElementById('searchText');
// searchText.addEventListener('click',function(){
//     noteCard =document.getElementsByClassName('noteCard');
//     Array.from(noteCard).forEach(function(element){
//         element.style.display = "block";
//     })
// })

shownotes();
var stringText = "";
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
myMic = document.getElementById("myMic");
myMic.addEventListener("click", function () {
    if(stringText.length){
        stringText+=" ";
    }
    
    // let inputText = document.querySelector("#inputText");
    recognition.onresult=function(event){
        var curr=event.resultIndex;
        var transcript=event.results[curr][0].transcript;
        stringText+=transcript
        document.querySelector("#inputText").value=stringText
        console.log(transcript)
        // inputText.innerHTML=stringText

    }
  recognition.start();
});

//Select the button element from DOM
let btnElem = document.getElementById("btnAdd");

//add event listner on click on button
btnElem.addEventListener("click", function () {
    stringText=""
    
    recognition.stop();
    //element to access the textarea input
    let inputText = document.querySelector("#inputText");
  let inputTitle = document.querySelector("#inputTitle");

  //checking local storage for previous entries
  let notes = localStorage.getItem("notes");
  let title = localStorage.getItem("title");
  if (notes == null) {
    notesObj = [];
    notesTitleObj = [];
  } else {
    notesObj = JSON.parse(notes);
    notesTitleObj = JSON.parse(title);
  }

  console.log(notesObj);
  console.log(notesTitleObj);

  // updating local storage and notesObj with new input
  notesObj.push(inputText.value);
  notesTitleObj.push(inputTitle.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("title", JSON.stringify(notesTitleObj));
  inputText.innerHTML=""
  inputText.value = "";
  inputTitle.value = "";
  //     //showing previous notes from local storage
  shownotes();
});

function shownotes() {
  let notes = localStorage.getItem("notes");
  let title = localStorage.getItem("title");
  if (notes == null) {
    notesObj = [];
    notesTitleObj = [];
  } else {
    notesObj = JSON.parse(notes);
    notesTitleObj = JSON.parse(title);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="noteCard col mb-4">
  <div class="card">
      <div class="card-body" style="height: 13.5rem; overflow: auto; ">
          <h5 class="card-title">${notesTitleObj[index]}</h5>
          <p class="noteText card-text">${element}</p>
          <div class="d-flex justify-content-around flex-column">
          <button onclick="editNoteElem(${index})" class="editNode btn btn-primary">Edit Note</button>
          <button onclick="delNoteElem(${index})" class="delNode btn btn-primary my-2">Delete Note</button>
          <button onclick="speakOut('${element}')" class="speakOut btn btn-primary ">🔊</button>
          </div>
      </div>
  </div>
</div>`;
  });
  let cardHolder = document.getElementById("cardHolder");
  if (notesObj.length != 0) {
    cardHolder.innerHTML = html;
  } else {
    cardHolder.innerHTML = `Enter new notes using "New Note" section above`;
  }
}

function delNoteElem(index) {
  let notes = localStorage.getItem("notes");
  let title = localStorage.getItem("title");
  let notesObj = JSON.parse(notes);
  let notesTitleObj = JSON.parse(title);
  notesObj.splice(index, 1);
  notesTitleObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("title", JSON.stringify(notesTitleObj));
  shownotes();
}

function editNoteElem(index) {
  let inputText = document.getElementById("inputText");
  let inputTitle = document.getElementById("inputTitle");
  inputText.value = document.getElementsByTagName("p")[index].innerHTML;
  inputTitle.value = document.getElementsByTagName("h5")[index].innerHTML;
  delNoteElem(index);
}

let searchElem = document.getElementById("search");
searchElem.addEventListener("click", function () {
  let searchText = document.getElementById("searchText").value;
  if (searchText == "") {
    return;
  } else {
    noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element, index) {
      let noteText = document.getElementsByTagName("p")[index].innerHTML;
      let notesTitle =
        document.getElementsByTagName("h5")[index].innerHTML;
      if (
        !noteText.includes(searchText) &&
        !notesTitle.includes(searchText)
      ) {
        element.style.display = "none";
      }
    });
  }
});

let searchText = document.getElementById("searchText");
searchText.addEventListener("click", function () {
  noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function (element) {
    element.style.display = "block";
  });
});


function speakOut(index){

    const speech=new SpeechSynthesisUtterance;
    speech.text=index;
    speech.pitch=1;
    speech.volume=1;
    window.speechSynthesis.speak(speech)
}