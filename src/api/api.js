// api url
const adminURL = process.env.VUE_APP_ADMIN_URL;
const userURL = process.env.VUE_APP_USER_URL;
const userListURL = process.env.VUE_APP_USER_LIST_URL;

const validationMap = {
    number(value) {
        const regex = /^[0-9]+$/;
        return regex.test(value) || !value;
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

// 데이터 초기화
export function dataInit(inputsRequired, inputs){
    const test = Object.assign(inputsRequired, inputs)
    Object.entries(test).forEach(([key])=>{
        const element = document.querySelector(`[name=${key}]`);
        element.classList.remove('error');
        element.type === 'checkbox' ?
            element.checked = false :
            element.value = '';
        test[key] = '';
    })
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
        // e.target.value = isRequired ? inputsRequired[e.target.name] : (inputs[e.target.name] || '')
        // e.target.value = e.target.value.at(0);
        e.target.value = e.target.value.substring(0, e.target.value.length - 1)
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

    (!Object.keys(inputsRequired).includes(name) || inputValue) ? e.target.classList.remove('error') : e.target.classList.add('error');

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

// 관리자 각 페이지별 검색
function adminSearchApi(type, method, data){
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

// 관리자 각 페이지별 상세
function adminDetailApi(type, method){
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

function adminDeleteApi(type, method){
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


function adminFileDown(type, method, data){
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
    search(type, data){
        const method = 'POST';
        type = `${data['type']}/search`
        data = {word: data['word']}
        return adminSearchApi(type, method, data)
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
    delete(type, data){
        const method = 'DELETE';
        type = `${data['type']}/${data['id']}`;
        return adminDeleteApi(type, method)
    },
    comment(type, data){
        const method = 'PATCH';
        type = `inquiry/${data['id']}`
        data = {...data['data']}
        return commentUpdateApi(type, method, data)
    },
    fileDown(type, data){
        const method = 'POST';
        return adminFileDown(type, method, data)
    }
}

export function admin(type, data){
    return adminMap[type](type, data);
}


// 유저 리스트
function userListApi(type, method){
    return fetch(`${userListURL}${type}`, {
        method: method,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}


// 유저 리스트 상세
function userDetailApi(type, method){
    return fetch(`${userListURL}${type}`, {
        method: method,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}


// 유저 문의하기
function userInquiryApi(type, method, data){
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
    list(type, data){
        const method = 'GET';
        type = `${data['type']}`
        return userListApi(type, method)
    },
    detail(type, data){
        const method = 'GET';
        type = `${data['type']}/${data['id']}`
        return userDetailApi(type, method)
    },
    inquiry(type, data){
        const method = 'POST';
        return userInquiryApi(type, method, data)
    }
}

export function user(type, data){
    return userMap[type](type, data);
}