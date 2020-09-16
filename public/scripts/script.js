const dishes = document.querySelectorAll('.dish');
const hideShow = document.querySelectorAll('.option');
const recipeInfos = document.querySelectorAll('.recipe-hide-show');

for(let i=0; i < dishes.length; i++) {
    const recipe = dishes[i];
    recipe.addEventListener('click', () => {
        window.location.href = `/recipes/${i}`
    });
}

for (const option in hideShow) {
    hideShow[option].addEventListener("click", function() {
        if(recipeInfos[option].classList.contains('hidden')) {
            recipeInfos[option].classList.remove('hidden');

            hideShow[option].innerHTML = 'ESCONDER';
        } else {
            recipeInfos[option].classList.add('hidden');
            
            hideShow[option].innerHTML = 'MOSTRAR';
        }
    })
}





