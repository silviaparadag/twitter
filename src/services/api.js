const callToApi = () => {
  // Call to API
  return fetch(
    'https://silviaparadag.github.io/api-sp/twitter-v1/tweets.json'
  ).then((response) => response.json());
};
export default callToApi;
