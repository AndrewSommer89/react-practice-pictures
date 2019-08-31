import axios from 'axios';

export default axios.create({
// Make a get request to "unsplash" url
    baseURL: 'https://api.unsplash.com',
// Authenticate request by passing access key via HTTP Authorization header
    headers: {
    // After "Client-ID" put in App's access key
        Authorization: 'Client-ID d657f9426a5f6989af1a6b3b15e61c5e12daf32b9a4c44773e2b7d7eae66d91c'
    }
})