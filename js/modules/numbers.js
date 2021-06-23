export default function initNumbers() {


    function animatesNumbers() {
        const numbers = document.querySelectorAll('[data-number]');

        numbers.forEach((n) => {
            const total = +n.innerText;
            let start = 0;
            const i = parseInt(total / 90);
            const timer = setInterval(() => {
                start += i;
                n.innerText = start;

                if (start > total) {
                    n.innerText = total;
                    clearInterval(timer)
                }
            }, 50 * Math.random())
        });
    }

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {//scroll-anime
            observer.disconnect();
            animatesNumbers();
        }
    }

    const observerTarget = document.querySelector('.numbers');
    const observer = new MutationObserver(handleMutation);

    observer.observe(observerTarget, { attributes: true })

}