const container = document.getElementById("container");
let inputFields = document.querySelectorAll(".input");
let smallMessages = document.getElementsByTagName("small");
const submitBtn = document.getElementById("submitBtn");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordSmall = document.getElementById("passwordSmall");
const confirmPassword = document.getElementById("cnfmPassword");
const confirmPasswordSmallOne = document.getElementById("cnfmPasswordSmallOne");
const confirmPasswordSmallTwo = document.getElementById("cnfmPasswordSmallTwo");
const usernameSmall = document.getElementById("usernameSmall");
const emailSmall = document.getElementById("emailSmall");
const buttonSmall = document.getElementById("btnSmall");
const successDialogue = document.getElementById("successDialogue");
const myForm = document.getElementById("myForm");

function allOk() {
  if (
    username.value &&
    email.value &&
    password.value &&
    confirmPassword.value
  ) {
    buttonSmall.style.display = "none";
  }
}

username.addEventListener("blur", function () {
  if (username.value.length < 3) {
    usernameSmall.style.display = "block";
    usernameSmall.style.color = "red";
    username.style.borderColor = "red";
    username.style.boxShadow = "1px 1px 1px red";
  } else {
    username.style.borderColor = "green";
    username.style.boxShadow = "1px 1px 1px green";
    usernameSmall.style.display = "none";
  }
  allOk();
});

email.addEventListener("blur", function () {
  var filter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(email.value)) {
    emailSmall.style.display = "block";
    emailSmall.style.color = "red";
    email.style.borderColor = "red";
    email.style.boxShadow = "1px 1px 1px red";
    return false;
    email.focus();
  } else {
    emailSmall.style.display = "none";
    email.style.borderColor = "green";
    email.style.boxShadow = "1px 1px 1px green";
  }
  allOk();
});

function submitOk() {
  if (
    !username.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    buttonSmall.style.display = "block";
    buttonSmall.style.color = "red";
  }
  // allOk();
  else {
    // no errors
    successDialogue.style.display = "block";
    successDialogue.innerHTML = "Form successfully submitted...Thank you!";
    container.parentNode.replaceChild(successDialogue, container);
    function formAction() {
      window.location.href = "https://www.youtube.com/";
    }
    setTimeout(formAction, 2000);
  }
}

password.addEventListener("blur", function () {
  if (password.value == "") {
    password.style.borderColor = "red";
    password.style.boxShadow = "1px 1px 1px red";
    passwordSmall.style.display = "block";
    passwordSmall.style.color = "red";
  } else {
    let pass = /^(.{6,50})$/;
    if (pass.test(password.value)) {
      password.style.borderColor = "green";
      password.style.boxShadow = "1px 1px 1px green";
      passwordSmall.style.display = "none";
    } else {
      password.style.borderColor = "red";
      password.style.boxShadow = "1px 1px 1px red";
      passwordSmall.style.display = "block";
    }
  }
  allOk();
});

confirmPassword.addEventListener("blur", function () {
  if (confirmPassword.value == "") {
    confirmPasswordSmallTwo.style.display = "none";
    confirmPasswordSmallOne.style.display = "block";
    confirmPasswordSmallOne.style.color = "red";
    confirmPassword.style.borderColor = "red";
    confirmPassword.style.boxShadow = "1px 1px 1px red";
  } else {
    if (confirmPassword.value === password.value) {
      confirmPasswordSmallOne.style.display = "none";
      confirmPasswordSmallTwo.style.display = "none";
      confirmPassword.style.borderColor = "green";
      confirmPassword.style.boxShadow = "1px 1px 1px green";
    } else {
      confirmPasswordSmallOne.style.display = "none";
      confirmPasswordSmallTwo.style.display = "block";
      confirmPasswordSmallTwo.style.color = "red";
      confirmPassword.style.borderColor = "red";
      confirmPassword.style.boxShadow = "1px 1px 1px red";
    }
  }
  allOk();
});
