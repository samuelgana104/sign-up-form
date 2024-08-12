let name = document.querySelector("#name");
let password = document.querySelector("#password");
let phoneNumber = document.querySelector("#phone-number");
let email = document.querySelector("#email");
let form = document.querySelector(" form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});
const displayError = (element, message) => {
  let card = element.parentElement;
  let display = card.querySelector(".error");
  display.innerText = message;
  card.classList.add("error");
  card.classList.remove("sucess");
};

const success = (element) => {
  let card = element.parentElement;
  let display = card.querySelector(".error");

  display.innerText = "";
  card.classList.add("sucess");
  card.classList.remove("error");
};

function validation() {
  let nameValue = name.value.trim();
  let passwordValue = password.value.trim();
  let phoneNumberValue = phoneNumber.value.trim();
  let emailValue = email.value.trim();
  //regular expression for name
  if (nameValue == "") {
    displayError(name, "please input your name");
  } else if (nameValue.match(/[0-9]/)) {
    //if the value name contain digits
    displayError(name, "input valid name ");
  } else success(name);
  //regular expression for password
  if (passwordValue == "") {
    displayError(password, "please input  your password ");
  } else if (
    //if the value of password contain atleast a lowercase,uppercase and digit with a minimum length of 8 characters
    passwordValue.match(/(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}/)
  ) {
    success(password);
  } else {
    displayError(password, "the password strength is weak");
  }
  //regular expression for phone number
  if (phoneNumberValue == "") {
    displayError(phoneNumber, "please input your phone number");
    //if the phone number contain a letter
  } else if (phoneNumberValue.match(/[a-zA-z]/)) {
    displayError(phoneNumber, "please input valid phone number");
  } else if (phoneNumberValue.match(/[0][0-9]{10}$/)) {
    success(phoneNumber);
  } else {
    displayError(phoneNumber, "the phone number must be 11 digits ");
  }
  //regular expression for e-mail
  if (emailValue == "") {
    displayError(email, "please email need to be enter");
    //if the value of email satisfy the regular expression below
  } else if (emailValue.match(/^[a-zA-Z0-9.%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/)) {
    success(email);
  } else {
    displayError(email, "please input a valid email address");
  }
}
