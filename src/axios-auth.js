import axios from 'axios';
import { eventBus } from './main';

const instance = axios.create({
  baseURL: 'http://api-minicurso-vue.herokuapp.com/'
});
instance.interceptors.response.use((resp) => {
  if(resp.data.message) {
    let data = {
      text: resp.data.message,
      color: 'success'
    }
    eventBus.$emit('showSnackbar', data);
  }
  return resp;
}, (err) => {
  if(err.response.data) {
    console.log(err.response.data);
    let data = {
      text: err.response.data.error,
      color: 'error'
    }
    eventBus.$emit('showSnackbar', data);
  }
  return Promise.reject(err);
})
export default instance;