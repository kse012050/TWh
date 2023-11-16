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
            inputs: {}
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault();
            console.log(this.inputs);
            api.check('user/signIn', this.inputs)
        },
        onChange(e){
            this.inputs[e.target.name] = e.target.value;
        }
    },
    mounted() {
        document.querySelectorAll('input').forEach((element)=>{
            element.required && (this.inputs[element.name] = undefined)
        })
    }
}
</script>
<style>
    
</style>