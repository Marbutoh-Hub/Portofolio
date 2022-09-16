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
  // nav.style.position = "relative";
});
