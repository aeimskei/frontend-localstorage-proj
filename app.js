'use strict';
// Test for local storage
function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(error){
    return false;
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  // Check for Local Storage exists before trying to use it
  if (supportsLocalStorage()) {
    // Get references to DOM elements
    let inputName = document.getElementById('inputName');
    let inputBar = document.getElementById('inputBar');
    let recentNamesList = document.getElementById('recentNamesList');
    let clearButton = document.getElementById('clearStorage');

    // Display list of names
    let recentNames = getRecentNames();
    recentNames.forEach(function(inputNames) {
      appendListItem(recentNamesList,inputNames);
    });

    // Set up event handlers
    inputName.addEventListener('submit', function(event) {
      let inputNames = inputBar.value;
      if (saveinputNames(inputNames)) {
        appendListItem(recentNamesList, inputNames);
      }
    });

    // Clear the whole ul list
    clearButton.addEventListener('click', function(event) {
      removeNames();
      clearList(recentNamesList);
    });
  }
});