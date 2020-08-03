const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];

const divState = document.getElementById('state');
states.forEach(state => {
  const tagOption = document.createElement('option');
  tagOption.value = tagOption.innerHTML = state;
  divState.appendChild(tagOption);
});

const data = document.createElement('div');
data.id = 'data';
const form = document.querySelector('form');
form.appendChild(data);

const btSend = document.getElementById('bt-send');
btSend.addEventListener('click', function (e) {
  e.preventDefault();

  let formData = {};
  const names = ['name', 'email', 'cpf', 'address', 'city', 'state', 'type', 'resume', 'role', 'role-description', 'start-date'];
  names.forEach((selfName) => {
    if (selfName === 'type') {
      formData[selfName] = document.querySelector('input[name="type"]:checked').value;
    } else {
      formData[selfName] = document.getElementsByName(selfName)[0].value;
    }
  });
  data.innerHTML = JSON.stringify(formData);
});

const btClear = document.querySelector('#bt-clear');
btClear.addEventListener('click', function () {
  const names = ['name', 'email', 'cpf', 'address', 'city', 'state', 'type', 'resume', 'role', 'role-description', 'start-date'];
  names.forEach((selfName) => {
    if (selfName === 'type') {
      document.querySelector('input[name="type"]:checked').checked = false;
    } else {
      document.getElementsByName(selfName)[0].value = '';
    }
  });
  document.getElementById('data').innerHTML = '';
})
