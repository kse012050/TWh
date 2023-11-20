// api url
const adminURL = 'http://52.79.208.109:5000/';
const userURL = 'http://52.79.208.109:5000/';

const validationMap = {
    number(value) {
        const regex = /^[0-9]+$/;
        return regex.test(value);
    },
    company(value){
        const regex = /^.{2,20}$/;
        return regex.test(value);
    },
    name(value){
        const regex = /^.{2,20}$/;
        return regex.test(value);
    },
    phonenum(value){
        const regex = /^.{8,11}$/;
        return regex.test(value);
    },
    email(value) {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return regex.test(value);
    },
}

export function validation(type, value){
    return Object.keys(validationMap).includes(type) ? validationMap[type](value) : true
}


export function onChange(e, inputsRequired, inputs){
    const isRequired = Object.keys(inputsRequired).includes(e.target.name);
    if(!validation(e.target.dataset.formet, e.target.value)){
        e.target.value = isRequired ? inputsRequired[e.target.name] : inputs[e.target.name]
        return
    }
    
    let value;
    if(validation(e.target.name, e.target.value)){
        if(e.target.getAttribute('type') === 'checkbox'){
            if(e.target.value === 'on'){
                value = e.target.checked;
            }else{
                value = []
                document.querySelectorAll(`[name=${e.target.name}]:checked`).forEach((element)=>{
                    element.checked && value.push(element.value)
                })
                value = value.join(',')
            }
        }else{
            value = e.target.value;
        }
    }else{
        value = '';
    }

    value ? e.target.classList.remove('error') : e.target.classList.add('error');

    isRequired ?
        inputsRequired[e.target.name] = value :
        inputs[e.target.name]= value
}

export function isRequired(inputsRequired){
    Object.entries(inputsRequired).forEach((arr)=>{
        !arr[1] && document.querySelector(`[name="${arr[0]}"]`).classList.add('error');
    })

    let isValue = Object.entries(inputsRequired).find((arr)=>{
        return !arr[1]
    })
    isValue && document.querySelector(`[name="${isValue[0]}"]`).focus();
    return isValue;
}


// 관리자 로그인
function signIn(type, method, data){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    data = JSON.stringify(data)
    return fetch(`${adminURL}${type}`, {
        method: method,
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

// 토큰 검사
function addToken(myHeaders){
    let token =  sessionStorage.getItem('token')
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
}

// 관리자 각 페이지별 리스트
function adminListApi(type, method){
    var myHeaders = new Headers();

    addToken(myHeaders)
    
    return fetch(`${adminURL}${type}`, {
        method: method,
        headers: myHeaders,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

function adminDetailApi(type, method){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Iuygle2YhOq4sCIsImlhdCI6MTY5OTI1MTY0MCwiZXhwIjoxNjk5MjUxNjQzfQ.klmyC8BvXzNULUjJlyH5p9RIsfvFCs1azX4tSnptFEg');
    return fetch(`${adminURL}${type}`, {
        method: method,
        headers: myHeaders,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

function adminUpdateApi(type, method, data){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Iuygle2YhOq4sCIsImlhdCI6MTY5OTI1MTY0MCwiZXhwIjoxNjk5MjUxNjQzfQ.klmyC8BvXzNULUjJlyH5p9RIsfvFCs1azX4tSnptFEg');
    var formdata = new FormData();
    Object.entries(data).forEach(([key, value])=>{
        if(!Array.isArray(value)){
            formdata.append(key, value);
        } else {
            value.forEach((img)=>{
                formdata.append(key, img);
            })
        }
    })

    return fetch(`${adminURL}${type}`, {
        method: method,
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    })
        .then(response => {console.log(response);})
        .catch(error => console.log('error', error));
}

const adminMap = {
    signIn(type, data){
        const method = 'POST';
        type = `user/${type}`
        return signIn(type, method, data)
    },
    list(type, data){
        const method = 'GET';
        type = `${data['type']}/list/${data['page']}`
        data['listType'] && (type = type + '?type=' + data['listType']);
        return adminListApi(type, method)
    },
    detail(type, data){
        const method = 'GET';
        type = `${data['type']}/${data['id']}`;
        return adminDetailApi(type, method)
    },
    update(type, data){
        const method = 'PATCH';
        type = `${data['type']}/${data['id']}`;
        data = {...data['data']}
        return adminUpdateApi(type, method, data)
    }
}

export function admin(type, data){
    return adminMap[type](type, data);
}

function userApi(type, method, data){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    data = JSON.stringify(data)
    return fetch(`${userURL}${type}`, {
        method: method,
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

const userMap = {
    inquiry(type, data){
        const method = 'POST';
        return userApi(type, method, data)
    }
}

export function user(type, data){
    return userMap[type](type, data);
}