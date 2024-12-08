import noUiSlider from 'nouislider';
import 'vendor/nouislider/nouislider.css';

const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const body = document.body;
const previewImage = document.querySelector('.img-upload__preview img');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const effectRadios = document.querySelectorAll('.effects__radio');
const effectLevel = document.querySelector('.effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectSlider = document.querySelector('.effect-level__slider');
const form = document.querySelector('.img-upload__form');

let scale = 100;

// Инициализация слайдера для регулировки интенсивности эффектов
noUiSlider.create(effectSlider, {
  start: 100,
  range: {
    'min': [0],
    'max': [100],
  },
  step: 1,
  connect: 'lower',
});

function openImageEditForm() {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

function closeImageEditForm() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
  previewImage.src = 'img/upload-default-image.jpg';
  scaleControlValue.value = '100%';
  effectRadios.forEach(radio => radio.checked = false);
  effectRadios[0].checked = true;
  effectLevel.classList.add('hidden');
}

uploadFileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
      openImageEditForm();
    };
    reader.readAsDataURL(file);
  }
});

uploadCancel.addEventListener('click', closeImageEditForm);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeImageEditForm();
  }
});

// Обработка кнопок увеличения/уменьшения масштаба
scaleControlSmaller.addEventListener('click', () => {
  if (scale > 25) {
    scale -= 25;
    scaleControlValue.value = `${scale}%`;
    previewImage.style.transform = `scale(${scale / 100})`;
  }
});

scaleControlBigger.addEventListener('click', () => {
  if (scale < 100) {
    scale += 25;
    scaleControlValue.value = `${scale}%`;
    previewImage.style.transform = `scale(${scale / 100})`;
  }
});

// Эффекты
effectRadios.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    const selectedEffect = event.target.value;
    previewImage.className = '';
    previewImage.classList.add(`effects__preview--${selectedEffect}`);

    if (selectedEffect === 'chrome' || selectedEffect === 'sepia' || selectedEffect === 'heat' || selectedEffect === 'marvin') {
      effectLevel.classList.remove('hidden');
      effectSlider.noUiSlider.set(100);
    } else {
      effectLevel.classList.add('hidden');
      previewImage.style.filter = '';
    }
  });
});


effectSlider.noUiSlider.on('update', (values) => {
  const value = values[0];
  effectLevelValue.value = value;
  const effectType = document.querySelector('.effects__radio:checked').value;

  if (effectType === 'chrome') {
    previewImage.style.filter = `grayscale(${value / 100})`;
  } else if (effectType === 'sepia') {
    previewImage.style.filter = `sepia(${value / 100})`;
  } else if (effectType === 'marvin') {
    previewImage.style.filter = `invert(${value}%)`;
  } else if (effectType === 'phobos') {
    previewImage.style.filter = `blur(${value / 10}px)`;
  } else if (effectType === 'heat') {
    previewImage.style.filter = `brightness(${1 + value / 100})`;
  }
});
