document.getElementById('openVideo').addEventListener('click', function () {
  document.getElementById('videoModal').style.display = 'block';
  document.getElementById('videoFrame').src =
    'https://www.youtube.com/embed/IxX_QHay02M?autoplay=1&rel=0';
});

document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('videoModal').style.display = 'none';
  document.getElementById('videoFrame').src = '';
});

window.addEventListener('click', function (event) {
  if (event.target === document.getElementById('videoModal')) {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('videoFrame').src = '';
  }
});
