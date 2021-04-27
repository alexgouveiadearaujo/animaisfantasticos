export
function initModal(){

    const openButton = document.querySelector('[data-modal="abrir"]');
    const closeButton = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
   
   if(openButton && closeButton && containerModal){
       function toggleModal(e){
           e.preventDefault();
           containerModal.classList.toggle('ativo');
       
       };
       
    //    function closeModal(){
    //        containerModal.classList.remove('ativo');
    //    };
       
       function clickOutsideModal(e){
           if(e.target === this) toggleModal(e);
       };
       
       openButton.addEventListener('click' , toggleModal);
       closeButton.addEventListener('click' , toggleModal);
       containerModal.addEventListener('click' , clickOutsideModal);
   };
  

 };


