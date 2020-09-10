const modalOverlay = document.querySelector('.modal-overlay');
const dishes = document.querySelectorAll('.dish');

for(let dish of dishes){
    dish.addEventListener('click', function(){
        const cardId = dish.getAttribute('id');
        window.location.href = `/recipe?id=${cardId}`;
    })
}