import axios from 'axios';

const api = axios.create({

  baseURL:'https://hidrotelemetria-backend.herokuapp.com/telemetriaInfo/'

});

export default api;