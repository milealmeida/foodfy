const modalOverlay = document.querySelector('.modal-overlay');
const dishes = document.querySelectorAll('.dish');

for(let dish of dishes){
    dish.addEventListener('click', function(){
        const imgId = dish.getAttribute('id');
        const title = dish.getAttribute('idItem');
        const cooker = dish.getAttribute('idCooker');
        
        modalOverlay.classList.add('active'); 
        modalOverlay.querySelector('img').src = `/assets/${imgId}`;
        document.getElementById('title-modal').innerHTML = title;
        document.getElementById('cooker-modal').innerHTML = cooker;
    })

    document.querySelector('.modal-close').addEventListener('click', function(){
        modalOverlay.classList.remove('active');
    })
}