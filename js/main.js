import { getPhotos } from './data.js';
import { renderThumbnails } from './render-thumbnails.js';

const photos = getPhotos();
renderThumbnails(photos);

