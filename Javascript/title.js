let docTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "Ei, volte aqui! :(";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});