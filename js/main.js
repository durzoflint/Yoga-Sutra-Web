var chapterNumber = 0;
var chapterLength = 0;
var verserNumber = 0;
var chapters;

function recite() {
    var fileName = "1.1 A.mp3";

    var x = document.getElementById("audio");
    x.innerHTML = "<source src=\"audio/" + fileName + "\" type=\"audio/mpeg\">";
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

function myFunction(xml) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml.responseText, "text/xml");
    var chapters = xmlDoc.getElementsByTagName("chapters");
    for(var i = 0;i < chapters.length; i++) {
        var node = chapters[i];
        var verseNode = node.getElementsByTagName("chapter_X20_" + (i+1));
        
        for(var j = 0; j<verseNode.length; j++) {
            var verse = verseNode[j].getElementsByTagName("verse")[0];
            console.log(verse.innerHTML);
        }
    }
}