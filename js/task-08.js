const form = document.querySelector(".login-form");
let formData = {};

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  formData.email = email.value;
  formData.password = password.value;
  console.log("🚀 ~ formData:", formData);
  event.currentTarget.reset();
}
