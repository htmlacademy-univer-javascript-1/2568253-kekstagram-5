
const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const body = document.body;
const previewImage = document.querySelector('.img-upload__preview img');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const effectRadios = document.querySelectorAll('.effects__radio');
const form = document.querySelector('.img-upload__form');

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

scaleControlSmaller.addEventListener('click', () => {
  let scale = parseInt(scaleControlValue.value, 10);
  if (scale > 25) {
    scale -= 25;
    scaleControlValue.value = `${scale}%`;
    previewImage.style.transform = `scale(${scale / 100})`;
  }
});

scaleControlBigger.addEventListener('click', () => {
  let scale = parseInt(scaleControlValue.value, 10);
  if (scale < 100) {
    scale += 25;
    scaleControlValue.value = `${scale}%`;
    previewImage.style.transform = `scale(${scale / 100})`;
  }
});

effectRadios.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    const selectedEffect = event.target.value;
    previewImage.className = '';
    previewImage.classList.add(`effects__preview--${selectedEffect}`);
    const effectLevel = document.querySelector('.effect-level');
    if (selectedEffect === 'chrome' || selectedEffect === 'sepia' || selectedEffect === 'heat' || selectedEffect === 'marvin') {
      effectLevel.classList.remove('hidden');
    } else {
      effectLevel.classList.add('hidden');
    }
  });
});

