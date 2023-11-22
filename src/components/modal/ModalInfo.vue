<template>
    <div class="content-modal" @click="$emit('modalClose')">
        <div class="infoArea" @click.stop>
            <strong>개인정보 처리방침</strong>
            <p>개인정보 처리방침 개인정보 처리방침개인정보 처리방침개인정보 처리방침개인정보 처리방침 개인정보 처리방침개인정보 처리방침개인정보 처리방침개인정보 처리방침개인정보 처리방침</p>
            <button class="close" @click.prevent="$emit('modalClose')">모달 닫기</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModalInfo',
    props: {
        isModal: Boolean
    },
}
</script>
<style>
    
</style>