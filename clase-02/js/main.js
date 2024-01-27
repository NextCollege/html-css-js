import { addLayersToModal } from './modules/layer.js';
import { loadInitialMap } from './modules/leaflet.js'
import { loadModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', () => {
  loadInitialMap();
  loadModal();
  addLayersToModal();
})
