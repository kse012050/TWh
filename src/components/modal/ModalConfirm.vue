<template>
    <div class="content-modal" @click="$emit('modalClose')">
        <div class="confirmArea" @click.stop>
            <strong>{{ modalText['title'] }}</strong>
            <p v-html="modalText['description']"></p>
            <div class="btnArea">
                <button class="border" @click.prevent="$emit('modalClose')">취소</button>
                <button class="black" @click.prevent="$emit('modalConfirm')">확인</button>
            </div>
            <button class="close" @click.prevent="$emit('modalClose')">모달 닫기</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModalConfirm',
    props: {
        isModal: Boolean,
        modalText: Object
    },
}
</script>
<style>
    
</style>