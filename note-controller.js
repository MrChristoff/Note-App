

(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    // this.noteObj = new Note("Stuff what I did rote");
    // this.singleNoteView = new SingleNoteView(this.noteObj);
  }

  NoteController.prototype.divCreator = function (divId) {
    var newDiv = document.createElement("newDiv");
    newDiv.setAttribute("id", divId);
    document.body.insertBefore(newDiv, document.body.firstChild);
  };

  NoteController.prototype.divPopulator = function (html, divId) {
    var element = document.getElementById(divId);
    element.innerHTML = html;
  };

  NoteController.prototype.divInitializer = function (html, divId) {
    noteController.divCreator(divId);
    noteController.divPopulator(html, divId);
  };

  NoteController.prototype.newNote = function (text) {
      this.noteList.storeNote(new Note(text));
  };

NoteController.prototype.newNoteEventListener = function () {
  document.get
  window.addEventListener('click', this.submitNewNote())
};

NoteController.prototype.displayNoteSelectedFromList = function () {

};

NoteController.prototype.submitNewNote = function (text) {
  this.newNote(text)
};

// test setup - to be deleted
NoteController.prototype.testHtmlList = function () {
  this.newNote("Blah blah, blah blah blah blah, blah blah");
  this.newNote("Blah blah, blah blah blah blah, blah blah");
  this.newNote("Blah blah, blah blah blah blah, blah blah");
  this.newNote("Short, note");
  var joiner = this.noteListView.htmlListCreator();
  return joiner;
};

  exports.NoteController = NoteController;

})(this);
