import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: 'ee6245315beb7830b91e61d1ce94e47428ad8563' });

const decode = (str) => {
  try {
    return btoa(str)
  } catch(e) {
    return Buffer.from(str, 'base64').toString();
  }
};

const getProduct = ()  => octokit
  .request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'KieraDOG',
    repo: 'spike-rendering-content',
    path: 'product.json'
  })
  .then(({ data }) => data.content)
  .then((content) => decode(content))
  .then((decoded) => JSON.parse(decoded));

export default getProduct;