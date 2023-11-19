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
function adminApi(type, method, data){
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

const adminMap = {
    signIn(type, data){
        const method = 'POST';
        type = `user/${type}`
        return adminApi(type, method, data)
    }
}


const userMap = {
    inquiry(type, data){
        const method = 'POST';
        return userApi(type, method, data)
    }
}

export function admin(type, data){
    return adminMap[type](type, data);
}

export function user(type, data){
    return userMap[type](type, data);
}