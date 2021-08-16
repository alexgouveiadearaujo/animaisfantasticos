import initNumbers from './numbers.js';


export default function initFetchAnimals(){
    function createAnimal(animal){
        const div = document.createElement('div');
        div.classList.add('number-animal');
        div.innerHTML = `<h3>${animal.specie}</h3><span data-number >${animal.total}</span>`;
        return div;
    }
    
    async function fetchAnimais(url){
        try{
            const animaisResponse =  await fetch(url);
            const animaisJson = await animaisResponse.json();
            const numGrid = document.querySelector('.numbers-grid');

            animaisJson.forEach((animal) => {
            const divAnimal =  createAnimal(animal);
            numGrid.appendChild(divAnimal);
            });

            initNumbers();
        }catch (err) { 
            console.log(Error(err));
        }
    }
    fetchAnimais('./js/animaisApi.json');
}