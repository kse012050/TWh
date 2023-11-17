// api url
const apiURL = 'http://52.79.208.109:5000/';


// 관리자 로그인
function adminApi(type, method, data){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

  /*   var raw = JSON.stringify({
        "userid": "test123",
        "password": "1234"
    }); */
    data = JSON.stringify(data)
  /*   var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }; */

    return fetch(`${apiURL}${type}`, {
        method: method,
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

const adminMap = {
    signIn(type, data){
        const method = 'POST';
        type = `user/${type}`
        return adminApi(type, method, data)
    }
}


/* export function user(type, data){
    return checkApi(type, data);
}
 */
export function admin(type, data){
    return adminMap[type](type, data);
}