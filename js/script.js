import SmoothScroll from './modules/scroll-smooth.js';
import Accordion from './modules/accordionList.js';
import Tab from './modules/tabs.js';
import {initBackground} from './modules/background.js';
import {initModal} from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdownMenu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js'
import initFetchAnimals from './modules/fetch-animals.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimationScroll from './modules/scroll-anime.js';


const smoothScroll =  new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tab = new Tab('[data-tab="menu"] li' , '[data-tab="content"] section');
tab.init();


initBackground();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimals();
initFetchBitcoin();
initAnimationScroll();





