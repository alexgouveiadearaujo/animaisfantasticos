export 
function initBackground(){
    const button = document.querySelector('.menu button');
    function activeBackground() {
        const ativar = button.classList.toggle('ativo');
        if (ativar) {
            document.body.classList.add('mudarBg');
            button.textContent = 'Lumos';
        }
        else {
            document.body.classList.remove('mudarBg');
            button.textContent = 'Nox';
        }
    };
    button.addEventListener('click', activeBackground);
};




// const a = document.querySelectorAll('.js_menu a');
// const button = a[a.length - 1]
// function activeBackground() {
//     const ativar = button.classList.toggle('ativo');
//     if (ativar) {
//         document.body.classList.add('mudarBg');
//         button.textContent = 'Lumos';
//     }
//     else {
//         document.body.classList.remove('mudarBg');
//         button.textContent = 'Nox';
//     }
// };
// button.addEventListener('click', activeBackground);
