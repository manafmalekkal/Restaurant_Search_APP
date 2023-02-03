import axios from 'axios';

let instance = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 1puzPclG5hSeb-5Bw58yA_d2YrLosNtTaM3u835mS5QSb0M6S23BJGb-PNAzd6o7IkbzkowwM-lWiuxBf7fthCoY3V4arq2arByDaiVSWNP9ZyN5hN9MSDw62fPYY3Yx',
  },
});
export default instance;
