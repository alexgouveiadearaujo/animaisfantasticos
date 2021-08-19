import initTab from './modules/tabs.js'
import SmoothScroll from './modules/scroll-smooth.js';
import initAnimationScroll from './modules/scroll-anime.js';
import activeAccordion from './modules/accordionList.js';
import {initBackground} from './modules/background.js';
import {initModal} from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdownMenu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js'
import initFetchAnimals from './modules/fetch-animals.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js';


const smoothScroll =  new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();



initTab();
initAnimationScroll();
activeAccordion();
initBackground();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimals();
initFetchBitcoin();





