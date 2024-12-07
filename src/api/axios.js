import axios from "axios";

const instance = axios.create({
    baseURL: 'https://starbucks-backend-eb73f56420ac.herokuapp.com/api',
    withCredentials: true
})

export default instance