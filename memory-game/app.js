console.log('hello!');

const container = document.querySelector('.container');
const cards = document.querySelectorAll('.img-c');
container.dataset.imgOne = '';
var success = 0;
var failure = 0;
var i = 0;
const images = [
  'eagle',
  'elephant',
  'tiger',
  'lion',
  'eagle',
  'elephant',
  'tiger',
  'lion',
];

shuffle(images);
console.log(shuffle(images));
cards.forEach((card) => {
  card.innerHTML = HtlmImgTemplate(images[i]);
  i++;
  console.log(i);
});
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
        const score = document.querySelector('.score');
        success++;
        score.innerHTML = success;

        container.dataset.imgOne = '';
        container.dataset.imgTwo = '';
        cards.forEach((card) => {
          if (card.dataset.state === 'selected') {
            card.dataset.state = '';
          }
        });
        setTimeout(function () {
          alert('ok');
        }, 500);
      } else {
        setTimeout(function () {
          const error = document.querySelector('.error');
          failure++;
          error.innerHTML = failure;
          container.dataset.imgOne = '';
          container.dataset.imgTwo = '';
          cards.forEach((card) => {
            if (card.dataset.state === 'selected') {
              card.classList.add('overlay');
            }
          });
          alert('erreur');
        }, 1000);
      }
    }
  }
});

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function HtlmImgTemplate(image) {
  return `<img
    class="img-fluid"
    src="${image}.jpg"
    data-name="${image}"
    alt="${image}"
  />`;
}
