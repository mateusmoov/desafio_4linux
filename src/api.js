import axios from 'axios'

export default axios.create({
    baseURL: 'https://secure-fortress-15127.herokuapp.com/api',
})