import axios from 'axios'

export function setAxiosDefault() {
    //sets base url
    axios.defaults.baseURL = 'https://ast-nest-backend.vercel.app/'

    //sets headers of request which helps server know what type of data
    //is received and to be sent
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Accept'] = 'application/json'
}