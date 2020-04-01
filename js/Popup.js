var clickmeimg; 
var clickdatatjejimg;
var clickumuimg;
var clickbcuimg;
var clickwarwickimg;
var clickskillsimg;

var modalme;
var modaldatatjej;
var modalumu;
var modalbcu;    
var modalwarwick;
var modalskills;

var spanme;
var spandatatjej;
var spanumu;
var spanbcu; 
var spanwarwick; 
var spanskills; 



window.onload = function(){
    // Get the button that opens the modal
    clickmeimg = this.document.getElementById("me");
    clickdatatjejimg = document.getElementById("datatjej");
    clickumuimg = document.getElementById("umu");
    clickbcuimg = document.getElementById("bcu");
    clickwarwickimg = document.getElementById("warwick");
    clickskillsimg = document.getElementById("skills");
    
    // Get the modal
    modalme = document.getElementById("myModalme");
    modaldatatjej = document.getElementById("myModaldatatjej");
    modalumu = document.getElementById("myModalumu");
    modalbcu = document.getElementById("myModalbcu");
    modalwarwick = document.getElementById("myModalwarwick");
    modalskills = document.getElementById("myModalskills");

    // Get the <span> element that closes the modal
    spanme = document.getElementsByClassName("closeme")[0];
    spandatatjej = document.getElementsByClassName("closedatatjej")[0];
    spanumu = document.getElementsByClassName("closeumu")[0];
    spanbcu = document.getElementsByClassName("closebcu")[0];
    spanwarwick = document.getElementsByClassName("closewarwick")[0];
    spanskills = document.getElementsByClassName("closeskills")[0];

    //When the user clicks the button, open the modal 
    clickmeimg.onclick = function () {
        modalme.style.display = "block"; 
    }
    clickdatatjejimg.onclick = function () {
        modaldatatjej.style.display = "block"; 
    }
    
    clickumuimg.onclick = function () {
        modalumu.style.display = "block";
    }
    
    clickbcuimg.onclick = function () {
        modalbcu.style.display = "block";
    }
    
    clickwarwickimg.onclick = function () {
        modalwarwick.style.display = "block";
    }
    this.clickskillsimg.onclick = function () {
        modalskills.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spanme.onclick = function () {
        modalme.style.display = "none";
    }
    spandatatjej.onclick = function () {
        modaldatatjej.style.display = "none";
    }
    spanumu.onclick = function () {
        modalumu.style.display = "none";
    }
    spanbcu.onclick = function () {
        modalbcu.style.display = "none";
    }
    spanwarwick.onclick = function () {
        modalwarwick.style.display = "none";
    }
    spanskills.onclick = function () {
        modalskills.style.display = "none";
    }
    
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalme) {
        modalme.style.display = "none";
    }
    if (event.target == modaldatatjej) {
        modaldatatjej.style.display = "none";
    }
    if (event.target == modalumu) {
        modalumu.style.display = "none";
    }
    if (event.target == modalbcu) {
        modalbcu.style.display = "none";
    }
    if (event.target == modalwarwick) {
        modalwarwick.style.display = "none";
    }
    if (event.target == modalskills) {
        modalskills.style.display = "none";
    }
}






