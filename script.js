const form = document.querySelector('#form');
const email = document.querySelector('#email');
const response = document.querySelector('#response');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.value })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      response.innerHTML = 'Email registered successfully';
    } else {
      response.innerHTML = 'Error registering email';
    }
  })
  .catch(err => {
    response.innerHTML = 'Error registering email';
  });
});