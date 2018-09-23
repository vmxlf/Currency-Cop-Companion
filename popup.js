const text = document.querySelector("input[type=text]");
const button = document.querySelector("input[type=button]");

document.addEventListener('DOMContentLoaded', () => {
  chrome.cookies.get({url: 'https://www.pathofexile.com/', name: 'POESESSID'}, (cookie) => {
    if (cookie && cookie.value.length > 0) {
      text.value = cookie.value;
      text.className = 'success';
    } else {
      text.value = 'Error : Failed to retrieve POESESSID';
      text.className = 'error';
      button.disabled = true;
    }
  });
}, false);

button.addEventListener('click', () => {
  text.select();
  document.execCommand('copy');
  window.getSelection().empty();
}, false);
