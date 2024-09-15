export function createHeader() {
  const header = document.createElement("header");

  // home button
  const homeButtonContainer = document.createElement("div")
  homeButtonContainer.classList.add("header-item");
  const homeButton = document.createElement("a");
  const homeButtonText = document.createTextNode("Home");
  homeButton.appendChild(homeButtonText);
  homeButton.href = "/";
  homeButtonContainer.appendChild(homeButton);
  header.appendChild(homeButtonContainer);

  // navigation links
  const headerLinks = document.createElement("div");
  headerLinks.id = "header-links";
  headerLinks.classList.add("header-item");

  const projectsLink = document.createElement("a");
  const projectsLinkText = document.createTextNode("Projects");
  projectsLink.appendChild(projectsLinkText);
  projectsLink.href = "/pages/projects.html";
  headerLinks.appendChild(projectsLink);

  const resumeLink = document.createElement("a");
  const resumeLinkText = document.createTextNode("Résumé");
  resumeLink.appendChild(resumeLinkText);
  resumeLink.href = "/pages/resume.html";
  headerLinks.appendChild(resumeLink);

  const musicLink = document.createElement("a");
  const musicLinkText = document.createTextNode("Music");
  musicLink.appendChild(musicLinkText);
  musicLink.href = "/pages/music.html";
  headerLinks.appendChild(musicLink);

  header.appendChild(headerLinks);

  // theme switcher
  const toggleContainer = document.createElement("form");
  toggleContainer.classList.add("header-item");
  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.id = "theme-checkbox";
  let themeText;
  const toggleLabel = document.createElement("label");
  toggleLabel.setAttribute("for", "theme-switcher");
  toggleContainer.appendChild(toggle);
  toggleContainer.appendChild(toggleLabel);
  const toggleParagraph = document.createElement("p");
  toggleParagraph.id = "toggle-text";
  toggleContainer.appendChild(toggleParagraph);
  header.appendChild(toggleContainer);

  document.body.insertBefore(header, document.body.firstChild);

  if (localStorage.getItem("theme") === null) {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      toDarkMode();
    } else {
      toLightMode();
    }
  } else if (localStorage.getItem("theme") === "dark") {
    toDarkMode();
  } else {
    toLightMode();
  }

  toggle.addEventListener("change", function() {
    if (this.checked) {
      toDarkMode();
    } else {
      toLightMode();
    }
  });

}

function toDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
  const label = document.getElementById("toggle-text");
  label.innerHTML = "Dark";
  const checkbox = document.getElementById("theme-checkbox");
  checkbox.checked = true;
}

function toLightMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
  const label = document.getElementById("toggle-text");
  label.innerHTML = "Light";
  const checkbox = document.getElementById("theme-checkbox");
  checkbox.checked = false;
}
