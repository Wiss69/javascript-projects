console.log('hello!');

const container = document.querySelector('.container');
const cards = document.querySelectorAll('.img-c');
container.dataset.imgOne = '';
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('img-c')) {
    const card = e.target;
    console.log(card);

    const img = card.querySelector('.img-fluid');
    const imgName = img.dataset.name;
    card.classList.remove('overlay');
    if (container.dataset.imgOne.length != '') {
      container.dataset.imgTwo = imgName;
      card.dataset.state = 'selected';
    } else {
      container.dataset.imgOne = imgName;
      card.dataset.state = 'selected';
    }

    if (container.dataset.imgOne && container.dataset.imgTwo) {
      if (container.dataset.imgOne === container.dataset.imgTwo) {
        setTimeout(function () {
          alert('ok');
        }, 500);
        container.dataset.imgOne = '';
        container.dataset.imgTwo = '';
        cards.forEach((card) => {
          if (card.dataset.state === 'selected') {
            card.dataset.state = '';
          }
        });
      } else {
        setTimeout(function () {
          cards.forEach((card) => {
            if (card.dataset.state === 'selected') {
              card.classList.add('overlay');
            }
          });
          alert('erreur');
        }, 1000);
        container.dataset.imgOne = '';
        container.dataset.imgTwo = '';
      }
    }
  }
});
