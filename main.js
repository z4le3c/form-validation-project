const emailInput = document.querySelector('#email')
const emailInvalidMessage = document.querySelector('#email-invalid-message')
const countrySelect = document.querySelector('#country')
const inputZipCode = document.querySelector('#zip-code')
const sendButton = document.querySelector('#send-button')

emailInput.addEventListener('focusout', () => {
  if (emailInput.value == '') {
    emailInvalidMessage.textContent = 'please provide an email'
  } else if (emailInput.validity.typeMismatch) {
    emailInvalidMessage.textContent = 'provide a valid email, with this format email@example'
  }
})

emailInput.addEventListener('input', () => {
  emailInvalidMessage.textContent = ''
})