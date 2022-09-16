var k = 0;
var welcome = "Hello, Welcome in my Portofolio ";
var speed = 50;
function typeWelcome() {
  if (k < welcome.length) {
    document.getElementById("text-welcome").innerHTML += welcome.charAt(k);
    k++;
    setTimeout(typeWelcome, speed);
  }
}
var m = 0;
var question = " What is your name bro ?";
var speed = 50;
function typeQuestion() {
  if (m < question.length) {
    document.getElementById("text-question").innerHTML += question.charAt(m);
    m++;
    setTimeout(typeQuestion, speed);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  typeWelcome();
  typeQuestion();
});

const btnWelcome = document.querySelector(".btn-submit");
const beforeWelcome = document.querySelector(".before-welcome");
const afterWelcome = document.querySelector(".after-welcome");
const github = document.querySelector(".github");
const linkedin = document.querySelector(".linkedin");
const twitter = document.querySelector(".twitter");
const instagram = document.querySelector(".instagram");
const nav = document.getElementsByTagName("nav");
const jumbotron = document.querySelector(".jumbotron");
const body = document.querySelector("body");
const menu = document.getElementById("menu");
const title = document.querySelector(".title");
const pp = document.querySelector(".pp");
const content = document.querySelector(".content");
const aboutH1 = document.querySelector("#about>h1");
const about = document.querySelector("#about");

var j = 0;
var speed = 50;
function getNama() {
  if (j < document.getElementById("nama").value.length) {
    document.getElementById("inaa").innerHTML += document.getElementById("nama").value.charAt(j);
    j++;
    setTimeout(getNama, speed);
  }
}

var i = 0;
var txt = "Hello ";
var speed = 50;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  getNama();
}

btnWelcome.addEventListener("click", function () {
  beforeWelcome.style.display = "none";
  afterWelcome.style.display = "block";
  typeWriter();
  github.style.marginLeft = "10px";
  linkedin.style.marginLeft = "10px";
  twitter.style.marginLeft = "10px";
  instagram.style.marginLeft = "10px";
});

document.addEventListener("scroll", () => {
  var lastKnownScrollPosition = window.scrollY;
  title.style.transform = "translate(" + lastKnownScrollPosition / 2 + "%,0px)";
  pp.style.transform = "translate(0px," + -lastKnownScrollPosition + "%)";
  console.log(lastKnownScrollPosition);
  if (lastKnownScrollPosition > 10) {
    aboutH1.style.marginLeft = "25%";
    if (lastKnownScrollPosition > 300) {
      about.style.border = "2px solid rgb(240, 154, 210)";
      about.style.boxShadow = "0 0 10px rgb(52, 14, 38)";
    }
  } else if (lastKnownScrollPosition < 10) {
    aboutH1.style.marginLeft = "-1000px";
    if (lastKnownScrollPosition < 10) {
      about.style.border = "2px solid white";
      about.style.boxShadow = "0 0 10px white";
    }
  }
});
