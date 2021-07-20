import {
  SCALE_CONTROL_VALUE,
  IMAGE_UPLOAD_PREVIEW,
  MIN_SCALE,
  MAX_SCALE,
  SCALE_STEP,
  SCALE_DEFAULT
} from '../constants.js';


const setScaleStyle = (value) => {
  IMAGE_UPLOAD_PREVIEW.style = `transform: scale(${value})`;
};

let scaleValue = SCALE_DEFAULT;

const scaleControlEvent = (evt) => {
  const target = evt.target;

  if (target.classList.contains ('scale__control--smaller') && scaleValue > MIN_SCALE) {
    scaleValue -= SCALE_STEP;
  }
  if (target.classList.contains ('scale__control--bigger') && scaleValue < MAX_SCALE) {
    scaleValue += SCALE_STEP;
  }
  if (scaleValue < MIN_SCALE) {scaleValue = MIN_SCALE;}
  if (scaleValue > MAX_SCALE) {scaleValue = MAX_SCALE;}
  SCALE_CONTROL_VALUE.value = `${scaleValue * 100}%`;
  setScaleStyle(scaleValue);
};


const getScaleValue = () => scaleValue;

const resetScaleValue = () => {
  scaleValue = SCALE_DEFAULT;
  setScaleStyle(SCALE_DEFAULT);
  SCALE_CONTROL_VALUE.value = `${scaleValue * 100}%`;
};


export {scaleControlEvent, resetScaleValue, getScaleValue};