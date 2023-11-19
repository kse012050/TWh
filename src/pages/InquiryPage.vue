<template>
    <section class="inquiryPage contentSize">
        <h2>사업 문의</h2>
        <form>
            <fieldset class="content-inquiry">
                <ul>
                    <li>
                        <label for="company">업체명</label>
                        <div>
                            <input type="text" id="company" name="company" placeholder="업체명을 작성하세요. (2자 - 20자)" @input="onChange" required>
                        </div>
                    </li>
                    <li>
                        <label for="name">담당자(성함)</label>
                        <div>
                            <input type="text" id="name" name="name" placeholder="담당자 성함을 작성하세요. (2자 - 20자)" @input="onChange" required>
                        </div>
                    </li>
                    <li>
                        <label for="phonenum">연락처</label>
                        <div>
                            <input type="text" id="phonenum" name="phonenum" placeholder="휴대폰번호나 내선번호를 작성하세요. (8자 이상, ‘-‘ 제외)" @input="onChange" data-formet="number" maxlength="11" required>
                        </div>
                    </li>
                    <li>
                        <label for="email">이메일</label>
                        <div>
                            <input type="text" id="email" name="email" placeholder="이메일을 형식에 맞게 작성하세요." @input="onChange" required>
                        </div>
                    </li>
                    <li>
                        <label for="content">상세 내용</label>
                        <textarea id="content" name="content" placeholder="기타 문의 및 참고 내용을 작성하세요. (200자 내)" @input="onChange"></textarea>
                    </li>
                </ul>
                <div>
                    <input type="checkbox" name="privacyagree" id="privacyagree" @input="onChange" required>
                    <label for="privacyagree"><b>개인정보이용방침</b>에 동의합니다.</label>
                    <input type="checkbox" name="maketagree" id="maketagree" @input="onChange" required>
                    <label for="maketagree">마케팅 정보 수신에 동의합니다.</label>
                </div>
                <input type="submit" value="문의하기" class="btn-black" @click="onSubmit">
            </fieldset>
        </form>
    </section>
</template>
<script>
import * as api from '../api/api'

export default {
    name: 'InquiryPage',
    data() {
        return{
            inputsRequired: {},
            inputs: {}
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault();
            if(!api.isRequired(this.inputsRequired)){
                api.user('inquiry', {...this.inputsRequired, ...this.inputs, consultpurpose: 'GENERAL'})
                    .then((result)=>{
                        alert(result.message)
                    })
            }
        },
        onChange(e){
            api.onChange(e, this.inputsRequired, this.inputs)
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