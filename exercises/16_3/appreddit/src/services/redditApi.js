const REDDIT_API = 'https://www.reddit.com/r/';

export const getPostReddit = () => (
  fetch(`${REDDIT_API}frontend.json`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
