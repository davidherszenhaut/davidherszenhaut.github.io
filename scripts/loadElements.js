import { createHeader } from "/scripts/createHeader.js";
import { createFooter } from "/scripts/createFooter.js";

document.body.onload = loadElements;

function loadElements() {
  createFooter();
  createHeader();
}
