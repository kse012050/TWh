<template>
    <div class="content-modal">
        <div class="logoutArea">
            <strong>알림</strong>
            <p>로그아웃 되었습니다.</p>
            <div class="btnArea">
                <button class="black" @click.prevent="this.$router.push({path: '/admin'})">확인</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModalLogout',
    props: {
        isModal: Boolean,
        modalText: Object
    },
}
</script>
<style>
    
</style>