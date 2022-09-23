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
const asideDiv = document.querySelector("aside > div");
const imgSkill = document.querySelector(".skillcss");
const skillHtml = document.querySelector(".skillhtml");
const skillJs = document.querySelector(".skilljavascript");
const skillPhp = document.querySelector(".skillphp");
const skillMysql = document.querySelector(".skillmysql");
const assideH6 = document.querySelector(".inputan");
const progressBar = document.querySelector("#field-progress-bar");
const persentase = document.querySelector("#persentase");
const ppAside = document.querySelector(".pp2");
const figure = document.querySelector("figure");
const cFigure = document.querySelector(".class-figure");
const dropdown = document.querySelector(".class-figure > img");
const sectionAside = document.querySelector("#section-aside");
const instagramDevice = document.querySelector(".instagramDevice");
const listSkill = document.querySelector(".list-skill");
const listSkillDevice = document.querySelector(".list-skillDevice");
const skillH1Device = document.querySelector(".skill-h1Device");
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
  instagramDevice.style.marginLeft = "-30px";
});

document.addEventListener("scroll", () => {
  var lastKnownScrollPosition = window.scrollY;
  title.style.transform = "translate(" + lastKnownScrollPosition / -0.5 + "%,0px)";
  pp.style.transform = "translate(0px," + -lastKnownScrollPosition + "%)";
  console.log(lastKnownScrollPosition);
  if (lastKnownScrollPosition > 10) {
    body.style.overflowX = "hidden";
    aboutH1.style.marginLeft = "25%";
    cFigure.style.display = "block";
    cFigure.style.width = "240px";
    if (lastKnownScrollPosition > 200) {
      about.style.border = "2px solid rgb(240, 154, 210)";
      about.style.boxShadow = "0 0 10px rgb(52, 14, 38)";
      imgAbout.style.transform = "scale(200)";
      cFigure.style.display = "block";
      ppAside.style.marginTop = "-10px";
    }
  } else if (lastKnownScrollPosition < 10) {
    aboutH1.style.marginLeft = "-1000px";
    if (lastKnownScrollPosition < 10) {
      about.style.border = "2px solid white";
      about.style.boxShadow = "0 0 10px white";
      imgAbout.style.transform = "scale(0)";
      cFigure.style.width = "10px";
      cFigure.style.display = "block";
      ppAside.style.marginTop = "-10px";
      sectionAside.style.height = "0px";
      sectionAside.style.display = "none";
      dropdown.style.transform = "rotate(270deg)";
    }
  }

  if (lastKnownScrollPosition > 600) {
    skillH1.style.marginLeft = "25%";
    skillH1Device.style.marginLeft = "32%";
    if (lastKnownScrollPosition > 600) {
      asideDiv.style.marginLeft = "2260px";
      skill.style.border = "2px solid rgb(240, 154, 210)";
      skill.style.boxShadow = "0 0 10px rgb(52, 14, 38)";
      listSkill.style.marginLeft = "10px";
      listSkillDevice.style.marginLeft = "50px";
    }
  } else if (lastKnownScrollPosition < 600) {
    skillH1.style.marginLeft = "-1000px";
    if (lastKnownScrollPosition < 500) {
      asideDiv.style.marginLeft = "-1500px";
      skill.style.border = "2px solid white";
      skill.style.boxShadow = "0 0 10px white";
      listSkill.style.marginLeft = "-1000px";
    }
  }

  imgSkill.addEventListener("mouseover", function () {
    assideH6.innerHTML = "CSS";
    progressBar.style.width = "30%";
    persentase.innerHTML = "60%";
  });
  skillHtml.addEventListener("mouseover", function () {
    assideH6.innerHTML = "HTML";
    progressBar.style.width = "70%";
    persentase.innerHTML = "100%";
  });
  skillJs.addEventListener("mouseover", function () {
    assideH6.innerHTML = "JAVASCRIPT";
    progressBar.style.width = "70%";
    persentase.innerHTML = "100%";
  });
  skillPhp.addEventListener("mouseover", function () {
    assideH6.innerHTML = "PHP";
    progressBar.style.width = "60%";
    persentase.innerHTML = "90%";
  });
  skillMysql.addEventListener("mouseover", function () {
    assideH6.innerHTML = "MySQL";
    progressBar.style.width = "25%";
    persentase.innerHTML = "50%";
  });
  ppAside.addEventListener("mouseover", function () {
    // figure.classList.add("class-figure");
    ppAside.style.transform = "rotate(360deg)";
    cFigure.style.width = "250px";
  });
  ppAside.addEventListener("click", function () {
    ppAside.style.transform = "rotate(-360deg)";
    cFigure.style.width = "10px";
    cFigure.style.display = "none";
    sectionAside.style.height = "0px";
    ppAside.style.marginTop = "10px";
    dropdown.style.transform = "rotate(270deg)";
    sectionAside.style.display = "none";
  });
  dropdown.addEventListener("click", function () {
    dropdown.style.transform = "rotate(360deg)";
    sectionAside.style.display = "block";
    sectionAside.style.height = "290px";
  });
});
