console.log('hello');

// Ciblage

const form = document.getElementById('form');
const input = document.getElementById('word');
const vowels = /[aeiouy]+/gi;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputVal = input.value;
  const found = inputVal.match(vowels);
  const joinResult = found.join('');
  alert('There is ' + joinResult.length + ' vowel(s)');

  inputVal.textContent = '';
});
