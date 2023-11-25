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

const zipRegex = /^\d{5}(?:-\d{4})?$/
const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:;<>,.?~\\-])[A-Za-z\d!@#$%^&*()_+{}|:;<>,.?~\\-]{8,}$/

const toggleValidity = (htmlElement, valid) => {
  if (valid) {
    htmlElement.classList.add('valid')
    htmlElement.classList.remove('invalid')
  } else {
    htmlElement.classList.remove('valid')
    htmlElement.classList.add('invalid')
  }
}

const validConstraints = (constraints) => {
  for (const constrainst of constraints) {
    if (constrainst() == false) return false
  }
  return true
}

const addListeners = (
  inputElement,
  invalidMessageElement,
  constraints,
  textMessage
) => {
  inputElement.addEventListener('focusout', () => {
    if (!validConstraints(constraints)) {
      invalidMessageElement.textContent = textMessage
      toggleValidity(inputElement, false)
    } else {
      toggleValidity(inputElement, true)
    }
  })

  inputElement.addEventListener('input', () => {
    if (validConstraints(constraints)) {
      invalidMessageElement.textContent = ''
      toggleValidity(inputElement, true)
    }
  })
}

addListeners(
  emailInput,
  emailInvalidMessage,
  [() => emailInput.value != '', () => !emailInput.validity.typeMismatch],
  'provide a valid email, with this format email@example'
)

addListeners(
  countrySelect,
  countryInvalidMessage,
  [() => countrySelect.value != ''],
  'please select a country'
)

addListeners(
  inputZipCode,
  zipInvalidMessage,
  [() => zipRegex.test(inputZipCode.value)],
  'zip codes can only have this formats XXXXX or XXXXX-XXXX, X being a digit'
)

addListeners(
  passwordInput,
  passInvalidMessage,
  [() => passRegex.test(passwordInput.value)],
  'provide a valid password of at least 8 characters, with at least one upper letter, one digit and one especial character(!@#$%^&*()_+{}|:;<>,.?~\\-)'
)

addListeners(
  passwordConfInput,
  passConfInvalidMessage,
  [() => passwordConfInput.value == passwordInput.value],
  'passwords must match'
)
