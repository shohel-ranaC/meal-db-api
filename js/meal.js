const loadMeal = (item) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals));
};

const displayMeal = (meals) => {
  const divContainer = document.getElementById("card-container");
  divContainer.innerText = "";
  for (const meal of meals) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card", "w-96", "bg-base-100", "shadow-xl", "mt-10");
    newDiv.innerHTML = `
    <figure>
    <img
      src="${meal.strMealThumb}"
      alt="Shoes"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${meal.strMeal}
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>${meal.strInstructions.substring(0, 100)}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>    
    `;
    divContainer.appendChild(newDiv);
    // console.log(meal);
  }
};

const searchItem = () => {
  const inputField = document.getElementById("input").value;
  // console.log(inputField);
  loadMeal(inputField);
};
// loadMeal("pasta");
