function showLargeImage(imageSrc) {
    document.getElementById('largeImageSrc').src = imageSrc;
    document.getElementById('largeImage').style.display = 'flex';
}

document.getElementById('largeImage').addEventListener('click', function () {
    this.style.display = 'none';
});