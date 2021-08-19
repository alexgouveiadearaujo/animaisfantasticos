export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
  //add events a accordion
  addAccordionEvent() {
    this.accordionList.forEach((i) => {
      i.addEventListener("click", () => this.toggleAccordion(i));
    });
  }

  //inicia função
  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);  //ativar primeiro item
      this.addAccordionEvent();
    }
  }
}
