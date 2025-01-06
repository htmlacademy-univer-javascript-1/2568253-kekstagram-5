function validateHashtags(hashtags) {
  const regex = /(^#[A-Za-zА-Яа-я0-9]{1,19}$)/;
  const tags = hashtags.split(' ');
  for (const tag of tags) {
    if (!regex.test(tag)) {
      return false;
    }
  }
  return true;
}

function validateDescription(description) {
  if (description.trim() === '' || description.length > 140) {
    return false;
  }
  return true;
}

function validateForm(form) {
  const hashtagsInput = form.querySelector('.text__hashtags');
  const descriptionInput = form.querySelector('.text__description');
  const fileInput = form.querySelector('#upload-file');
  const hashtagsValid = validateHashtags(hashtagsInput.value);
  const descriptionValid = validateDescription(descriptionInput.value);
  let isValid = true;

  if (!hashtagsValid) {
    isValid = false;
    console.log('Некорректные хэш-теги!');
  }
  if (!descriptionValid) {
    isValid = false;
    console.log('Описание должно быть не пустым и не более 140 символов!');
  }
  if (!fileInput.files.length) {
    isValid = false;
    console.log('Выберите изображение для загрузки!');
  }

  return isValid;
}

document.getElementById('upload-select-image').addEventListener('submit', function (event) {
  event.preventDefault();
  const form = this;
  if (validateForm(form)) {
    console.log('Форма прошла валидацию!');
    form.submit();
  } else {
    console.log('Пожалуйста, исправьте ошибки в форме.');
  }
});
