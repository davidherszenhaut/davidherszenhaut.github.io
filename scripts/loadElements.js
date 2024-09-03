import { createHeader } from "/scripts/createHeader.js";
import { createFooter } from "/scripts/createFooter.js";
import { createProjects } from "/scripts/createProjects.js";

document.body.onload = loadElements;

function loadElements() {
  createHeader();
  createFooter();

  const url = document.URL;

  if (url.includes("projects")) {
    createProjects();
  }
}
