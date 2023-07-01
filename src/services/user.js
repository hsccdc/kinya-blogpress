//function to get user information from BlogPress API endpoint
export function getUser(userInfo){
    const API_ENDPOINT = "https://blogpress.api.hscc.bdpa.org/v1/users/"
    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer 2b59f3b3-8432-4595-b0b6-96702151f27d'
        }
    }
    return fetch(API_ENDPOINT + userInfo, requestOptions)
    .then(response => response.json()) // Fix: Return the parsed JSON response
    .then(user => user); // Fix: Return the 'user' object
}

//function to create new user
export function createUser(formValues){
    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer 2b59f3b3-8432-4595-b0b6-96702151f27d'
        }
    }
    return fetch(API_ENDPOINT + userInfo, requestOptions)
    .then(response => response.json()) // Fix: Return the parsed JSON response
    .then(user => user); // Fix: Return the 'user' object
}

