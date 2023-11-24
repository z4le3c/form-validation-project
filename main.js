const emailInput = document.querySelector('#email')
const emailInvalidMessage = document.querySelector('#email-invalid-message')
const countrySelect = document.querySelector('#country')
const countryInvalidMessage = document.querySelector('#country-invalid-message')
const inputZipCode = document.querySelector('#zip-code')
const zipInvalidMessage = document.querySelector('#zip-invalid-message')
const passwordInput = document.querySelector('#password')
const passInvalidMessage = document.querySelector('#pass-invalid-message')
const passwordConfInput = document.querySelector('#password-conf')
const passConfInvalidMessage = document.querySelector(
  '#pass-conf-invalid-message'
)
const sendButton = document.querySelector('#send-button')

emailInput.addEventListener('focusout', () => {
  if (emailInput.value == '' || emailInput.validity.typeMismatch) {
    emailInvalidMessage.textContent =
      'provide a valid email, with this format email@example'
    emailInput.classList.remove('valid')
    emailInput.classList.add('invalid')
  } else {
    emailInput.classList.add('valid')
    emailInput.classList.remove('invalid')
  }
})

emailInput.addEventListener('input', () => {
  if (emailInput.value != '' && !emailInput.validity.typeMismatch) {
    emailInvalidMessage.textContent = ''
    emailInput.classList.add('valid')
    emailInput.classList.remove('invalid')
  }
})

countrySelect.addEventListener('focusout', () => {
  if (countrySelect.value == '') {
    countryInvalidMessage.textContent = 'please select a country'
    countrySelect.classList.remove('valid')
    countrySelect.classList.add('invalid')
  } else {
    countrySelect.classList.add('valid')
    countrySelect.classList.remove('invalid')
  }
})

countrySelect.addEventListener('input', () => {
  if (countrySelect.value != '') {
    countryInvalidMessage.textContent = ''
    countrySelect.classList.add('valid')
    countrySelect.classList.remove('invalid')
  }
})

inputZipCode.addEventListener('focusout', () => {
  let regex = /^\d{5}(?:-\d{4})?$/
  if (!regex.test(inputZipCode.value)) {
    zipInvalidMessage.textContent =
      'zip codes can only have this formats XXXXX or XXXXX-XXXX, X being a digit'
  }
})

inputZipCode.addEventListener('input', () => {
  let regex = /^\d{5}(?:-\d{4})?$/
  if (regex.test(inputZipCode.value)) {
    zipInvalidMessage.textContent = ''
  }
})

passwordInput.addEventListener('focusout', () => {
  let regex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:;<>,.?~\\-])[A-Za-z\d!@#$%^&*()_+{}|:;<>,.?~\\-]{8,}$/
  if (!regex.test(passwordInput.value)) {
    passInvalidMessage.textContent =
      'provide a valid password of at least 8 characters, with at least one upper letter, one digit and one especial character(!@#$%^&*()_+{}|:;<>,.?~\\-)'
  }
})

passwordInput.addEventListener('input', () => {
  let regex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:;<>,.?~\\-])[A-Za-z\d!@#$%^&*()_+{}|:;<>,.?~\\-]{8,}$/
  if (regex.test(passwordInput.value)) {
    passInvalidMessage.textContent = ''
  }
})

passwordConfInput.addEventListener('focusout', () => {
  if (passwordConfInput.value != passwordInput.value) {
    passConfInvalidMessage.textContent = 'passwords must match'
  }
})

passwordConfInput.addEventListener('input', () => {
  if (passwordConfInput.value == passwordInput.value) {
    passConfInvalidMessage.textContent = ''
  }
})
