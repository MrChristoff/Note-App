function storesTextOnCreation(){
  var note = new Note("text")
  if (note.textReturn() == "text") {
    console.log("storesTextOnCreation")
  } else {
    console.log("false")
  }
};

function noteListStoresNote() {
  var note = new Note("text");
  var noteList = new NoteList();
  noteList.storeNote(note)
  if (noteList.noteArray[0].text == "text") {
    console.log("noteListStoresNote")
  } else {
    console.log("false")
  }
};

function noteListReturnsStringArray() {
  var note = new Note("harry potter");
  var noteList = new NoteList();
  noteList.storeNote(note);
  if (noteList.stringArray() == noteList.noteArray[0].text) {
    console.log("noteListReturnsStringArray")
  } else {
    console.log("false")
  }
};


function ViewReturnHTMLstring() {
  var note = new Note("hi chris");
  var note2 = new Note("hi rory");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.storeNote(note);
  noteList.storeNote(note2);
  if (noteListView.htmlJoiner() == "<ul><li><div>hi chris</li></div><li><div>hi rory</li></div></ul>") {
    console.log("ViewReturnHTMLstring")
  } else {
    console.log("false")
  }
};

function singleNoteViewReturnsHTML() {
  var note = new Note("harry potter");
  singleNoteView = new SingleNoteView(note);
  if (singleNoteView.htmlNote() == "<div>harry potter</div>") {
    console.log("singleNoteViewReturnsHTML")
  } else {
    console.log("false")
  }
};

function assignUniqueIdToNote() {
  var note1 = new Note("text")
  if (note1.id == 6) {
    console.log("assignUniqueIdToNote");
  } else {
    console.log("false")
  }
};


storesTextOnCreation();
noteListStoresNote();
noteListReturnsStringArray();
ViewReturnHTMLstring();
singleNoteViewReturnsHTML();
assignUniqueIdToNote();
