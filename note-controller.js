(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    this.noteObj = new Note("Some stuff what i rote");
    this.singleNoteView = new SingleNoteView(this.noteObj);
    this.noteCounter = 0;
  }

  NoteController.prototype.divCreator = function (divId) {
    var div = document.createElement("div");
    div.setAttribute("id", divId);
    document.body.insertBefore(div, document.body.firstChild);
  };

  NoteController.prototype.divPopulator = function (html, divId) {
    var element = document.getElementById(divId);
    element.innerHTML = html;
  };

  NoteController.prototype.divInit = function () {
    noteController.divCreator("app");
    noteController.divPopulator(noteController.testHtmlList(), "app");
  };

  NoteController.prototype.singleNoteDivInit = function () {
    noteController.divCreator("single");
    noteController.divPopulator(this.singleNoteView.htmlNote(), "single");
  };


  NoteController.prototype.testHtmlList = function () {
    this.newNote("pray, eat monkey, pray, jump, run");
    this.newNote("pray, eat, eat");
    var joiner = this.noteListView.htmlJoiner();
    return joiner;
  };

  NoteController.prototype.idIncrementer = function () {
    this.noteCounter++;
  };

  NoteController.prototype.newNote = function (text) {
    console.log("hello new note");
      var id = this.noteCounter;
      this.idIncrementer();
      this.noteList.storeNote(new Note(text, id));
  };
  function makeTigerLinkClickSayTiger() {
        document
          .getElementById("tiger-link")
          .addEventListener("click", function(clickEvent) {
            clickEvent.preventDefault();
            sayTiger();
          });
      };


  NoteController.prototype.writeNoteFromHtmlForm = function () {
    console.log("hello 1");
    document
    .getElementById("noteText")
    .addEventListener("click", function(clickEvent){
      console.log("hello 2");
      clickEvent.preventDefault();
      this.newNote(document.getElementById("noteText").value);
      console.log("hello 3");
    })
  };

  exports.NoteController = NoteController;

})(this);
