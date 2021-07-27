import initNumbers from './numbers.js';


export default function initFetch(){
    
    
    
    async function fetchAnimais(url){
        const animaisResponse =  await fetch(url);
        const animaisJson = await animaisResponse.json();
        const numGrid = document.querySelector('.numbers-grid');

        animaisJson.forEach(animal => {
           const divAnimal =  createAnimal(animal);
           numGrid.appendChild(divAnimal);
        });

        initNumbers();

    }

    function createAnimal(animal){

        const div = document.createElement('div');
        div.classList.add('number-animal');

        div.innerHTML = `<h3>${animal.specie}</h3><span data-number >${animal.total}</span>`;

        return div;
    }
    
    fetchAnimais('./js/animaisApi.json');



}