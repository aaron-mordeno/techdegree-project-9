/*!
 * Start Bootstrap - Resume v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */

!(function (e) {
  "use strict";
  e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var t = e(this.hash);
      if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length)
        return (
          e("html, body").animate(
            { scrollTop: t.offset().top },
            1e3,
            "easeInOutExpo"
          ),
          !1
        );
    }
  }),
    e(".js-scroll-trigger").click(function () {
      e(".navbar-collapse").collapse("hide");
    }),
    e("body").scrollspy({ target: "#sideNav" });
})(jQuery);

// light and dark theme toggle
const toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener("click", switchTheme);

function switchTheme() {
  if (toggleSwitch.classList.contains("light-theme")) {
    toggleSwitch.classList.remove("light-theme");
    toggleSwitch.classList.add("dark-theme");
    darkTheme();
  } else if (toggleSwitch.classList.contains("dark-theme")) {
    toggleSwitch.classList.remove("dark-theme");
    toggleSwitch.classList.add("light-theme");
    lightTheme();
  }
}

function darkTheme() {
  document.documentElement.style.setProperty("--background-color", "#343a40");
  document.documentElement.style.setProperty("--body-color", "#fff");
  document.documentElement.style.setProperty("--header-color", "#fff");
  document.documentElement.style.setProperty("--card-header", "#fff");
  document.documentElement.style.setProperty("--card-text", "#fff");
  document.documentElement.style.setProperty("--card-border", "#fff");
  document.documentElement.style.setProperty("--card-background", "#343a40");
}

function lightTheme() {
  document.documentElement.style.setProperty("--background-color", "#fff");
  document.documentElement.style.setProperty("--body-color", "#343a40");
  document.documentElement.style.setProperty("--header-color", "#343a40");
  document.documentElement.style.setProperty("--card-header", "#343a40");
  document.documentElement.style.setProperty("--card-text", "#868e96");
  document.documentElement.style.setProperty("--card-border", "#868e96");
  document.documentElement.style.setProperty("--card-background", "#fff");
}

// form validation
const form = document.getElementsByTagName("form");
const name = document.getElementById("inputName");
const email = document.getElementById("inputEmail");
// const emailFormat =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const subject = document.getElementById("inputSubject");
const message = document.getElementById("inputMessage");
const send = document.getElementById("send");
