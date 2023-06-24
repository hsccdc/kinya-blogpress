export function getUser(userInfo){
    const requestOptions = {
        'method': 'GET',
        'headers': {
            'authentication': 'Bearer ' + '2b59f3b3-8432-4595-b0b6-96702151f27d'
        }
    }
    fetch('https://blogpress.api.hscc.bdpa.org/v1/users/{username}');
}