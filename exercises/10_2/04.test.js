const [getRepos, url] = require('./04.js');

it('Check whether there are specific repositories in the list', async () => {
  await expect(getRepos(url)).resolves.toContain('hacka-trybe');
  await expect(getRepos(url)).resolves.toContain('sd-00-block5-project-pixels-art');
});
