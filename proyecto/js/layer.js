import { LAYERS } from "./data.js"

const sidebarLayers = document.querySelector('.sidebar-layers')
const modalLayers = document.querySelector('.modal__content')

// export const printSidebarLayers = () => {
//   for (const layer of LAYERS) {
//     const layerOption = createSidebarLayer(layer)

//     sidebarLayers.appendChild(layerOption)
//   }
// }

export const printModalLayers = () => {
  for (const layer of LAYERS) {
    const layerOption = createModalLayer(layer)

    modalLayers.appendChild(layerOption)
  }
}

const createSidebarLayer = (layer) => {
  const { name, description, image } = layer

  const sidebarLayer = document.createElement('div')
  sidebarLayer.classList.add('layer-config-layout', 'layer-config')

  sidebarLayer.innerHTML = `
    <div class="layer-config-layout__preview layer-config__preview">
      <img src="${image}" alt="Capa de ${name}" />
    </div>
    <div class="layer-config-layout__content">
      <h3 class="layer-config__title">${name}</h3>
      <p class="layer-config__descripcion">
        ${description}
      </p>
    </div>
    <footer class="layer-config__footer">
      <label for="opacity">Opacity:</label>
      <input id="opacity" type="range" value="100" />
    </footer>
  `

  return sidebarLayer
}

const createModalLayer = (layer) => {
  const { name, description } = layer

  const modalLayer = document.createElement('div')

  modalLayer.innerHTML = `
    <div>
      <h3>${name}</h3>
      <p>
        ${description}
      </p>
    </div>
    <button class="add-layer">Add layer</button>
  `

  const addLayerBtn = modalLayer.querySelector('.add-layer')

  addLayerBtn.addEventListener('click', ()=> {
    const layerOption = createSidebarLayer(layer)

    sidebarLayers.appendChild(layerOption)
  })

  return modalLayer
}