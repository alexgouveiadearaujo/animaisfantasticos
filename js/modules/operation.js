export default function initOperation(){
    
    const operation = document.querySelector('[data-week]');
    const daysWeek = operation.dataset.week.split(',').map(Number);
    const weekTime = operation.dataset.schedule.split(',').map(Number);
    
    const dateNow = new Date();
    const dayNow = dateNow.getDay();
    const timeNow = dateNow.getHours();

    const openWeek = daysWeek.indexOf(dayNow) !== -1
    const openschedule = (timeNow >= weekTime[0] && timeNow < weekTime[1]);
    
    openWeek && openschedule ? operation.classList.add('open') : null;


}










