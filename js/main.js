var chapterNumber = 0;
var chapterLength = 0;
var verserNumber = 0;
var chapters;

function recite() {
    //var fileName = "1.1 C.mp3";
    var index = (chapterNumber + 1) + "." + (verserNumber + 1) + " ";
    var sourceFiles = "";
    /*for (var i = 65; i <= 90; i++) {
        var name = index + String.fromCharCode(i) + ".mp3";
        sourceFiles = sourceFiles + "<source src=\"audio/" + name + "\" type=\"audio/mpeg\">" + "\n";
    }*/
    var name = index + "A.mp3";
    sourceFiles = "<source src=\"audio/" + name + "\" type=\"audio/mpeg\">";

    //Todo: put the creation in load initialise part. The make sure the audio element plays one audio at a time
    var x = document.createElement("AUDIO");
    x.innerHTML = sourceFiles;
    x.play();
}

function next() {
    if (verserNumber < chapterLength)
        verserNumber = verserNumber + 1;
    load();
}

function previous() {
    if (verserNumber > 0)
        verserNumber = verserNumber - 1;
    load();
}

function switchChapter(number) {
    verserNumber = 0;
    chapterNumber = number - 1;
    load();
}

function load() {
    var node = chapters[chapterNumber];
    var verseNode = node.getElementsByTagName("chapter_X20_" + (chapterNumber + 1));
    chapterLength = verseNode.length;
    var verse = verseNode[verserNumber].getElementsByTagName("verse")[0];
    document.getElementById("one").innerText = verse.innerHTML;
    var verse = verseNode[verserNumber].getElementsByTagName("translation")[0];
    document.getElementById("two").innerText = verse.innerHTML;
    var verse = verseNode[verserNumber].getElementsByTagName("meaning")[0];
    document.getElementById("three").innerText = verse.innerHTML;
}

function initialise(xml) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml.responseText, "text/xml");
    chapters = xmlDoc.getElementsByTagName("chapters");
    load();
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            initialise(this);
        }
    };
    xhttp.open("GET", "data.xml", true);
    xhttp.send();
}