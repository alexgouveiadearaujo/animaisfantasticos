export default class SmoothScroll {
    constructor(links , options){
        this.linksInt = document.querySelectorAll(links);
        if(options === undefined){
            this.options = {behavior: 'smooth',block: 'start'};
        }else{
            this.options = options;
        }

        this.scrollToSection =  this.scrollToSection.bind(this);
    }

    scrollToSection(e){
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView(this.options);
    }

    addLinkEvent(){
        this.linksInt.forEach((link) => {
            link.addEventListener('click' , this.scrollToSection);
        });
    }

    init(){
        if(this.linksInt.length) this.addLinkEvent();
        return this;
    }
}
