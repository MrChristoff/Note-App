var noteController = new NoteController();
noteController.divInitializer(noteController.testHtmlList(), "list")
// noteController.divInitializer(noteController.singleNoteView.htmlNote(), "single")
noteController.divInitializer(noteController.noteList.noteArray[0].text, "test")
// noteController.divInitializer(new SingleNoteView(noteController.noteList.noteArray[3]), "test2")
