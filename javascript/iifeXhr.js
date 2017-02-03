"use strict"

var Predator = (function(originalPredator){

	originalPredator.showCarnivores = function(carnivores) {
	  var output = document.getElementById("carnivoresOutput");
	        var outputString = "";
	        for (var i = 0; i < carnivores.length; i++){
	          var currentCarnivore = carnivores[i];
	          outputString += `<h4>${currentCarnivore.name}<h4>`;
	        }
	        output.innerHTML = outputString;
	},

	originalPredator.showHerbivores = function(herbivores) {
		var output = document.getElementById("herbivoresOutput");
	        var outputString = "";
	        for (var i = 0; i < herbivores.length; i++){
	          var currentHerbivore = herbivores[i];
	          outputString += `<h4>${currentHerbivore.name}<h4>`;
	        }
	        output.innerHTML = outputString;
	}

	return originalPredator;

})(Predator || {});

Predator.loadHerbivores(Predator.showHerbivores);
Predator.loadCarnivores(Predator.showCarnivores);