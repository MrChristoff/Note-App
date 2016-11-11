(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  }

  NoteListView.prototype.htmlListCreator = function () {
    return ("<ul>" + this.noteListArrayObjectRetriever() + "</ul>");
  };

  NoteListView.prototype.noteListArrayObjectRetriever = function () {
    var noteListObjectArray = this.noteList.noteArray;
    return noteListObjectArray.map(function(noteObject){
      return this.htmlNoteObjectWrapper(noteObject);
    }, this).join("");  //sets the contect for 'this' inside the map function, so outer functions can be called
  };

  NoteListView.prototype.htmlNoteObjectWrapper = function (noteObject) {
    return (("<li><a") + ` href=#notes/${noteObject.id}>` + this.twentyCharacters(noteObject.text) + ("</li></a>"));
  };

  NoteListView.prototype.twentyCharacters = function (string) {
    return string.length > 20 ? string.slice(0, 20) + "..." : string;
  };

  exports.NoteListView = NoteListView;
})(this);
