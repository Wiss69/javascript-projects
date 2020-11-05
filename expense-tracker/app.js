console.log('hello');

const InputsContainer = document.querySelectorAll('.form-group');
const nameInput = document.querySelector('[name="name"]');
const dateInput = document.querySelector('[id="date"]');
const amountInput = document.querySelector('[id="number"]');
console.log(nameInput, dateInput, amountInput);
const tbodyEl = document.querySelector('table > tbody');

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get values
  const nameValue = nameInput.value;
  const dateValue = dateInput.value;
  const amountValue = amountInput.value + '$';

  const htmlTemplate = htmlRow(nameValue, dateValue, amountValue);

  tbodyEl.innerHTML += htmlTemplate;
  document.querySelector('form').reset();
});

tbodyEl.addEventListener('click', (e) => {
  console.log(e.target.dataset);
  if (e.target.dataset.type === 'erase') {
    console.log(e.target.closest('tr'));
    e.target.closest('tr').remove();
  }
});

function htmlRow(nameValue, dateValue, amountValue) {
  return `<tr>
            <th>
              <button data-type="erase" class=" btn btn-danger">
                <i data-type="erase" class="fas fa-eraser"></i>
              </button>
            </th>
            <td>${nameValue}</td>
            <td>${dateValue}</td>
            <td>${amountValue}</td>
          </tr>`;
}
