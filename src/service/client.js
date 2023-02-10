import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export const client = axios.create({ baseURL: 'http://localhost:9000/' })
