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
  let themeText;
  toggle.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
    toggleText(this.checked);
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
  const toggleLabel = document.createElement("label");
  toggleLabel.setAttribute("for", "theme-switcher");
  toggleContainer.appendChild(toggle);
  toggleContainer.appendChild(toggleLabel);
  const toggleParagraph = document.createElement("p");
  toggleParagraph.id = "toggle-text";
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("theme", "dark");
    toggle.checked = true;
  } else {
    localStorage.setItem("theme", "light");
    toggle.checked = false;
  }
  toggleContainer.appendChild(toggleParagraph);
  header.appendChild(toggleContainer);

  document.body.insertBefore(header, document.body.firstChild);

  getTheme();
}

function toggleText(checked) {
  const label = document.getElementById("toggle-text");
  if (checked) {
    label.innerHTML = "Dark";
  } else {
    label.innerHTML = "Light";
  }
}

function getTheme() {
  const theme = localStorage.getItem("theme");
  const label = document.getElementById("toggle-text");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    label.innerHTML = "Dark";
  } else {
    document.body.classList.remove("dark-mode");
    label.innerHTML = "Light";
  }
}
