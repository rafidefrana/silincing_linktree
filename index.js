const shareButton = document.getElementById('share');
const shareYt = document.getElementById('share-yt');
const shareTele = document.getElementById('share-tele');
const shareIg = document.getElementById('share-ig');
const shareLk = document.getElementById('share-linkedin');
const shareWa = document.getElementById('share-wa');

shareButton.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'Bagikan ke Temen-Temen kalian',
      url: 'https://github.com/rafidefrana',
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    shareDialog.classList.add('is-open');
  }
  
});



shareYt.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'Bagikan ke Temen-Temen kalian',
      url: 'https://www.youtube.com/',
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    shareDialog.classList.add('is-open');
  }
  
});


shareTele.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'Bagikan ke Temen-Temen kalian',
      url: 'https://web.telegram.org/a/',
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    shareDialog.classList.add('is-open');
  }
  
});


shareIg.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'Bagikan ke Temen-Temen kalian',
      url: 'https://www.instagram.com/',
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    shareDialog.classList.add('is-open');
  }
  
});


shareLk.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'Bagikan ke Temen-Temen kalian',
      url: 'https://www.linkedin.com/',
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    shareDialog.classList.add('is-open');
  }
  
});


shareWa.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'Bagikan ke Temen-Temen kalian',
      url: 'https://www.whatsapp.com/',
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    shareDialog.classList.add('is-open');
  }
  
});

