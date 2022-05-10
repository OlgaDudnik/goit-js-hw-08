import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');
const storageName = 'feedback-form-state';

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!email.value || !message.value) {
    return;
  }

  console.log(JSON.parse(localStorage.getItem(storageName)));
  form.reset();
  localStorage.removeItem(storageName);
});

form.addEventListener('input', throttle(updateStorage, 500));

function updateStorage() {
  const formStorage = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(storageName, JSON.stringify(formStorage));
}

function getEmailFromStorage() {
  const storageData = localStorage.getItem(storageName);

  if (storageData !== null) {
    const storageDataObject = JSON.parse(storageData);
    return storageDataObject.email;
  }
  return '';
}

function getMessageFromStorage() {
  const storageData = localStorage.getItem(storageName);

  if (storageData !== null) {
    const storageDataObject = JSON.parse(storageData);
    return storageDataObject.message;
  }
  return '';
}

document.addEventListener('DOMContentLoaded', function () {
  email.value = getEmailFromStorage();
  message.value = getMessageFromStorage();
});
