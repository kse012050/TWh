<template>
    <div class="adminPage">
        <section>
            <h1><img src="../../images/admin-logo.png" alt="한화 신한 테라와트 아워 Hanwha Shinhan TWh"></h1>
            <form>
                <fieldset>
                    <ul>
                        <li>
                            <label for="userid">ID</label>
                            <input type="text" id="userid" name="userid" @input="onChange" required>
                        </li>
                        <li>
                            <label for="password">PW</label>
                            <input type="password" id="password" name="password" @input="onChange" required>
                        </li>
                    </ul>
                    <input type="submit" value="로그인" @click="onSubmit">
                </fieldset>
            </form>
            <div class="content-modal" v-if="isModal" @click="modalClose">
                <div class="alertArea" @click.stop>
                    <strong>알림</strong>
                    <p>
                        ID/PW를 확인하세요.<br>
                        문제가 지속되는 경우 개발사에 문의하세요.
                    </p>
                    <dl>
                        <dt>개발사 연락처</dt>
                        <dd>
                            <a href="tel:+8201082103442">(주)1985<br> 010.8210.3442 장혜령(PM)</a>
                        </dd>
                    </dl>
                    <button class="close" @click.prevent="modalClose">모달 닫기</button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import * as api from '../../api/api'

export default {
    name: 'SignIn',
    data(){
        return{
            inputsRequired: {},
            nextPagePath: '/admins/notices',
            isModal: false
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault();
            if(!api.isRequired(this.inputsRequired)){
                api.admin('signIn', this.inputsRequired)
                    .then((result)=>{
                        if(result.res_code){
                            sessionStorage.setItem('token', result.accessToken)
                            sessionStorage.setItem('adminName', result.username)
                            this.$router.push({path: this.nextPagePath})
                        }else{
                            this.isModal = true
                            api.dataInit(this.inputsRequired)
                        }
                    })
            }
        },
        onChange(e){
            api.onChange(e, this.inputsRequired)
        },
        modalClose(){
            this.isModal = false;
        }
    },
    mounted() {
        sessionStorage.getItem('token') && this.$router.push({path: this.nextPagePath})
        document.querySelectorAll('input[required]').forEach((element)=>{
            element.required && (this.inputsRequired[element.name] = '')
        })
    }
}
</script>
<style>
    
</style>