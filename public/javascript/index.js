const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      const allCharacters = await charactersAPI.getFullList();
      console.log(allCharacters);

      //Adding the info into the HTML
      const div = document.querySelector(".fetch-all");
      const charContainer = document.querySelector("characters-container");
      charContainer.innerHTML = "";

      allCharacters.forEach((character) => {
        const newDiv = document.createElement("div"); //We make the box in the top dissapear
        newDiv.classList.add("character-info"); //We give our div the class so it looks the same
        newDiv.innerHTML = `<div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.weapon}</div>
        <div class="weapon">${character.cartoon}</div>`;
        charContainer.appendChild(newDiv);
      });

      // VERY LONG AND BAD WAY TO DO IT
      // allCharacters.forEach((character) => {
      //   let characterContainer = document.createElement("div");
      //   characterContainer.classList.add("character-container");
      //   div.appendChild(characterContainer);

      //   let name = document.createElement("p");
      //   name.innerHTML = `${character.name}`;
      //   characterContainer.appendChild(name);

      //   let occupation = document.createElement("p");
      //   occupation.innerHTML = `${character.occupation}`;
      //   characterContainer.appendChild(occupation);

      //   let weapon = document.createElement("p");
      //   weapon.innerHTML = `${character.weapon}`;
      //   characterContainer.appendChild(weapon);

      //   let cartoon = document.createElement("p");
      //   cartoon.innerHTML = `${character.cartoon}`;
      //   characterContainer.appendChild(cartoon);
      // });

      // //We create a "p" with the info for each field in each character
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      const characterId = document.getElementById("oneId").value; //This gets whatever we type in the form

      console.log(characterId.value);
      const { data } = await charactersAPI.getOneRegister(characterId); //We call our method with our API using characterId

      console.log("Here is the found character", data);

      const charContainer = document.querySelector("characters-container");
      charContainer.innerHTML = "";
      const newDiv = document.createElement("div"); //We make the box in the top dissapear
      newDiv.classList.add("character-info"); //We give our div the class so it looks the same
      newDiv.innerHTML = `<div class="name">${data.name}</div>
        <div class="occupation">${data.occupation}</div>
        <div class="cartoon">${data.weapon}</div>
        <div class="weapon">${data.cartoon}</div>`;
      charContainer.appendChild(newDiv);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      const characterId = document.getElementById("deleteId").value; //This gets whatever we type in the form
      const { data } = await charactersAPI.deleteOneRegister(characterId); //We call our method with our API using characterId
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
