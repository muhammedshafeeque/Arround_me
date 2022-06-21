import axios from 'axios'
import {baseUrl} from '../Constant/constant'
const instance = axios.create({
    baseURL:baseUrl,
    
  });

export default instance 