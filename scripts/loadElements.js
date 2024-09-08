import { createHeader } from "/scripts/createHeader.js";
import { createFooter } from "/scripts/createFooter.js";
import { createProjects } from "/scripts/createProjects.js";
import { createResume } from "/scripts/createResume.js";

document.body.onload = loadElements;

function loadElements() {
  createHeader();

  const url = document.URL;

  if (url.includes("projects")) {
    createProjects();
  }

  if (url.includes("resume")) {
    createResume();
  }

  createFooter();
}
