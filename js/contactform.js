const form = document.getElementById('contactForm')
const url = 'https://bfgbf9kvv6.execute-api.eu-central-1.amazonaws.com/dev/email/send'
const toast = document.getElementById('postsuccess')
const submit = document.getElementById('submit')

function post(url, body, callback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText));
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(JSON.stringify(body));
}
function success () {
  toast.innerHTML = 'Bedankt voor uw bericht. We reageren zo snel mogelijk.'
  submit.disabled = false
  submit.blur()
  form.name.focus()
  form.name.value = ''
  form.email.value = ''
  form.content.value = ''
}
function error (err) {
  toast.innerHTML = 'Er is een probleem opgetreden met het verzenden van uw bericht. Probeert u het later nogmaals.'
  submit.disabled = false
  console.log(err)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  toast.innerHTML = 'Versturen'
  submit.disabled = true

  const payload = {
    initials: form.initials.value,
    lastname: form.lastname.value,
    email: form.email.value,
    message: form.message.value
  }
  post(url, payload, function (err, res) {
    if (err) { return error(err) }
    success()
  })
})
