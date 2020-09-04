const getUserName = require('./03.js');

it('Check whether getUserName function returns an existent name', async () => {
  await expect(getUserName(4)).resolves.toBe('Mark');
})

it('Check whether getUserName function returns an error when id isn`t found', async () => {
  await expect(getUserName(6)).rejects.toEqual({ error: 'User with 6 not found.' })
})