(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    this.noteObj = new Note("Some stuff what i rote");
    this.singleNoteView = new SingleNoteView(this.noteObj);
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

  NoteController.prototype.testHtmlList = function () {
    this.newNote("pray, eat monkey, pray, jump, run");
    this.newNote("pray, eat, eat");
    var joiner = this.noteListView.htmlListCreator();
    return joiner;
  };

  NoteController.prototype.newNote = function (text) {
      var id = this.noteCounter;
      this.noteList.storeNote(new Note(text));
  };

  exports.NoteController = NoteController;

})(this);
