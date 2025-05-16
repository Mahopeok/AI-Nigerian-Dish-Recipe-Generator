function displayRecipe(response) {

new Typewriter('#recipe', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:""
});

}

function generateRecipe(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "bd13391t3d87a406o7b70e7f7fa17f8e";
  let prompt = `User instruction: Generate a Nigerian dish recipe for ${userInput.value}`;    
  let context = "You are a professional Nigerian Chef with recognised and celerated recipes. Generate your best recipes in a basic HTML format without including the word 'HTML'. Make sure to follow the user instructions and sign at the end of the recipe with 'Shecodes AI' in <strong> tag."; 
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="blink">⏳Generating your recipe for ${userInput.value}...<div/>`;
axios.get(apiUrl).then(displayRecipe);


}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe); 