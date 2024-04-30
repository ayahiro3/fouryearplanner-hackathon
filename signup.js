const userName = document.getElementById("#name");
const userMajor = document.getElementById("#major");
const userGradYear = document.getElementById("#gradYear");

signUpButton.addEventListener("click", () => {
  signUpUser()
})

function signUpUser() {
  userName = userName.value;
  userMajor = userMajor.innerHTML;
  userGradYear = userGradYear.innerHTML;
  console.log("i work!!")
}
