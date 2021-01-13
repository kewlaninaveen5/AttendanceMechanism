import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://technokids-cfec5-default-rtdb.firebaseio.com/'
});

export default axiosInstance;