import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://react-my-burger-7b3f9.firebaseio.com/'
});

export default instance;