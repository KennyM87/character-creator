window.onload = function() {
    const classSelect = document.querySelector("#character-class");
    const spellChoice = document.querySelector("#spell-choice");
    const charImageDiv = document.querySelector("#character-Img");
    const charImage = document.querySelector("#char-image");
    const submitButton = document.querySelector("#submit-btn");

    // Paths to images
    const classImages = {
        Mage: "images/MageImg.png",
        Wizard: "images/WizardImg.png",
        Rogue: "images/RogueImg.png"
    };

    // Hide Spells and Images at start
    spellChoice.classList.add("hidden");
    charImageDiv.classList.add("hidden");

    // Show hide spell & update image when selected
    classSelect.onchange = function() {
        let selectedClass = classSelect.value;

        // Show spell if Wizard is picked
        spellChoice.classList.toggle("hidden", selectedClass !== "Wizard");

        // Show image depending on selection
        if (classImages[selectedClass]) {
            charImage.src = classImages[selectedClass];
            charImageDiv.classList.remove("hidden");
        } else {
            charImageDiv.classList.add("hidden"); 
        }
    };

    submitButton.onclick = handleSubmit;
};

function handleSubmit() {
    // Get input 
    let name = document.querySelector("#character-name").value;
    let age = document.querySelector("#character-age").value;
    let charClass = document.querySelector("#character-class").value;
    let charType = document.querySelector("input[name='character-type']:checked");
    let abilities = document.querySelectorAll("input[type='checkbox']:checked");

    // Starting spell if Wizard is selected
    let startingSpell = charClass === "Wizard" ? document.querySelector("#starting-spell").value : "";

    // Array of values for abilities
    let abilityList = [];
    for (let i = 0; i < abilities.length; i++) {
    abilityList.push(abilities[i].value);
}

    // Character type selected
    let typeValue = charType ? charType.value : "None";

    // Character output using <p>
    let output = "<div class='character-sheet'>";
    output += "<h2>Your Character</h2>";
    output += "<p><b>Name:</b> " + name + "</p>";
    output += "<p><b>Age:</b> " + age + "</p>";
    output += "<p><b>Class:</b> " + charClass + "</p>";
    
    if (charClass === "Wizard") {
        output += "<p><b>Starting Spell:</b> " + startingSpell + "</p>";
    }
    
    output += "<p><b>Type:</b> " + typeValue + "</p>";
    output += "<p><b>Abilities:</b> " + (abilityList.length > 0 ? abilityList.join() : "None") + "</p>";
    output += "</div>";
    

    // Shows Character Information
    document.querySelector("#character-display").innerHTML = output;
}
