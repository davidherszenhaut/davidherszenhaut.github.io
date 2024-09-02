export function createFooter() {
  const footer = document.createElement("footer");
  const text = "David Herszenhaut \u00A9 " + new Date().getFullYear();
  const footerText = document.createTextNode(text);
  footer.appendChild(footerText);
  document.body.appendChild(footer);
}
