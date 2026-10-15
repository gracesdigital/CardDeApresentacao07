// Os destinos dos botões são configurados no index.html.
document.querySelectorAll(".action").forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("is-active");
    window.setTimeout(() => link.classList.remove("is-active"), 220);
  });
});
