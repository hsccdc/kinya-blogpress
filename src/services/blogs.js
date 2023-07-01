export function getBlog(blogInfo){
    const API_ENDPOINT = "https://blogpress.api.hscc.bdpa.org/v1/blogs/"
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer 2b59f3b3-8432-4595-b0b6-96702151f27d'
        }
    }
    return fetch(API_ENDPOINT + blogInfo, requestOptions)
    .then(response => response.json()) // Fix: Return the parsed JSON response
    .then(blog => blog); // Fix: Return the 'user' object
}