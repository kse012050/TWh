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
        </section>
    </div>
</template>
<script>
import * as api from '../../api/api'

export default {
    name: 'SignIn',
    data(){
        return{
            inputs: {},
            nextPagePath: '/admins/notices'
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault();
            console.log(this.inputs);
            let isValue = Object.entries(this.inputs).find((arr)=>{
                return !arr[1]
            })
            if(isValue){
                document.querySelector(`[name="${isValue[0]}"]`).focus();
            }else{
                api.admin('signIn', this.inputs)
                    .then((result)=>{
                        console.log(result);
                        if(result.res_code){
                            sessionStorage.setItem('token', result.accessToken)
                            this.$router.push({path: this.nextPagePath})
                        }
                    })
            }
            // console.log(test[0]);
            
            // this.$router.push({path: '/admins/notices'})
        },
        onChange(e){
            this.inputs[e.target.name] = e.target.value;
        }
    },
    mounted() {
        sessionStorage.getItem('token') && this.$router.push({path: this.nextPagePath})
        document.querySelectorAll('input').forEach((element)=>{
            element.required && (this.inputs[element.name] = undefined)
        })
    }
}
</script>
<style>
    
</style>