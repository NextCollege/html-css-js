import { state } from "./state.js";
import { LAYERS } from "./data.js";

const modalLayers = document.getElementById('modal-layers');
const sidebarLayers = document.getElementById('sidebar-layers');
const removeAllLayersBtn = document.getElementById('remove-all-layers');

removeAllLayersBtn.addEventListener('click', removeAllLayers);

export function addLayersToModal() {
  for (const layer of LAYERS) {
    const layerOption = createLayerOption(layer);

    modalLayers.appendChild(layerOption);
  }
}

function clearModalLayers() {
  modalLayers.innerHTML = '';
}

function updateModalLayers() {
  clearModalLayers();
  addLayersToModal();
}

function removeAllLayers() {
  state.layers = [];
  sidebarLayers.innerHTML = '';
  updateModalLayers();
}

const createSidebarLayer = (layer) => {
  const layerOption = document.createElement('div');
  layerOption.id = `${layer.id}-option`;

  layerOption.classList.add('collapse-card');

  const { id, name, description, image } = layer

  layerOption.innerHTML = `
    <div class="layer-config-layout">
      <div class="layer-config-layout__preview layer-config__preview">
        <img src="${image}" alt="${name} layer" />
      </div>
      <div class="layer-config-layout__content">
        <h3 class="layer-config__title">${name}</h3>
        <p class="layer-config__description">
          ${description}
        </p>
      </div>
      <div class="layer-config-layout__footer layer-config__footer">
        <div class="layer-opacity">
          <label for="opacity">Opacity</label>
          <input id="opacity" type="range" value="100" />
        </div>
        <button id="remove-${id}-btn" class="button button--ghost button--red">
          Remove
        </button>
      </div>
    </div>
  `;

  const removeLayerButton = layerOption.querySelector(`#remove-${id}-btn`);

  removeLayerButton.addEventListener('click', () => {
    state.layers = [...state.layers.filter((layer) => layer.id !== id)];
    updateModalLayers();
    layerOption.remove();
  })

  return layerOption;
}

const createLayerOption = (layer) => {
  const layerOption = document.createElement('div');
  layerOption.classList.add('modal-layer');
  layerOption.id = layer.id;

  const { id, name, description, image } = layer
  const isActive = state.layers.find((layer) => layer.id === id);

  layerOption.innerHTML = `
    <div>
      <p class="modal-layer__title">${name}</p>
      <p class="modal-layer__description">${description}</p>
    </div>
    <div class="modal-layer__option">
      <div class="modal-layer__preview">
        <img src="${image}" alt="${name} layer" />
      </div>
      <button id="toggle-${id}-btn" class="button button--ghost button--blue">
        ${ isActive ? 'Remove layer' : 'Add layer'}
      </button>
    </div>
  `;

  const addLayerButton = layerOption.querySelector(`#toggle-${id}-btn`);

  addLayerButton.addEventListener('click', () => {
    const isActive = state.layers.find((layer) => layer.id === id);

    if(isActive) {
      const layerOption = document.getElementById(`${id}-option`);
      layerOption.remove();

      state.layers = [...state.layers.filter((layer) => layer.id !== id)];
      addLayerButton.textContent = 'Add layer';
      return;
    }

    state.layers = [...state.layers, layer]
    addLayerButton.textContent = 'Remove layer';
    const sidebarLayer = createSidebarLayer(layer, layerOption);
    sidebarLayers.appendChild(sidebarLayer);
  });

  return layerOption;
}
