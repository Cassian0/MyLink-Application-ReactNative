import axios from 'axios';
/**
 * Nossa Key do bitly 
 * Passamos a base url para a requisição
 * Content-type opcional
 * Para autorizar nossas requisições na api precisamos passar nossa key
 */
export const key = '52a987decf282979c5c2341cf57779c39d50557b';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
  }
});

export default api;
