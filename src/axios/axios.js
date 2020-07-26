import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-f73e1.firebaseio.com/'
})