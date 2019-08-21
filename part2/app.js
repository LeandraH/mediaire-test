const showPicture = () => {
  let file = document.getElementById('image-file').files[0];
  let reader = new FileReader();
  reader.onload = () => {
    document.getElementById('image').src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    document.getElementById('warning').textContent = 'Sorry, something went wrong. Are you sure this is an image file?';
  }
};
