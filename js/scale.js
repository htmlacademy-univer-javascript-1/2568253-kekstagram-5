import { SCALE_FACTOR, SCALE_STEP, ScaleValue } from './consts.js';

const uploadFormElement = document.querySelector('.img-upload__form');
const uploadPicturePreviewElement = uploadFormElement.querySelector('.img-upload__preview img');
const scaleControlSmallerBtnElement = uploadFormElement.querySelector('.scale__control--smaller');
const scaleControlBiggerBtnElement = uploadFormElement.querySelector('.scale__control--bigger');
const scaleControlInputElement = uploadFormElement.querySelector('.scale__control--value');

const changeScale = (increment) => {
  let scaleValue = Number(scaleControlInputElement.value.slice(0, -1));
  const newScaleValue = scaleValue + increment;

  if (newScaleValue >= ScaleValue.MIN && newScaleValue <= ScaleValue.MAX) {
    scaleControlInputElement.value = `${newScaleValue}%`;
    uploadPicturePreviewElement.style.transform = `scale(${newScaleValue * SCALE_FACTOR / 100})`; // Применяем масштаб
  }
};

const onScaleControlSmallerBtnClick = () => {
  changeScale(-SCALE_STEP);
};

const onScaleControlBiggerBtnClick = () => {
  changeScale(SCALE_STEP);
};

const destroyScaleControl = () => {
  scaleControlSmallerBtnElement.removeEventListener('click', onScaleControlSmallerBtnClick);
  scaleControlBiggerBtnElement.removeEventListener('click', onScaleControlBiggerBtnClick);
  uploadPicturePreviewElement.style.transform = '';
};

const initScaleControl = () => {
  scaleControlInputElement.value = `${ScaleValue.MAX}%`;
  scaleControlSmallerBtnElement.addEventListener('click', onScaleControlSmallerBtnClick);
  scaleControlBiggerBtnElement.addEventListener('click', onScaleControlBiggerBtnClick);
};

export { destroyScaleControl, initScaleControl };
