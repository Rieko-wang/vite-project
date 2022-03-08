/**
 * Decode html entities in a string
 * @see http://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
 *
 * @param {String} html string of html to decode
 */
export default function decodeHtml(html: any): string {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = html;
  return textArea.value;
}
