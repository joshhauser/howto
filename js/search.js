

/**
 * Search a given string among menu's elements
 * @param {HTMLCollection} menuElts the elements in the menu
 * @param {String} searchValue the text typed in the search bar
 */
function search(menuElts, searchValue) {
  /**
   * Check if searched value corresponds to some
   * menu's elements
   * @param {String} text the text of the current menu element
   * @param {String} searchValue the text typed in the search bar
   * @returns 
   */
  function match(text, searchValue) {
    currentIndex = 0;
    for (let i = 0; i < searchValue.length; i++) {
      if ((currentIndex = text.indexOf(searchValue[i], currentIndex)) == -1)
        return false;
    }

    return true;
  }

  for (let i = 0; i < menuElts.length; i++) {
    if (!match(menuElts[i].children[0].innerText.toLowerCase(), searchValue.toLowerCase())) {
      menuElts[i].style.display = "none";
    }
    else {
      menuElts[i].style.display = "block";
    }
  }
}