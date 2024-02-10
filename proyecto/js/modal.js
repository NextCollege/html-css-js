const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal__content')
const openModalBtn = document.getElementById('add-layer')

const openModal = () => {
  modal.showModal()
}

const closeModal = () => {
  modal.close()
}

const stopContentPropagation = (event) => {
  event.stopPropagation()
}

modal.addEventListener('click', closeModal)

modalContent.addEventListener('click', stopContentPropagation)

openModalBtn.addEventListener('click', openModal)