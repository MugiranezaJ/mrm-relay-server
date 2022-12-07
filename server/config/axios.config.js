import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const config = axios.create({
    baseURL: process.env.BASE_URL
})
config.defaults.headers.post['Content-Type'] ='application/json';

export default config;