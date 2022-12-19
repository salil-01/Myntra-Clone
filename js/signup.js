let userData = JSON.parse(localStorage.getItem("userdata")) || [];
let form = document.getElementById("input-field");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    username: form.username.value,
    mobile: form.mobile.value,
    email: form.email.value,
    password: form.password.value,
  };
  //   console.log(obj);
  userData.push(obj);
  localStorage.setItem("userdata", JSON.stringify(userData));
  Swal.fire({
    icon: "success",
    title: "Account Created Successfully ☃️",
    showConfirmButton: false,
  });
  homepage();
  form.reset();
});
let homepage = () => {
  let tID = setTimeout(function () {
    window.location.href = "signin.html";
    window.clearTimeout(tID); // clear time out.
  }, 2000);
};
