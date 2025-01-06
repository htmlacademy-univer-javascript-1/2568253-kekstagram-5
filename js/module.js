import { generatePhotoArray } from './data.js';
import { openPicture } from './openBigPic.js';

export const getRenderedCards = () => {
  const pictureTemplate = document
    .querySelector('#picture')
    .content.querySelector('.picture');
  const picturesContainer = document.querySelector('.pictures');
  const randomPosts = generatePhotoArray(25);
  const picturesFragment = document.createDocumentFragment();
  randomPosts.forEach(({ url, description, likes, comments }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('img').src = url;
    picture.querySelector('img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.addEventListener('click', (evt) => {
      openPicture(evt, url, description, likes, comments);
    });
    picturesFragment.append(picture);
  });
  picturesContainer.append(picturesFragment);
};
