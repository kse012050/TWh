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

function adminListApi(type, method){
    var myHeaders = new Headers();
    // console.log(sessionStorage.getItem('token'));
    // let test =  sessionStorage.getItem('token')
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Iuygle2YhOq4sCIsImlhdCI6MTY5OTI1MTY0MCwiZXhwIjoxNjk5MjUxNjQzfQ.klmyC8BvXzNULUjJlyH5p9RIsfvFCs1azX4tSnptFEg');
    // myHeaders.append("Authorization", test);
    
    return fetch(`${adminURL}${type}`, {
        method: method,
        headers: myHeaders,
        redirect: 'follow'
    })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

function adminUpdateApi(type, method){
    var myHeaders = new Headers();
    // console.log(sessionStorage.getItem('token'));
    // let test =  sessionStorage.getItem('token')
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Iuygle2YhOq4sCIsImlhdCI6MTY5OTI1MTY0MCwiZXhwIjoxNjk5MjUxNjQzfQ.klmyC8BvXzNULUjJlyH5p9RIsfvFCs1azX4tSnptFEg');
    // myHeaders.append("Authorization", test);
    var formdata = new FormData();
    formdata.append("name", "김필수");
    formdata.append("company", "Naber");
    formdata.append("phonenum", "01049395858");
    formdata.append("email", "test@com.com");
    formdata.append("consultpurpose", "GENERAL");
    formdata.append("implementgoal", "이행 목");
    formdata.append("implementplan", "ㅅㄷㄴ");
    formdata.append("annualusage", "100");
    formdata.append("inquerydetail", "LONGTERMCONTRACT");
    formdata.append("plantstatus", "LANDPURCHASE");
    formdata.append("plantcapacity", "30000");
    formdata.append("recweight", "3000");
    formdata.append("content", "컨텐츠 내용 사");
    formdata.append("saleprice", "13004");
    formdata.append("inquirystate", "3");
    
    return fetch(`${adminURL}${type}`, {
        method: method,
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    })
        .then(response => response.json())
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
        return adminListApi(type, method)
    },
    detail(type, data){
        console.log(type, data);
        const method = 'GET';
        type = `${data['type']}/${data['id']}`;
        return adminListApi(type, method)
    },
    update(type, data){
        console.log(type, data);
        const method = 'PATCH';
        type = `${data['type']}/update/${data['id']}`;
        data = {...data['data']}
        return adminUpdateApi(type, method)
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