const addPhotoBtn = document.getElementById('addPhotoBtn');
const photoArea = document.getElementById('photo-area');

addPhotoBtn.addEventListener('click', () => {
  const url = prompt('Введите URL фотографии');
  if (url) {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Пользовательское фото';
    photoArea.appendChild(img);
  }
});
