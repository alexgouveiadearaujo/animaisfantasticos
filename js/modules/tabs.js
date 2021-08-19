export default
 class Tab {
     constructor(menu , content){
         this.tabMenu = document.querySelectorAll(menu);
         this.tabContent = document.querySelectorAll(content);
         this.activeClass = 'ativo';

     }

     activeTab(index) {
        this.tabContent.forEach((section) => {
            section.classList.remove(this.activeClass);
        });
        const direcao = this.tabContent[index].dataset.anime;
        this.tabContent[index].classList.add(this.activeClass , direcao);
    }
    //add events as tabs
    addTabEvent(){
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => this.activeTab(index));
        });
    }

    init(){
        if (this.tabMenu.length && this.tabContent.length){
            this.activeTab(0);
            this.addTabEvent();
        } 
    }
}




