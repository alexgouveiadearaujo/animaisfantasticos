export default
    function initTooltip() {

    const tolltips = document.querySelectorAll('[data-tooltip]');

    tolltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });

    function onMouseOver(e) {
        const tooltipBox = createTooltipBox(this);
        tooltipBox.style.top = e.pageY + 'px';
        tooltipBox.style.left = e.pageX + 'px';

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);

        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);
    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        },
    };

    const onMouseMove = {
        handleEvent(e) {
            this.tooltipBox.style.top = e.pageY + 20 + 'px';
            this.tooltipBox.style.left = e.pageX + 20 + 'px';
        },
    };

    function createTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }

}
