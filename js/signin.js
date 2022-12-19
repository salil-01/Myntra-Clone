let storedData = JSON.parse(localStorage.getItem("userdata")) || [];
let form = document.getElementById("input-data");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  storedData.forEach((element) => {
    if (
      element.email == form.email.value &&
      element.password == form.password.value
    ) {
      // console.log(true)
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
      });
      homepage();
    } else {
      // console.log(false)
      Swal.fire({
        icon: "error",
        title: "Wrong Credentials",
        showConfirmButton: false,
      });
    }
  });
});
let homepage = () => {
  let tID = setTimeout(function () {
    window.location.href = "index.html";
    window.clearTimeout(tID); // clear time out.
  }, 2000);
};
