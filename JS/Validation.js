form = document.forms[0].elements;
for (var i = 0; i < form.length - 1; i++) {
  form[i].addEventListener("input", LiveValidate(form[i]));
}

function Signin() {
  var email = document.Signing.Email.value;
  var password = document.Signing.Password.value;
  var error = document.getElementById("error");

  var name = document.Signing.Name.value;
  var Username = document.Signing.Username.value;
  var cpassword = document.Signing.cPassword.value;
  result = true;
  error.innerHTML = "";
  if (email == "") {
    error.innerHTML = error.innerHTML + "<br>Please enter your email";
    result = false;
  }
  if (Username == "") {
    error.innerHTML = error.innerHTML + "<br>Please enter your Username";
    result = false;
  }
  if (password == "") {
    error.innerHTML = error.innerHTML + "<br>Please enter your password";
    result = false;
  }
  if (name == "") {
    error.innerHTML = error.innerHTML + "<br>Please enter your name";
    result = false;
  }
  if (cpassword == "") {
    error.innerHTML =
      error.innerHTML + "<br>Please enter your confirm password";

    console.log(error.innerHTML);
    result = false;
  }
  if (password != cpassword && result == true) {
    error.innerHTML =
      error.innerHTML + "<br>Password and confirm password does not match";
    result = false;
  }
  return result;
}

function Login() {
  result = false;
  Form1 = document.getElementById("Login");
  UserName = Form1.Username.value;
  Password = Form1.Password.value;
  error = document.getElementById("error");
  error.innerHTML = "";
  if (UserName == "") {
    error.innerHTML = error.innerHTML + "<br>Please enter your Username";
  }
  if (Password == "") {
    error.innerHTML = error.innerHTML + "<br>Please enter your password";
  }
  if (UserName != "" && Password != "") {
    result = true;
  }
  return result;
}

function LiveValidate(Name) {
  var input = Name.value;
  var errID = Name.name[0].toLowerCase() + "Error";

  let err = document.getElementById(errID).innerHTML;
  disp = "";
  if (input == "") {
    disp = "Please enter your " + Name.name;
  }
  if (input.length < 4 && input != "") {
    disp = "Your " + Name.name + " is very Small";
  }
  if (Name == "Email" && input.indexOf("@") == -1) {
    disp = "Please enter a valid " + Name.name;
  }
  if (Name == "Password" && input.length < 6) {
    disp = "Your " + Name.name + " is very Small";
  }
  if (Name == "Password" && input.length > 20) {
    disp = "Your " + Name.name + " is very Large";
  }
  if (Name == "Password") {
    disp = "Your " + Name.name + " is not valid";
  }
  if (
    Name == "cPassword" &&
    input != document.getElementById("Password").value
  ) {
    disp = "Your " + Name.name + " does not match";
  }
  err = disp;
  document.getElementById(errID).innerHTML = err;
}
