window.addEventListener("load", function() {
json
const form = document.getElementById("formSubmit");
form.addEventListener('submit', submitForm)
})

function submitForm(){
   event.preventDefault();
   const pilotInput = document.getElementById("pilotName");
   const copilotInput = document.getElementById("copilotName");
   const fuelLevelInput = document.getElementById("fuelLevel");
   const cargoMassInput = document.getElementById("cargoMass");
   const pilotStatus = document.getElementById('pilotStatus');
   const copilotStatus = document.getElementById('copilotStatus');
   const fuelStatus = document.getElementById('fuelStatus');
   const cargoStatus = document.getElementById('cargoStatus');
   const launchStatus = document.getElementById('launchStatus');
   const faultyItems = document.getElementById("faultyItems");

   if(pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
      alert("All fields are required!");
   }
   if(Number(pilotInput.value)){
    alert("Pilot Name field invalid.");
   }
   if(Number(copilotInput.value)){
    alert("Co-Pilot Name field invalid.");
   }
   if(isNaN(fuelLevelInput.value)){
    alert("Fuel Level must be a number.");
   }
   if(isNaN(cargoMassInput.value)){
    alert("Cargo Mass must be a number.");
   }

   faultyItems.style.visibility = "visible";
   pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`
   copilotStatus.innerHTML = `Co-Pilot ${copilotInput.value} is ready for launch`
    if(fuelLevelInput.value < 10000){
      fuelStatus.innerHTML = "Fuel level too low for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
   }

   if(cargoMassInput.value > 10000){
      cargoStatus.innerHTML = "Cargo mass too high for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
   }
   
   if(fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000){
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "Green";
      fuelStatus.innerHTML = "Fuel level high enough for launch";
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
   }
}

 
   const json = fetch("https://handlers.education.launchcode.org/static/planets.json")
   .then(function(response) { response.json().then( function(json){ console.log(json)
         const div = document.getElementById("missionTarget")
      div.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
   <li>Name: ${json[4].name}</li>
   <li>Diameter: ${json[4].diameter}</li>
   <li>Star: ${json[4].star}</li>
   <li>Distance from Earth: ${json[4].distance}</li>
   <li>Number of Moons: ${json[4].moons}</li>
      
   </ol>
   <img src="${json[4].image}">
   `
   });
});

