export function createFooter() {
  const footer = document.createElement("footer");
  const footerParagraph = document.createElement("p");
  const text = "David Herszenhaut \u00A9 " + new Date().getFullYear();
  const footerText = document.createTextNode(text);
  footerParagraph.appendChild(footerText);
  footer.appendChild(footerParagraph);
  document.body.appendChild(footer);
}
