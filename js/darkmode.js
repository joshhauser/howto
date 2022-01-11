function toggleDarkMode(html) {
  html.classList.toggle("dark");
  let stylesheet = document.getElementById('codeStylesheet');

  if (stylesheet != null) {
    if (stylesheet.getAttribute('href') === '../css/highlightjs/stackoverflow-dark.min.css')
      stylesheet.setAttribute('href', '../css/highlightjs/stackoverflow-light.min.css');
    else
      stylesheet.setAttribute('href', '../css/highlightjs/stackoverflow-dark.min.css');
  }
}