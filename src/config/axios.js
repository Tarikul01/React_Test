import axios from 'axios';

export default axios.create({
    baseURL:"https://contact.mediusware.com/api", headers:{
        "Content-Type":"Application/json",
        'Access-Control-Allow-Origin': '*',
        
    "accesscontrolallowMethods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "content-type": "application/x-www-form-urlencoded"
   

    }
})