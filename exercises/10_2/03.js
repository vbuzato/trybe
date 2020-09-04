// Copiar
// **Código-base para os exercícios 2 e 3:**

// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma *Promise*, que é utilizada pelo método `getUserName`.

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
// Dica: Utilize o try/catch para o caso de erro.

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (users[id]) {
          return resolve(users[id]);
        }
        return reject({ error: 'User with ' + id + ' not found.' });
      }, 2000)
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

module.exports = getUserName;

// Asynchronous function

// // function printUser() {
// //   getUserName(4).then(response => {
// //     console.log(response);
// //   })
// // }

// Asynchronous function async/await

// async function printUser() {
//   const user = await getUserName(4)
//   console.log(user);
// }

// printUser();
// console.log(`Log: ${getUserName(4)}`);