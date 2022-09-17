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
const about = document.querySelector("#about");
const aboutH1 = document.querySelector("#about>h1");
const imgAbout = document.querySelector("#about > aside > img");
const skill = document.querySelector("#skills");
const skillH1 = document.querySelector("#skills>h1");
const listSkill = document.querySelector(".list-skill");

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
    if (lastKnownScrollPosition > 200) {
      about.style.border = "2px solid rgb(240, 154, 210)";
      about.style.boxShadow = "0 0 10px rgb(52, 14, 38)";
      imgAbout.style.transform = "scale(200)";
    }
  } else if (lastKnownScrollPosition < 10) {
    aboutH1.style.marginLeft = "-1000px";
    if (lastKnownScrollPosition < 10) {
      about.style.border = "2px solid white";
      about.style.boxShadow = "0 0 10px white";
      imgAbout.style.transform = "scale(0)";
    }
  }

  if (lastKnownScrollPosition > 600) {
    skillH1.style.marginLeft = "25%";
    if (lastKnownScrollPosition > 600) {
      skill.style.border = "2px solid rgb(240, 154, 210)";
      skill.style.boxShadow = "0 0 10px rgb(52, 14, 38)";
      listSkill.style.marginLeft = "10px";
    }
  } else if (lastKnownScrollPosition < 600) {
    skillH1.style.marginLeft = "-1000px";
    if (lastKnownScrollPosition < 500) {
      skill.style.border = "2px solid white";
      skill.style.boxShadow = "0 0 10px white";
      listSkill.style.marginLeft = "-1000px";
    }
  }
});
