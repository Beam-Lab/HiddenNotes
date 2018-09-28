$(document).ready(function () {

    LoadTextNotes();

});

$("#addtextnote").click(function () {

    var noteName = "note" + (localStorage.length + 1);

    var note = { title: $("#title").val(), content: $("#content").val() };

    localStorage.setItem(noteName, JSON.stringify(note));

    LoadTextNotes();
});

function LoadTextNotes() {

    $("#notesList").empty();

    for (var i = 0; i < localStorage.length; i++) {
        var note = JSON.parse(localStorage.getItem(localStorage.key(i)));

        $("#notesList").append("<li>Title: " + note.title + " - Content: " + note.content + "</li>");
    }
}

$("#removeAllNotes").click(function () {

    localStorage.clear();

    LoadTextNotes();
});