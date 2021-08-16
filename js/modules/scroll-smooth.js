/*Scroll Suave */
export default 
function initSmoothScroll() {
    const linksInt = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');
    function scrollToSection(e){
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    if(linksInt.length){
        linksInt.forEach((link) => {
            link.addEventListener('click' , scrollToSection);
        });
    }
}

