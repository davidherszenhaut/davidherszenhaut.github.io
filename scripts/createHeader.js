export function createHeader() {
  const header = document.createElement("header");

  const homeButton = document.createElement("a");
  const homeButtonText = document.createTextNode("David Herszenhaut");
  homeButton.appendChild(homeButtonText);
  homeButton.href = "/";
  header.appendChild(homeButton);

  const pageLinks = document.createElement("div");

  const projectsLink = document.createElement("a");
  const projectsLinkText = document.createTextNode("Projects");
  projectsLink.appendChild(projectsLinkText);
  projectsLink.href = "/pages/projects.html";
  pageLinks.appendChild(projectsLink);

  const resumeLink = document.createElement("a");
  const resumeLinkText = document.createTextNode("Rsum");
  resumeLink.appendChild(resumeLinkText);
  resumeLink.href = "/pages/resume.html";
  pageLinks.appendChild(resumeLink);

  const musicLink = document.createElement("a");
  const musicLinkText = document.createTextNode("Music");
  musicLink.appendChild(musicLinkText);
  musicLink.href = "/pages/music.html";
  pageLinks.appendChild(musicLink);

  header.appendChild(pageLinks);

  document.body.insertBefore(header, document.body.firstChild);
}
