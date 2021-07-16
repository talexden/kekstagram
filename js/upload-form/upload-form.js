import {BODY, DESCRIPTION_INPUT, HASHTAG_INPUT, UPLOAD_FORM} from '../constants.js';
import {isEscEvent} from '../utils.js';
import {validityHashtagsString, validityDescription} from './upload-form-validation.js';
import {resetUploadForm} from '../resets.js';

const UPLOAD_INPUT = UPLOAD_FORM.querySelector('.img-upload__input');
const UPLOAD_FORM_MODAL = UPLOAD_FORM.querySelector('.img-upload__overlay');
const UPLOAD_FORM_CANCEL = UPLOAD_FORM.querySelector('.img-upload__cancel');


const onEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    // eslint-disable-next-line no-use-before-define
    closeUploadFormModal();

  }
};


const onEscPropagation = (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};


const resetFileInput = () => {
  UPLOAD_FORM_MODAL.files = '';
};


function openUploadFormModal() {
  resetUploadForm();
  UPLOAD_FORM_MODAL.classList.remove('hidden');
  BODY.classList.add('modal-open');
  window.addEventListener('keydown', onEscKeydown);
}


function closeUploadFormModal() {
  UPLOAD_FORM_MODAL.classList.add('hidden');
  BODY.classList.remove('modal-open');
  window.removeEventListener('keydown', onEscKeydown);
}


UPLOAD_INPUT.addEventListener('change', openUploadFormModal);
UPLOAD_FORM_CANCEL.addEventListener('click', closeUploadFormModal);


HASHTAG_INPUT.addEventListener('input', validityHashtagsString);
HASHTAG_INPUT.addEventListener('keydown', onEscPropagation);

DESCRIPTION_INPUT.addEventListener('input', validityDescription);
DESCRIPTION_INPUT.addEventListener('keydown', onEscPropagation);

// eslint-disable-next-line no-console
const connectModuleForm = () => console.log('module form - connected');


export {connectModuleForm, resetFileInput};
