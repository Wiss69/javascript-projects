console.log('hello');

// Ciblage

const inputEl = document.getElementById('mynote');
const form = document.getElementById('form');
console.log(inputEl);
const myCards = document.getElementById('mycards');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = inputEl.value;
  if (inputValue.length > 10) {
    const truncateValue = inputValue.substring(0, 10) + '.....';
    // Full Value for modal
    const fullValue = inputValue;
    myCards.innerHTML += htmlNoteTemplate(truncateValue, fullValue);
  } else {
    myCards.innerHTML += htmlNoteTemplate(inputValue);
  }

  form.reset();
});

document.getElementById('mycards').addEventListener('click', (e) => {
  console.log(e.target);
  const currentTarget = e.target;
  const modalBody = document.querySelector('.modal-body');
  if (currentTarget.dataset.target === '#exampleModal') {
    const modalContent = currentTarget.previousElementSibling.dataset.value;
    modalBody.textContent = modalContent;
  }
});

function htmlNoteTemplate(inputValue, fullValue) {
  return `
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text" data-value="${fullValue}">
          ${inputValue}
        </p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
      </div>
    </div>
  </div>
  `;
}
