(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  }

  NoteListView.prototype.htmlListCreator = function () {
    return ("<ul>" + this.noteListArrayObjectRetriever() + "</ul>");
  };

  NoteListView.prototype.noteListArrayObjectRetriever = function () {
    var noteListObjectArray = this.noteList.noteArray;
    var resultArray = noteListObjectArray.map(function(noteObject){
      return this.htmlNoteObjectWrapper(noteObject);
    }, this);  //sets the contect for 'this' inside the map function, so outer functions can be called
    return resultArray.join("");
  };

  NoteListView.prototype.htmlNoteObjectWrapper = function (noteObject) {
    return (("<li><a") + ` href=${noteObject.id}>` + this.twentyCharacters(noteObject.text) + ("</li></a>"));
  };

  NoteListView.prototype.twentyCharacters = function (string) {
    return string.length > 20 ? string.slice(0, 20) + "..." : string;
  };

  exports.NoteListView = NoteListView;
})(this);
