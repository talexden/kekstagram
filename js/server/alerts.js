import './alerts-message.js';
import {isEscEvent} from '../utils.js';

let alert = document.querySelector('.alert');
let alertWindow = alert.querySelector('div');
let alertBtn = alert.querySelector('button');


const showAlert = (classElement) => {
  alert = document.querySelector(`.${classElement}`);
  alertWindow = alert.querySelector('div');
  alertBtn = alert.querySelector('button');
  // eslint-disable-next-line no-use-before-define
  openAlert(alert);
};


const openUpdateFailAlert = () => {
  showAlert('update-fail');
};

const onNoPopupClickEvent = (evt) => {
  const target = evt.target;
  const isPopup = target === alertWindow || alertWindow.contains(target);
  const isButton = target === alertBtn;
  return !isPopup && !isButton;
};


const onButtonClickEvent = (evt) => {
  const target = evt.target;

  if (target === alertBtn) {
    evt.stopPropagation();
    // eslint-disable-next-line no-use-before-define
    closeAlert(alert);
  }
};


const onEscapeAlert = (evt) => {
  if (isEscEvent(evt)) {
    // eslint-disable-next-line no-use-before-define
    closeAlert(alert);
  }
};

const onClickOutside = (evt) => {
  if (onNoPopupClickEvent(evt)) {
    // eslint-disable-next-line no-use-before-define
    closeAlert(alert);
  }
};


// здесь function потому что эта функция используется выше
function openAlert(element) {
  element.classList.remove('hidden');
  element.addEventListener('click', onButtonClickEvent);
  document.addEventListener('keydown', onEscapeAlert);
  document.addEventListener('click', onClickOutside);
}


// здесь function потому что эта функция используется выше
function closeAlert(element) {
  element.classList.add('hidden');
  element.removeEventListener('click', onButtonClickEvent);
  document.removeEventListener('keydown', onEscapeAlert);
  document.removeEventListener('click', onClickOutside);
}


export {showAlert, openUpdateFailAlert};