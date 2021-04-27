import initTab from './modules/tabs.js'
import initSmoothScroll from './modules/scroll-smooth.js';
import initAnimationScroll from './modules/scroll-anime.js';
import activeAccordion from './modules/accordionList.js';
import {initBackground} from './modules/background.js';
import {initModal} from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdownMenu.js'

initTab();
initSmoothScroll();
initAnimationScroll();
activeAccordion();
initBackground();
initModal();
initTooltip();
initDropdownMenu();



/*
exportar mais de uma funcao:
import {initBackground }from './modules/background.js';
import {teste1 , teste2 }from './modules/background.js';

1funcao = export default
2funcoes ou mais = export
*/




