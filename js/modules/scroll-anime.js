
/*Animação Scroll */
export default 
function initAnimationScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const calcWindow = innerHeight * 0.6;
    
    if(sections.length){
    
        function animation(){
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top;
                const sectionVisible = (sectionTop - calcWindow) < 0;
                if(sectionVisible) {
                    section.classList.add('ativo');
                }
                else if(section.classList.contains('ativo')){
                    section.classList.remove('ativo');
                }
            });
        };
        
        animation();
        
        window.addEventListener('scroll' , animation);
    };

};


