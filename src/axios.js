import axios from 'axios'

const baseurl="http://localhost:8000/api/V1"

const instance = axios.create({
    baseURL:baseurl
})

export default instance