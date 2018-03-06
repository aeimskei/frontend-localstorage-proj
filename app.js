'use strict';

document.addEventListener('DOMContentLoaded', function(event) {

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

  // clear the whole ul list
   clearButton.addEventListener('click', function(event) {
     removeNames();
     clearList(recentNamesList);
   });
});