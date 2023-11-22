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
            <modal-alert v-if="isModal" :isModal="isModal" @modalClose="modalClose" :modalText="modalText"/>
        </section>
    </div>
</template>
<script>
import * as api from '../../api/api'
import ModalAlert from '@/components/modal/ModalAlert.vue';

export default {
    name: 'SignIn',
    components: { 
        ModalAlert
    },
    data(){
        return{
            inputsRequired: {},
            nextPagePath: '/admins/notices',
            isModal: false,
            modalText: {
                title: '',
                description: '',
            }
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
                            this.$router.push({path: this.nextPagePath})
                        }else{
                            this.modalText['title'] = '알림'
                            this.modalText['description'] = 'ID/PW를 확인하세요.<br>문제가 지속되는 경우 개발사에 문의하세요<br><br> 개발사: <a href="tel:+8201082103442">(주)1985 010.8210.3442 장혜령(PM)</a>' 
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