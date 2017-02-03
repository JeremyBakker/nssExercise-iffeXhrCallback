"use strict"

var Predator = (function(originalPredator) {
  var carnivoresArray = [];
  var herbivoresArray = [];

  return {
    loadCarnivores: function(callbackFunction) {
      console.log("loadCarnivores");
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        carnivoresArray = JSON.parse(this.responseText).carnivores;
        console.log("carnivores", carnivoresArray);
        callbackFunction(carnivoresArray);
      });
      loader.open("GET", "carnivores.json");
      loader.send();
    },

    loadHerbivores: function(callbackFunction) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        herbivoresArray = JSON.parse(this.responseText).herbivores;
        console.log("herbivores", herbivoresArray);
        callbackFunction(herbivoresArray);
      });
      loader.open("GET", "herbivores.json");
      loader.send();
    }
  }

})(Predator || {});






