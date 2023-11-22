<template>
    <div>
        <input type="checkbox" name="privacyagree" id="privacyagree" required @input="onChange">
        <label for="privacyagree"><strong>(필수)</strong><b @click.prevent="isModal = true">개인정보이용방침</b>에 동의합니다.</label>
        <input type="checkbox" name="maketagree" id="maketagree" @input="onChange">
        <label for="maketagree"><strong>(선택)</strong>마케팅 정보 수신에 동의합니다.</label>
        <modal-info v-if="isModal" :isModal="isModal" @modalClose="modalClose"/>
    </div>
</template>
<script>
import * as api from '../api/api'
import ModalInfo from '@/components/modal/ModalInfo.vue';

export default {
    name: 'ModalTerms',
    components: { 
        ModalInfo
    },
    props: {
        inputsRequired: {},
        inputs: {}
    },
    data(){
        return{
            isModal: false
        }
    },
    methods: {
        onChange(e){
            api.onChange(e, this.inputsRequired, this.inputs)
        },
        modalClose(){
            this.isModal = false;
        }
    }
}
</script>
<style>
    
</style>