
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');


document.getElementById('sendName').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  displayLocalStorageDataName(name);
})
document.getElementById('sendEmail').addEventListener('click', function() {
  const email = document.getElementById('email').value;
  displayLocalStorageDataEmail(email);
})
document.getElementById('sendMessage').addEventListener('click', function() {
  const message = document.getElementById('message').value;
  displayLocalStorageDataMessage(message);
})

document.getElementById('deleteName').addEventListener('click', function() {
  localStorage.removeItem('name');
  nameField.value = '';
})

document.getElementById('deleteEmail').addEventListener('click', function() {
  localStorage.removeItem('email');
  emailField.value = '';
})

document.getElementById('deleteMessage').addEventListener('click', function() {
  localStorage.removeItem('message');
  messageField.value = '';
})


document.getElementById('reset').addEventListener('click', function() {
  localStorage.clear();
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  localStorage.removeItem('message');
})



const getSetLocalStorageData = () => {
  const getName = localStorage.getItem('name');
  const getEmail = localStorage.getItem('email');
  const getMessage = localStorage.getItem('message');
  if (getName) {
    const parseIt = JSON.parse(getName);
    nameField.value = parseIt;
  }
  if(getEmail) {
    const parseIt2 = JSON.parse(getEmail);
    emailField.value = parseIt2;
  }
  if(getMessage) {
    const parseIt = JSON.parse(getMessage);
    messageField.value = parseIt
  }
}

getSetLocalStorageData();

document.getElementById('send').addEventListener('click', function() {
  const allData = {
    name: nameField.value,
    email: emailField.value,
    message: messageField.value
  }

  const allDataString = JSON.stringify(allData);
  localStorage.setItem('All', allDataString);
  getSetLocalStorageData()
})



const displayLocalStorageDataName = (value) => {
  const stringified = JSON.stringify(value);
  localStorage.setItem('name', stringified);
}
const displayLocalStorageDataEmail = (value) => {
  const stringified = JSON.stringify(value);
  localStorage.setItem('email', stringified);
}
const displayLocalStorageDataMessage = (value) => {
  const stringified = JSON.stringify(value);
  localStorage.setItem('message', stringified);
}