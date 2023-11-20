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

// 
export function validation(type, value){
    return Object.keys(validationMap).includes(type) ? validationMap[type](value) : true
}

// 입력 감지
export function onChange(e, inputsRequired, inputs){
    let { type, name, value } = e.target

    const isRequired = Object.keys(inputsRequired).includes(name);
    if(!validation(e.target.dataset.formet, e.target.value)){
        e.target.value = isRequired ? inputsRequired[e.target.name] : inputs[e.target.name]
        return
    }
    
    let inputValue;
    if(validation(name, value)){
        if(type === 'checkbox'){
            if(value === 'on'){
                inputValue = e.target.checked;
            }else{
                inputValue = []
                document.querySelectorAll(`[name=${name}]:checked`).forEach((element)=>{
                    element.checked && inputValue.push(element.value)
                })
                inputValue = inputValue.join(',')
            }
        }else{
            inputValue = value;
        }
    }else{
        inputValue = '';
    }

    inputValue ? e.target.classList.remove('error') : e.target.classList.add('error');

    isRequired ?
        inputsRequired[name] = inputValue :
        inputs[name] = inputValue
}

// 필수 데이터 검사
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
    
    myHeaders.append("Authorization", `Bearer ${token}`);
}

// 관리자 각 페이지별 리스트 생성
function adminListCreateApi(type, method, data){
    var myHeaders = new Headers();

    addToken(myHeaders)
    
    const formdata = dataToFormData(data);
    return fetch(`${adminURL}${type}`, {
        method: method,
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

// 관리자 각 페이지별 리스트
function adminListApi(type, method){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    addToken(myHeaders)
    
    return fetch(`${adminURL}${type}`, {
        method: method,
        headers: myHeaders,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

// 관리자 각 페이지별 상세
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

// 관리자 각 페이지별 상세 수정
function adminUpdateApi(type, method, data, imgType, imgDeletes){
    var myHeaders = new Headers();

    addToken(myHeaders)

    // 관리자 이미지 삭제
    if(imgDeletes && imgDeletes.length){
        imgDeletes.forEach((id)=>{
            fetch(`${adminURL}${imgType}${id}`, {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            })
                .then(response => response.json())
                .catch(error => console.log('error', error));
        })

    }
    
    const formdata = dataToFormData(data);

    return fetch(`${adminURL}${type}`, {
        method: method,
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

function commentUpdateApi(type, method, data){
    var myHeaders = new Headers();

    addToken(myHeaders)

    const formdata = dataToFormData(data);
    return fetch(`${adminURL}${type}`, {
        method: method,
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}


// 데이터 -> form data
function dataToFormData(data){
    const formdata = new FormData();
    Object.entries(data).forEach(([key, value])=>{
        if(!Array.isArray(value)){
            formdata.append(key, value || ' ');
        } else {
            value.forEach((img)=>{
                formdata.append('files', img);
            })
        }
    })
    return formdata;
}


const adminMap = {
    signIn(type, data){
        const method = 'POST';
        type = `user/${type}`
        return signIn(type, method, data)
    },
    create(type, data){
        const method = 'POST';
        type = `${data['type']}`
        data = {...data['data']}
        return adminListCreateApi(type, method, data)
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
        const imgDeletes = data['imgDeletes'] && [...data['imgDeletes']];
        const imgType = `${data['type']}/image/`;
        type = `${data['type']}/${data['id']}`;
        data = {...data['data']}
        return adminUpdateApi(type, method, data, imgType, imgDeletes)
    },
    comment(type, data){
        const method = 'PATCH';
        type = `inquiry/${data['id']}`
        data = {...data['data']}
        return commentUpdateApi(type, method, data)
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