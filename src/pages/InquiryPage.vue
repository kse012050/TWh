<template>
    <section class="inquiryPage contentSize">
        <h2>사업 문의</h2>
        <form>
            <fieldset class="content-inquiry">
                <ul>
                    <li>
                        <label for="company">기업명</label>
                        <div>
                            <input type="text" id="company" name="company" @input="onChange" required>
                        </div>
                    </li>
                    <li>
                        <label for="name">담당자명</label>
                        <div>
                            <input type="text" id="name" name="name" @input="onChange" required>
                        </div>
                    </li>
                    <li>
                        <label for="phonenum">전화번호</label>
                        <div>
                            <input type="text" id="phonenum" name="phonenum" @input="onChange" data-formet="number" maxlength="11" required>
                        </div>
                    </li>
                    <li>
                        <label for="email">이메일</label>
                        <div>
                            <input type="text" id="email" name="email" @input="onChange" required>
                        </div>
                    </li>
                    <li>
                        <label for="content">상세 내용</label>
                        <textarea id="content" name="content" placeholder="기타 문의 및 참고 내용을 작성하세요. (200자 내)" @input="onChange"></textarea>
                    </li>
                </ul>
                <inquiry-agree :inputsRequired="inputsRequired" :inputs="inputs"></inquiry-agree>
                <input type="submit" value="문의하기" class="btn-black" @click.prevent="onSubmit">
            </fieldset>
        </form>
        <modal-alert v-if="isModal" :isModal="isModal" @modalClose="modalClose" :modalText="modalText"/>
    </section>
</template>
<script>
import * as api from '../api/api'
import InquiryAgree from '@/components/InquiryAgree.vue';
import ModalAlert from '@/components/modal/ModalAlert.vue';

export default {
    components: { 
        InquiryAgree,
        ModalAlert
    },
    name: 'InquiryPage',
    data() {
        return{
            inputsRequired: {},
            inputs: {},
            isModal: false,
            modalText: {
                title: '',
                description: '',
            }
        }
    },
    methods: {
        onSubmit(){
            if(!api.isRequired(this.inputsRequired)){
                api.user('inquiry', {...this.inputsRequired, ...this.inputs, consultpurpose: 'GENERAL'})
                    .then((result)=>{
                        if(result.statusCode === '200'){
                            this.modalText['title'] = '문의'
                            this.modalText['description'] = '요청이 완료되었습니다' 
                            this.isModal = true
                            api.dataInit({...this.inputsRequired, ...this.inputs})
                        }
                    })
            }
        },
        onChange(e){
            api.onChange(e, this.inputsRequired, this.inputs)
        },
        modalClose(){
            this.isModal = false;
        }
    },
    mounted() {
        document.querySelectorAll('input[required]').forEach((element)=>{
            element.required && (this.inputsRequired[element.name] = '')
        })
    }
}
</script>
<style>
    
</style>