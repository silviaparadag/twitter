const getPostsFromApi = () => {
  return fetch(
    'https://silviaparadag.github.io/api-sp/twitter-v1/tweets.json'
  ).then((response) => response.json());
};

// const getProfileFromApi = () => {
//   return fetch(
//     'https://silviaparadag.github.io/api-sp/twitter-v1/profile.json'
//   ).then((response) => response.json());
// };

const getProfileFromApi = async () => {
  const fetchApi = await fetch(
    'https://silviaparadag.github.io/api-sp/twitter-v1/profile.json'
  );
  const dataJson = await fetchApi.json();
  console.log(dataJson.profile);
  return dataJson.profile;
};

const objToExport = {
  getPostsFromApi: getPostsFromApi,
  getProfileFromApi: getProfileFromApi,
};

export default objToExport;
