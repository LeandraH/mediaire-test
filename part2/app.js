let uneditedImage;
let imageDisplay;
window.onload = () => {
  imageDisplay = document.getElementById('image');
};

const showPicture = () => {
  let file = document.getElementById('image-file').files[0];
  let reader = new FileReader();
  reader.onload = () => {
    uneditedImage = reader.result;
    imageDisplay.src = uneditedImage;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    document.getElementById('warning').textContent = 'Sorry, something went wrong. Are you sure this is an image file?';
  }
};

const grayScale = () => {
  if (!imageDisplay.style.filter.includes('grayscale')) {
    imageDisplay.style.filter += ' grayscale(100%)';
    imageDisplay.style.WebkitFilter = 'grayscale(100 %)';
  }
};

const adjustBrightness = (val) => {
  imageDisplay.style.filter += ` brightness(${val})`;
};

const adjustContrast = (val) => {
  imageDisplay.style.filter += ` contrast(${val})`;
};

const adjustRotation = (val) => {
  imageDisplay.style.transform = `rotate(${val}deg)`;
};

const reset = () => {
  imageDisplay.style.filter = '';
  imageDisplay.style.WebkitFilter = '';
  imageDisplay.style.transform = '';
};