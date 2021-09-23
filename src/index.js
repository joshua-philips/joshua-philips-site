import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, setDoc, doc, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBpapOthSWym9t_q_dpb10SEGkQgVcrYHw',
  authDomain: 'joshua-philips-site.firebaseapp.com',
  projectId: 'joshua-philips-site',
  storageBucket: 'joshua-philips-site.appspot.com',
  messagingSenderId: '374270567164',
  appId: '1:374270567164:web:f4f7fb41ed3e6d62a7ed79',
  measurementId: 'G-05XEBYWR4B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

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
  let date = Date.now().toString();
  await setDoc(doc(db, 'messages', date), {
    senderEmail: email,
    messageSubject: subject,
    messageBody: message,
    date: Timestamp.now(),
  });
}

// Message sent alert
function msgAlert() {
  alert(
    'Your message has been sent. Expect a reply in your email as soon as possible.\nThank You!'
  );
}
