import { generateUniqueIds, createPhotoDescription } from './data.js';

const photoIds = generateUniqueIds(25);

const photoUrls = photoIds.map((id) => `photos/${id}.jpg`);

const Photos = photoIds.map((id, index) => createPhotoDescription(id, photoUrls[index], index * 30)); // Для каждого фото стартуем ID комментариев с уникальной базой

console.log(Photos);
