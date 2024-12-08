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

  const errorMessages = [];

  if (!hashtagsValid) {
    isValid = false;
    errorMessages.push('Некорректные хэш-теги!');
  }
  if (!descriptionValid) {
    isValid = false;
    errorMessages.push('Описание должно быть не пустым и не более 140 символов!');
  }
  if (!fileInput.files.length) {
    isValid = false;
    errorMessages.push('Выберите изображение для загрузки!');
  }

  if (!isValid) {
    showErrorMessages(errorMessages);
  }

  return isValid;
}

function showErrorMessages(messages) {
  const errorContainer = document.querySelector('.error-messages');
  errorContainer.innerHTML = '';
  messages.forEach(message => {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;
    errorContainer.appendChild(errorElement);
  });
}

document.getElementById('upload-select-image').addEventListener('submit', function (event) {
  event.preventDefault();
  const form = this;
  if (validateForm(form)) {
    // Если форма прошла валидацию, можно отправить ее
    form.submit();
  }
});
