<template>
    <div class="content-modal" @click="$emit('modalClose')">
        <div class="alertArea" @click.stop>
            <strong>{{ modalText['title'] }}</strong>
            <p v-html="modalText['description']"></p>
            <div class="btnArea">
                <button class="black" @click.prevent="$emit('modalClose', true)">확인</button>
            </div>
            <button class="close" @click.prevent="$emit('modalClose')">모달 닫기</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModalAlert',
    props: {
        isModal: Boolean,
        modalText: Object
    },
}
</script>
<style>
    
</style>