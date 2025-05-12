const form = document.getElementById("animal-form");
const nicknameInput = form.elements["nickname"];
const ageInput = form.elements["age"];
const breedInput = form.elements["breed"];
const animalsContainer = document.getElementById("animals-container");
const nickError = document.getElementById("nickname-error");
const ageError = document.getElementById("age-error");
const breedError = document.getElementById("breed-error");

// console.log(form);
// console.log(nicknameInput);
// console.log(ageInput);
// console.log(breedInput);
// console.log(animalsContainer);
// console.log(nickError);
// console.log(ageError);
// console.log(breedError);

let animals = [];

function renderAnimals(animals) {
  console.log(animalsContainer.firstChild);
  // очищаем предыдущий рендер
  while (animalsContainer.firstChild) {
    animalsContainer.removeChild(animalsContainer.firstChild);
  }
  // заново наполняем родителя карточками
  animals.forEach((animal) => {
    const animalCard = document.createElement("div");
    animalCard.innerHTML = `<span>${animal.nickname}</span>, <span>${animal.age}</span>, <span>${animal.breed}</span>`;
    animalsContainer.appendChild(animalCard);
  });
}

function addAnimalsToList(event) {
  event.preventDefault();
  if (!validateForm()) return;

  animals.push({
    nickname: nicknameInput.value,
    age: ageInput.value,
    breed: breedInput.value,
  });
  console.log(animals);

  nicknameInput.value = "";
  ageInput.value = "";
  breedInput.value = "";

  renderAnimals(animals);
}

function validateForm() {
  let isValid = true;

  nickError.textContent = "";
  ageError.textContent = "";
  breedError.textContent = "";

  const nicknameValue = nicknameInput.value.trim();
  const ageValue = ageInput.value.trim();
  const breedValue = breedInput.value.trim();

  const lettersRegex = /^[a-zA-Zа-яА-Я\s-]+$/;
  const ageRegex = /^[1-9]\d*$/;

  if (!nicknameValue || !lettersRegex.test(nicknameValue)) {
    nickError.textContent = "Enter letters, spaces, or hyphens only";
    isValid = false;
  }

  if (!ageValue || !ageRegex.test(ageValue)) {
    ageError.textContent = "Enter a positive number";
    isValid = false;
  }

  if (!breedValue || !lettersRegex.test(breedValue)) {
    breedError.textContent = "Enter letters, spaces, or hyphens only";
    isValid = false;
  }

  return isValid;
}

form.addEventListener("submit", addAnimalsToList);
