'use strict';
// Test for local storage
// function localStorageWorks() {
//   try {
//     return 'localStorage' in window && window['localStorage'] !== null;
//   } catch(error){
//     return false;
//   }
// }

// Get names from Local Storage, return an array
function getRecentNames() {
  let names = localStorage.getItem('recentNames');
  if (names) {
    return JSON.parse(names);
  }
  return [];
}

// Validate email


// Validate and save names to store of past names
function saveinputNames(name) {
  let names = getRecentNames();
  if (names.indexOf(name) > -1 || !name) {
    return false;
  }
  names.push(name);
  localStorage.setItem('recentNames', JSON.stringify(names));
  return true;
}

// Clear out names
function removeNames() {
  localStorage.removeItem('recentNames');
}

// Helper function
// Create an li, given name input, append to the supplied ul
function appendListItem(listElement, name) {
  let listItemElement = document.createElement('LI');
  listItemElement.innerHTML = name;
  listElement.appendChild(listItemElement);
}

// Helper function
// Empty the input of all ul elements
function clearList(listElement) {
  listElement.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function(event) {
  // Check for Local Storage exists before trying to use it
  // if (localStorageWorks()) {
    // Get references to DOM elements
    let inputName = document.getElementById('inputName');
    let inputBar = document.getElementById('inputBar');
    let recentNamesList = document.getElementById('recentNamesList');
    let clearButton = document.getElementById('clearStorage');

    // Display list of names
    let recentNames = getRecentNames();
    recentNames.forEach(function(inputNames) {
      appendListItem(recentNamesList, inputNames);
    });

    // Set up event handler for submit
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
  // }
});