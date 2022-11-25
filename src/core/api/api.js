import axios from 'axios';

const AXIOS = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function getData(path) {
  const data = await AXIOS.get(path);
  return data.data.data;
}

const api = {
  getData,
};

export default api;
