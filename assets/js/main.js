// Theme switch
const body = document.body;
const lamp = document.getElementById("change-theme-btn");
const data = body.getAttribute("data-theme");
console.log(data)

const initTheme = (state) => {
  if (state === "dark") {
    body.setAttribute("data-theme", "dark");
  } else if (state === "light") {
    body.removeAttribute("data-theme");
  } else {
    localStorage.setItem("theme", data);
  }
};

const toggleTheme = (state) => {
  if (state === "dark") {
    localStorage.setItem("theme", "light");
    body.removeAttribute("data-theme");
  } else if (state === "light") {
    localStorage.setItem("theme", "dark");
    body.setAttribute("data-theme", "dark");
  } else {
    initTheme(state);
  }
};

lamp.addEventListener("click", () =>
  toggleTheme(localStorage.getItem("theme"))
);
