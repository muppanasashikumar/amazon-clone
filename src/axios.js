import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-9872a/us-central1/api' 
    //the api url(cloud function)
});

export default instance;