const contactModal = new bootstrap.Modal(
  document.getElementById('contactModal'),
  {}
);
const modalForm = document.querySelector('#form-modal');
const bottomForm = document.querySelector('#form-bottom');
var email;
var subject;
var message;

// Event Listener for Modal Form
modalForm.addEventListener('submit', (e) => {
  e.preventDefault();

  email = modalForm['email-modal'].value;
  subject = modalForm['subject-modal'].value;
  message = modalForm['message-modal'].value;

  uploadMessage(email, subject, message).then(() => {
    modalForm.reset();
    contactModal.hide();
    msgAlert();
  });
});

// Event Listener for Bottom Form
bottomForm.addEventListener('submit', (e) => {
  e.preventDefault();

  email = bottomForm['email-bottom'].value;
  subject = bottomForm['subject-bottom'].value;
  message = bottomForm['message-bottom'].value;

  uploadMessage(email, subject, message).then(() => {
    bottomForm.reset();
    msgAlert();
  });
});

// Upload Message to Firebase
async function uploadMessage(email, subject, message) {
  console.log(email, subject, message);
}

// Message sent alert
function msgAlert() {
  alert(
    'Your message has been sent. Expect a reply in your email as soon as possible.\nThank You!'
  );
}
