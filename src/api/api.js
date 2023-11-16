// api url
const apiURL = 'http://52.79.208.109:5000/';


// 관리자 로그인
function checkApi(type, data){
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // data = JSON.stringify(data);
    // return fetch(`http://52.79.208.109:5000/user/signIn`, {
    //     method: 'POST',
    //     // headers: myHeaders,
    //     // redirect: 'follow',
    //     body: data
    // })
    // .then((res)=>res.json())
    console.log(type);
    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "userid": "test123",
        "password": "1234"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${apiURL}${type}`, requestOptions)
    .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


export function check(type, data){
    return checkApi(type, data);
}