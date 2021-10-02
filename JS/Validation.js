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
