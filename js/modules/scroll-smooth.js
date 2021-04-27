/*Scroll Suave */
export default 
function initSmoothScroll() {

    const linksInt = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');
    if(linksInt.length){
        function scrollToSection(e){
            e.preventDefault();
            const href = e.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        
        };
        
        linksInt.forEach((link) => {
            link.addEventListener('click' , scrollToSection);
        });
    };
};
//initSmoothScroll();
