export function createHeader() {
  const header = document.createElement("header");

  // home button
  const homeButton = document.createElement("a");
  const homeButtonText = document.createTextNode("David Herszenhaut");
  homeButton.appendChild(homeButtonText);
  homeButton.href = "/";
  header.appendChild(homeButton);

  // navigation links
  const headerLinks = document.createElement("div");
  headerLinks.id = "header-links";

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
  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  header.appendChild(toggle);

  document.body.insertBefore(header, document.body.firstChild);
}
