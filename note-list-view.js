(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  }

  NoteListView.prototype.htmlListCreator = function () {
    return ("<ul>" + this.noteListArrayMapper() + "</ul>");
  };

  NoteListView.prototype.noteListArrayMapper = function () {
    var stringArr = this.noteList.stringArray();
    var resultArray = stringArr.map(function(string) {
      return this.htmlWrapper(string);
    }, this) //sets the contect for 'this' inside the map function, so outer functions can be called
    return resultArray.join("");
  };

  NoteListView.prototype.htmlWrapper = function (string) {
    return (("<li><div>") + this.twentyCharacters(string) + ("</li></div>"));
  };

  NoteListView.prototype.twentyCharacters = function (string) {
    return string.length > 20 ? string.slice(0, 20) + "..." : string;
  };

  exports.NoteListView = NoteListView;
})(this);
