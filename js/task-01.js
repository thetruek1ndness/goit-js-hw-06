const categoriesListRef = document.querySelector('#categories');
console.log(categoriesListRef);
const categoriesRef = categoriesListRef.children;
console.log(categoriesRef);

console.log(`Numbers of categories: ${categoriesRef.length}`);

//Псевдомасив треба перетворити в нормальний масив щоб використати метод 
[...categoriesRef].forEach(item => { 
  const categoryTitle = item.querySelector("h2");
  const categoryItems = item.querySelectorAll("li");

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
})
