<template>
    <div class="adminPage">
        <section>
            <h1><img src="../../images/admin-logo.png" alt="한화 신한 테라와트 아워 Hanwha Shinhan TWh"></h1>
            <form>
                <fieldset>
                    <ul>
                        <li>
                            <label>ID</label>
                            <input type="text" id="" name="">
                        </li>
                        <li>
                            <label>PW</label>
                            <input type="text" id="" name="">
                        </li>
                    </ul>
                    <input type="submit" value="로그인" @click="onSubmit">
                </fieldset>
            </form>
        </section>
    </div>
</template>
<script>
export default {
    name: 'SignIn',
    methods: {
        onSubmit(e){
            e.preventDefault();
            this.$router.push({path: '/admins/noticesList'})
        }
    }
}
</script>
<style>
    
</style>