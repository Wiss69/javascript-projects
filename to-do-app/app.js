console.log('hello');

// Cibler le form

const form = document.getElementById('form');
const divInputForm = form.querySelector('.additem__input');
const inputForm = divInputForm.querySelector('[id=newitem]');

// List item
const listItemsContainer = document.querySelector('.list');
const newItemInjectionPoint = listItemsContainer.querySelector('ul');
const itemEl = newItemInjectionPoint.querySelector('li');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItemCloneTemplate = itemEl.cloneNode(true);
  const newItemName = newItemCloneTemplate.querySelector('span');
  inputValue = inputForm.value;
  newItemName.textContent = inputValue;
  newItemInjectionPoint.appendChild(newItemCloneTemplate);
});

listItemsContainer.addEventListener('click', (e) => {
  currentEl = e.target;
  if (currentEl.classList.contains('erase')) {
    const item = currentEl.closest('.item');
    item.remove();
  }

  if (currentEl.classList.contains('done')) {
    const item = currentEl.closest('.item');
    currentEl.style.display = 'none';
    console.log(item);
    item.style.backgroundColor = 'yellowgreen';
  }
});
