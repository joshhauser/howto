let menuSearchBar;
let menuContainer;
let menuElts;
let darkModeSwitch;
let html;

/**
 * TODO:
 * - 
 */
window.onload = () => {
  menuSearchBar = document.getElementById('search-bar');
  menuContainer = document.getElementById('menu-container');
  

  if (menuSearchBar != null && menuContainer != null) {
    menuElts = menuContainer.getElementsByTagName('a');

    menuSearchBar.oninput = () => {
      search(menuElts, menuSearchBar.value);
    }
  }

  darkModeSwitch = document.getElementById('darkModeSwitch');
  html = document.getElementsByTagName("html")[0];

  darkModeSwitch.addEventListener('change', () => {
    toggleDarkMode(html);
  });

  if (darkModeSwitch.checked) toggleDarkMode(html);
}