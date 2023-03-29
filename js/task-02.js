const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrediensElements = ingredients.map((ingredient) => {
  const ingredientElement = document.createElement("li");
  ingredientElement.textContent = ingredient;
  ingredientElement.classList.add("item");

  return ingredientElement;
});


const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...ingrediensElements);
