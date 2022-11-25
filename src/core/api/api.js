import axios from 'axios';

const AXIOS = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function getData(path) {
  console.log(path);
  const data = await AXIOS.get(path);
  return data.data.data;
}

async function postData(path, body) {
  const data = await AXIOS.get(path, body);

  return data.data;
}

const api = {
  getData,
  postData,
};

export default api;
