window.onload = () => {
  let darkModeSwitch = document.getElementById('darkModeSwitch');
  let html = document.getElementsByTagName("html")[0];

  darkModeSwitch.addEventListener('change', () => {
    toggleDarkMode(html);
  });

  if (darkModeSwitch.checked) toggleDarkMode(html);
}


function toggleDarkMode(html) {
  html.classList.toggle("dark");
  let stylesheet = document.getElementById('codeStylesheet');

  if (stylesheet.getAttribute('href') === '../css/highlightjs/stackoverflow-dark.min.css')
    stylesheet.setAttribute('href', '../css/highlightjs/stackoverflow-light.min.css');
  else
    stylesheet.setAttribute('href', '../css/highlightjs/stackoverflow-dark.min.css');
}