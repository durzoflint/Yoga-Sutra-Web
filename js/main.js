var chapterNumber = 0;
var chapterLength = 0;
var verserNumber = 0;
var chapters;
var audio = document.getElementById("audio");

function tellMeMore() {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function pause() {
    audio.pause();
}

function repeat() {
    audio.loop = true;
}

function recite() {
    var index = (chapterNumber + 1) + "." + (verserNumber + 1) + " ";
    var name = index + "C.mp3";

    audio.pause();
    audio.src = "audio/"+name;
    audio.play();
}

function teachMe() {
    var index = (chapterNumber + 1) + "." + (verserNumber + 1) + " ";
    var name = index + "A.mp3";

    audio.pause();
    audio.src = "audio/"+name;
    audio.play();
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

    //Todo: Add explanation to modal
    var four = document.getElementById("four");
    four.innerHTML = "";
    var explanation = verseNode[verserNumber].getElementsByTagName("explanation");
    for (var i = 0; i < explanation.length; i++) {
        four.innerHTML = four.innerHTML + explanation[i].innerHTML + "<br><br>";
    }

    audio.loop = false;
    pause();
}

function initialise(xml) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml.responseText, "text/xml");
    chapters = xmlDoc.getElementsByTagName("chapters");
    load();
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
        initialise(this);
    }
};
xhttp.open("GET", "data.xml", true);
xhttp.send();