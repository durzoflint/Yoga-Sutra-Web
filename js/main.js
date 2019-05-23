var chapterNumber = 0;
var chapterLength = 0;
var verserNumber = 0;
var chapters;
var currentMode = "not_set";
var prevAudio = "";
var prevMode = "";
var fireRecite = document.getElementsByClassName("fire-recite")[0];
var fireTeachMe = document.getElementsByClassName("fire-teach-me")[0];
var fireTellMeMore = document.getElementsByClassName("fire-tell-me-more")[0];
var fireBack = document.getElementsByClassName("fire-back")[0];
var prevChapIntroStyle;

var audio = document.getElementById("audio");
audio.onended = function() {
    if (currentMode == "recite" || currentMode == "teachMe")
        next();
};

var slider = document.getElementById("slider");
slider.oninput = function() {
    audio.volume = (this.value)/100;
}

function showIntro() {
    audio.pause();
    audio.src = "audio/ABHERI_1.mp3";
    audio.play();

    var introDiv = document.getElementById("intro");
    introDiv.style.display = "block";
    var introText = document.getElementById("intro-text");
    introText.style.display = "none";
    setTimeout(function () {
        $("#om").fadeOut(1000, function() {
            $("#project-title").fadeIn(1000, function() {
                setTimeout(function () {
                    $("#project-title").fadeOut(1000, function() {
                        $("#intro-text").fadeIn(1000, function() {
                            setTimeout(function () {
                                $("#intro-text").fadeOut(1000, function() {
                                    introDiv.style.display = "none";
                                    showChapterList();
                                });
                            }, 5000);
                        });
                    });
                }, 5000);
            });
        });
    }, 5000);
}

function showChapterList() {
    var buttonsDiv = document.getElementById("buttons");
    buttonsDiv.style.display = "none";

    var chapterListDiv = document.getElementById("chapter-list");
    chapterListDiv.style.display = "block";
}

function selectChapter(number) {
    var chapterListDiv = document.getElementById("chapter-list");
    chapterListDiv.style.display = "none";
    var playerDiv = document.getElementById("player");
    player.style.display = "block";
    switchChapter(number);
}

function tellMeMore() {
    prevMode = currentMode;
    currentMode = "tellMeMore";
    fireTellMeMore.style.display = "block";
    fireBack.style.display = "block";
    fireRecite.style.display = "none";
    fireTeachMe.style.display = "none";

    prevAudio = audio.src;
    audio.pause();
    audio.src = "audio/HINDOLA_4.mp3";
    audio.play();

    var chapterIntro = document.getElementsByClassName('chapter-intro')[0];
    chapterIntro.style.display = "none";
    var centerFull = document.getElementsByClassName('center_full')[0];
    centerFull.style.display = "block";
    var centerTop = document.getElementsByClassName('center_top')[0];
    centerTop.style.display = "none";
    var centerBottom = document.getElementsByClassName('center_bottom')[0];
    centerBottom.style.display = "none";

    var fig25 = document.getElementsByClassName('fig25')[0];
    fig25.style.display = "none";
    var fig33 = document.getElementsByClassName('fig33')[0];
    fig33.style.display = "none";
    var fig34 = document.getElementsByClassName('fig34')[0];
    fig34.style.display = "none";
    var fig29 = document.getElementsByClassName('fig29')[0];
    fig29.style.display = "none";
    var fig30 = document.getElementsByClassName('fig30')[0];
    fig30.style.display = "none";
    var fig32 = document.getElementsByClassName('fig32')[0];
    fig32.style.display = "none";
    var fig35 = document.getElementsByClassName('fig35')[0];
    fig35.style.display = "none";
    var fig31 = document.getElementsByClassName('fig31')[0];
    fig31.style.display = "none";

    var tellMeMoreBack = document.getElementsByClassName('tell-me-more-back')[0];
    tellMeMoreBack.style.display = "block";

    var tellMeMoreBackButton = document.getElementsByClassName('tell-me-more-back-button')[0];
    tellMeMoreBackButton.style.display = "block";
}

function backFromTellMeMore() {
    fireTellMeMore.style.display = "none";
    fireBack.style.display = "none";
    currentMode = prevMode;
    if (currentMode == "recite")
        fireRecite.style.display = "block";
    else
        fireTeachMe.style.display = "block";

    audio.pause();
    audio.src = prevAudio;
    audio.play();

    var centerFull = document.getElementsByClassName('center_full')[0];
    centerFull.style.display = "none";
    var centerTop = document.getElementsByClassName('center_top')[0];
    centerTop.style.display = "block";
    var centerBottom = document.getElementsByClassName('center_bottom')[0];
    centerBottom.style.display = "block";

    var fig25 = document.getElementsByClassName('fig25')[0];
    fig25.style.display = "block";
    var fig33 = document.getElementsByClassName('fig33')[0];
    fig33.style.display = "block";
    var fig34 = document.getElementsByClassName('fig34')[0];
    fig34.style.display = "block";
    var fig29 = document.getElementsByClassName('fig29')[0];
    fig29.style.display = "block";
    var fig30 = document.getElementsByClassName('fig30')[0];
    fig30.style.display = "block";
    var fig32 = document.getElementsByClassName('fig32')[0];
    fig32.style.display = "block";
    var fig35 = document.getElementsByClassName('fig35')[0];
    fig35.style.display = "block";
    var fig31 = document.getElementsByClassName('fig31')[0];
    fig31.style.display = "block";

    var tellMeMoreBack = document.getElementsByClassName('tell-me-more-back')[0];
    tellMeMoreBack.style.display = "none";

    var tellMeMoreBackButton = document.getElementsByClassName('tell-me-more-back-button')[0];
    tellMeMoreBackButton.style.display = "none";

    var oneP = document.getElementById('one');
    if(oneP.innerText == "Sutra") {
        currentMode = "not_set";
        fireRecite.style.display = "none";
        fireTeachMe.style.display = "none";
        fireTellMeMore.style.display = "none";
        fireBack.style.display = "none";
        showContent();
    }
}

function pause() {
    audio.pause();
    document.getElementsByClassName("fig30")[0].style.display = "none";
    document.getElementsByClassName("audio-resume")[0].style.display = "block";
}

function resume() {
    audio.play();
    document.getElementsByClassName("fig30")[0].style.display = "block";
    document.getElementsByClassName("audio-resume")[0].style.display = "none";
}

function repeat() {
    audio.loop = true;
}

function recite() {
    if (currentMode == "not_set") {
        currentMode = "recite";
        fireRecite.style.display = "block";
        fireTeachMe.style.display = "none";
        fireTellMeMore.style.display = "none";
        showContent();
    } else if (currentMode == "tellMeMore") {
        backFromTellMeMore();
        return;
    }
    currentMode = "recite";
    fireRecite.style.display = "block";
    fireTeachMe.style.display = "none";
    fireTellMeMore.style.display = "none";

    var index = (chapterNumber + 1) + "." + (verserNumber + 1) + " ";
    var name = index + "B.mp3";

    audio.pause();
    audio.src = "audio/"+name;
    audio.play();
}

function teachMe() {
    if (currentMode == "not_set") {
        currentMode = "teachMe";
        fireTeachMe.style.display = "block";
        fireRecite.style.display = "none";
        fireTellMeMore.style.display = "none";
        showContent();
    } else if (currentMode == "tellMeMore") {
        backFromTellMeMore();
        return;
    }
    currentMode = "teachMe";
    fireTeachMe.style.display = "block";
    fireRecite.style.display = "none";
    fireTellMeMore.style.display = "none";

    var index = (chapterNumber + 1) + "." + (verserNumber + 1) + " ";
    var name = index + "A.mp3";

    audio.pause();
    audio.src = "audio/"+name;
    console.log(name);
    audio.play();
}

function next() {
    if (chapterLength == 0)
        return;

    if (verserNumber < chapterLength - 1) {
        verserNumber = verserNumber + 1;
        console.log("Chapter Number: " + (chapterNumber+1) + "\nVerse Number: " + (verserNumber + 1));
        load();
    } else {
        switchChapter(chapterNumber+1 + 1);
        console.log("Chapter Changed\nChapter Number: " + (chapterNumber+1) + "\nVerse Number: " + (verserNumber + 1));
    }
}

function previous() {
    if (chapterLength == 0)
        return;

    if (verserNumber > 0) {
        verserNumber = verserNumber - 1;
        load();
    } else {
        if (chapterNumber > 0)
            switchChapter(chapterNumber+1 - 1);
    }
}

function switchChapter(number) {
    if (number > 0) {
        verserNumber = 0;
        chapterNumber = number - 1;
        document.getElementsByClassName("fire-chap1")[0].style.display = "none";
        document.getElementsByClassName("fire-chap2")[0].style.display = "none";
        document.getElementsByClassName("fire-chap3")[0].style.display = "none";
        document.getElementsByClassName("fire-chap4")[0].style.display = "none";

        document.getElementsByClassName("fire-chap"+number)[0].style.display = "block";

        var headerDiv = document.getElementsByClassName("header")[0];
        headerDiv.style.display = "block";
        var leftDiv = document.getElementsByClassName("left")[0];
        leftDiv.style.display = "block";
        var rightDiv = document.getElementsByClassName("right")[0];
        rightDiv.style.display = "block";

        if (prevChapIntroStyle == "none") {
            var centerTopDiv = document.getElementsByClassName("center_top")[0];
            centerTopDiv.style.display = "block";
            var centerBottomDiv = document.getElementsByClassName("center_bottom")[0];
            centerBottomDiv.style.display = "block";
        }

        var fig25 = document.getElementsByClassName('fig25')[0];
        fig25.style.display = "block";
        var fig33 = document.getElementsByClassName('fig33')[0];
        fig33.style.display = "block";
        var fig34 = document.getElementsByClassName('fig34')[0];
        fig34.style.display = "block";
        var fig29 = document.getElementsByClassName('fig29')[0];
        fig29.style.display = "block";
        var fig30 = document.getElementsByClassName('fig30')[0];
        fig30.style.display = "block";
        var fig32 = document.getElementsByClassName('fig32')[0];
        fig32.style.display = "block";
        var fig35 = document.getElementsByClassName('fig35')[0];
        fig35.style.display = "block";
        var fig31 = document.getElementsByClassName('fig31')[0];
        fig31.style.display = "block";

        var chapterIntroDiv = document.getElementsByClassName("chapter-intro")[0];
        chapterIntroDiv.style.display = prevChapIntroStyle

        loadIntro(number);
    }
}

function loadIntro(number) {
    audio.pause();
    audio.src = "audio/ARABHI_2.mp3";
    audio.play();

    currentMode = "not_set";
    fireTeachMe.style.display = "none";
    fireRecite.style.display = "none";
    fireTellMeMore.style.display = "none";
    fireBack.style.display = "none";

    var chapterIntroDiv = document.getElementsByClassName("chapter-intro")[0];
    chapterIntroDiv.style.display = "block";
    var centerTop = document.getElementsByClassName("center_top")[0];
    centerTop.style.display = "none";
    var centerBottom = document.getElementsByClassName("center_bottom")[0];
    centerBottom.style.display = "none";

    var introP = document.getElementById("chapter-intro-text");
    if (number == 1)
        introP.innerText = "In the first chapter Yoga is defined and some of obstacles to achieve Yoga are enumerated. A couple of classifications are brought into attention and various kinds of samadhi are briefly explained. The classical Sanskrit definition of Yoga as Yogacittavrittinirodha is translated by Swami SatyanandaSaraswati (1989, p. 35) as: 'To block the patterns/ modifications of consciousness is yoga'. Swami Vishnu-Devananda (1999, p. 140) translates the same sutra as: 'Yoga is restraining the activities of the mind'. The above definitions are quite similar for the fact that cittavritti means both pattern of consciousness and activity of the mind. Furthermore, YS enumerates the five-fold kinds of vrittis/ cittavrittis, namely pramana, viparyaya, vikalpa, nidra and smriti, giving their definitions in following sutras as correct knowledge, incorrect knowledge, imagination, sleep and memory respectively. The two essential qualities for success in Yoga are mentioned to be abhyasa, constant practice and vairagya, detachment from the material experience seen more in its inner aspect. The issue of cittavrittis becomes fundamental for the fact that by controlling, blocking or restraining the cittavrittis the state of yoga is achieved through samadhi in its various aspects as experience of awareness.\n\nVarious kinds of samadhi (Lit. 'union with the Lord') are mentioned. However there are only two categories of samadhi viz. sabija ('with seed') and nirbija ('without seed'). Sabijasamadhi in its own turn is of six kinds viz. samprajnata, asamprajnata, savitarka, nirvitarka, savicara, nirvicara depending on the object of experience of awareness. Chapter I ends up in sutra 51 by clarifying that seedless awareness (nirbijasamadhi) is obtained by blocking of all cittavrittis.";
    else if (number == 2)
        introP.innerText = "Chapter II known as Sadhanapada focuses on the practice (sadhana) itself, the obstacles (kleshas) to the practice and various fruits of practices. The first six parts (out of eight) of yoga discipline are presented along with their fruits. The five kleshas are of utmost importance as they are seen as obstacles/ afflictions binding down the human being for not attaining its potential that of union (Yoga) with the Divine known as Ishvara. The five obstacles are avidya ('ignorance'), asmita ('the I-feeling or Egoism'), raga ('attachment/ passion'), dvesha ('anger/ aversion'), abhinivesha ('will to live/ clinging to life'). Furthermore the chapter presents the methodology of how to gradually remove these obstacles and other theoretical considerations of the Yogic practice. The last part of this chapter presents the paths/ steps of Raja Yoga.\n\nThe first step known as yamas, largely translated as moral codes of conduct is of five kinds viz. ahimsa ('non-violence'), satya ('truthfulness'), asteya ('non-stealing'), brahmacarya ('continence'), aparigraha ('lack of greed'). The five niyamas as inner disciplines are presented as being shauca ('purity' - both physical and mental), santosha ('contentment'), tapas ('austerity'), svadhyaya ('study'), ishvarapranidhana ('devotion to God'). The chapter ends us with the presentation of steps three to six of the eight-fold paths as being asana, pranayama, pratyahara i.e. 'posture', 'regulation of the breath' and 'withdrawal of sense experience' respectively.";
    else if (number == 3)
        introP.innerText = "Chapter III clarifies the last two limbs of Yoga path as being dhyana ('meditation') and samadhi ('awareness') and introduces the notion of samyama in sutra 4 as being the simultaneous practice of the last three Yoga limbs i.e. dharana, dhyana and samadhi. The notion of samyama becomes fundamental for the fact that all vibhutis known also in yoga as siddhis the supra-normal abilities are subject to the practice of samyama. The chapter goes much in details on what could be obtained by practicing samyama on various objects, ideas, phenomena, etc. These powers vibhutis / siddhis are of great variety like the knowledge of the future, of previous births, of other's mind, of solar system, of stars, etc. It also states how invisibility could be achieved, levitation or conquest of nature (prakriti) itself. Most of leading yoga teachers do agree that these unusual abilities are not to be taken per se as the defiance of the laws of physics by a yogi but they have to be seen as powers of the mind for the fact that the mind can stretch anywhere. Yoga itself is seen as the empowering of the mind, the mind being deeply analysed in chapter IV.";
    else if (number == 4)
        introP.innerText = "Chapter IV clarifies the issue of liberation (kaivalya) and how this could be achieved by the mind. Vasanas known also as samskaras are to be seen as subtle mental forms or subtle mental impressions becoming resident in the mind as latent potentialities having karmic effects. They accumulate and give rise to the will to live (abhinivesha) as one of the five kleshas. These Vasanas will disappear through the elimination of four factors namely hetu ('cause'), phala ('effect'), ashraya ('support of an experience') and alambana ('object of an experience') (ref. sutra 11), therefore citta ('higher mind') becomes pure and capable to reflect both the drashta ('observer/ witness') and the drishya ('what is seen/ observed'). This chapter ends up in sutra 34 by defining liberation (kaivalya) itself: 'Kaivalya is that state in which the gunas ('qualities') merge in their cause, having no longer a purpose in relation to purusha ('Pure Consciousness'). The Soul is established in its true nature, which is Pure Consciousness.'";
    else
        showCredits();
}

function showExitPrompt() {
    audio.pause();

    var headerDiv = document.getElementsByClassName("header")[0];
    headerDiv.style.display = "none";
    var leftDiv = document.getElementsByClassName("left")[0];
    leftDiv.style.display = "none";
    var rightDiv = document.getElementsByClassName("right")[0];
    rightDiv.style.display = "none";

    var centerTopDiv = document.getElementsByClassName("center_top")[0];
    centerTopDiv.style.display = "none";
    var centerBottomDiv = document.getElementsByClassName("center_bottom")[0];
    centerBottomDiv.style.display = "none";

    var fig25 = document.getElementsByClassName('fig25')[0];
    fig25.style.display = "none";
    var fig33 = document.getElementsByClassName('fig33')[0];
    fig33.style.display = "none";
    var fig34 = document.getElementsByClassName('fig34')[0];
    fig34.style.display = "none";
    var fig29 = document.getElementsByClassName('fig29')[0];
    fig29.style.display = "none";
    var fig30 = document.getElementsByClassName('fig30')[0];
    fig30.style.display = "none";
    var fig32 = document.getElementsByClassName('fig32')[0];
    fig32.style.display = "none";
    var fig35 = document.getElementsByClassName('fig35')[0];
    fig35.style.display = "none";
    var fig31 = document.getElementsByClassName('fig31')[0];
    fig31.style.display = "none";

    var chapterIntroDiv = document.getElementsByClassName("chapter-intro")[0];
    prevChapIntroStyle = chapterIntroDiv.style.display;
    chapterIntroDiv.style.display = "none";
    document.getElementsByClassName("exit-prompt")[0].style.display = "block";
}

function exitYes() {
    showCredits();
}

function exitNo() {
    audio.play();

    var headerDiv = document.getElementsByClassName("header")[0];
    headerDiv.style.display = "block";
    var leftDiv = document.getElementsByClassName("left")[0];
    leftDiv.style.display = "block";
    var rightDiv = document.getElementsByClassName("right")[0];
    rightDiv.style.display = "block";

    if (prevChapIntroStyle == "none") {
        var centerTopDiv = document.getElementsByClassName("center_top")[0];
        centerTopDiv.style.display = "block";
        var centerBottomDiv = document.getElementsByClassName("center_bottom")[0];
        centerBottomDiv.style.display = "block";
    }

    var fig25 = document.getElementsByClassName('fig25')[0];
    fig25.style.display = "block";
    var fig33 = document.getElementsByClassName('fig33')[0];
    fig33.style.display = "block";
    var fig34 = document.getElementsByClassName('fig34')[0];
    fig34.style.display = "block";
    var fig29 = document.getElementsByClassName('fig29')[0];
    fig29.style.display = "block";
    var fig30 = document.getElementsByClassName('fig30')[0];
    fig30.style.display = "block";
    var fig32 = document.getElementsByClassName('fig32')[0];
    fig32.style.display = "block";
    var fig35 = document.getElementsByClassName('fig35')[0];
    fig35.style.display = "block";
    var fig31 = document.getElementsByClassName('fig31')[0];
    fig31.style.display = "block";

    var chapterIntroDiv = document.getElementsByClassName("chapter-intro")[0];
    chapterIntroDiv.style.display = prevChapIntroStyle
    document.getElementsByClassName("exit-prompt")[0].style.display = "none";
}

function showCredits() {
    audio.pause();
    audio.src = "audio/GHANA RAGA_3.mp3";
    audio.play();

    document.getElementsByClassName("exit-prompt")[0].style.display = "none";

    var creditsDiv = document.getElementById("credits");
    creditsDiv.style.display = "block";
    $("#credits").animate({top: '-2400px'}, 40000, function(){
        showButtons();
    });
}

function showButtons() {
    var creditsDiv = document.getElementById("credits");
    creditsDiv.style.display = "none";

    var buttonsDiv = document.getElementById("buttons");
    buttonsDiv.style.display = "block";
}

function showContent() {
    var chapterIntroDiv = document.getElementsByClassName("chapter-intro")[0];
    chapterIntroDiv.style.display = "none";
    var centerTop = document.getElementsByClassName("center_top")[0];
    centerTop.style.display = "block";
    var centerBottom = document.getElementsByClassName("center_bottom")[0];
    centerBottom.style.display = "block";

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

    var four = document.getElementById("four");
    four.innerHTML = "";
    var explanation = verseNode[verserNumber].getElementsByTagName("explanation");
    for (var i = 0; i < explanation.length; i++) {
        four.innerHTML = four.innerHTML + explanation[i].innerHTML + "<br><br>";
    }

    audio.loop = false;
    audio.pause();
    if (currentMode == "teachMe")
        teachMe();
    else
        recite();
}

function initialise(xml) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml.responseText, "text/xml");
    chapters = xmlDoc.getElementsByTagName("chapters");
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
        initialise(this);
    }
};
xhttp.open("GET", "data.xml", true);
xhttp.send();