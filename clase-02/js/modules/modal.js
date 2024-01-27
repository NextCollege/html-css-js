export function loadModal() {
  const openModalButton = document.querySelector('[data-type="open-modal"]');
  
  const modal = document.querySelector('.modal');
  
  const modalContent = document.querySelector('.modal__content');
  
  openModalButton.addEventListener('click', () => {
    modal.showModal();
  });
  
  modal.addEventListener('click', () => {
    modal.close();
  });
  
  modalContent.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}