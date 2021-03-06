import outsideClick from './outsideclick.js'

export default
    function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    function handleClick(e) {
        e.preventDefault();
        this.classList.add('ativo');
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('ativo')
        });
    }

    dropdownMenus.forEach((item) => {
        ['touchstart', 'click'].forEach((itemEvent) => {
            item.addEventListener(itemEvent, handleClick)
        });
    });
}



/*
Outra forma:

dropdownMenus.forEach((item)=>{
    item.addEventListener('touchstart' , handleClick)
    item.addEventListener('click' , handleClick)
});


*/