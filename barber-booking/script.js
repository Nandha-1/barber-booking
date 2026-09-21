const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const date = document.querySelector("#date").value;

  alert(`Thanks ${name}. Your booking request is for ${date}.`);
});