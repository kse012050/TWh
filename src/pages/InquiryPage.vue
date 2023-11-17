<template>
    <section class="inquiryPage contentSize">
        <h2>사업 문의</h2>
        <form>
            <fieldset class="content-inquiry">
                <ul>
                    <li>
                        <label for="company">업체명</label>
                        <div>
                            <input type="text" id="company" name="company" placeholder="업체명을 작성하세요. (2자 - 20자)" required @input="onChange">
                        </div>
                    </li>
                    <li>
                        <label for="name">담당자(성함)</label>
                        <div>
                            <input type="text" id="name" name="name" placeholder="담당자 성함을 작성하세요. (2자 - 20자)" required>
                        </div>
                    </li>
                    <li>
                        <label for="phonenum">연락처</label>
                        <div>
                            <input type="text" id="phonenum" name="phonenum" placeholder="휴대폰번호나 내선번호를 작성하세요. (8자 이상, ‘-‘ 제외)" required>
                        </div>
                    </li>
                    <li>
                        <label for="email">이메일</label>
                        <div>
                            <input type="text" id="email" name="email" placeholder="이메일을 형식에 맞게 작성하세요." required>
                        </div>
                    </li>
                    <li>
                        <label for="content">상세 내용</label>
                        <textarea id="content" name="content" placeholder="기타 문의 및 참고 내용을 작성하세요. (200자 내)"></textarea>
                    </li>
                </ul>
                <div>
                    <input type="checkbox" name="privacyagree" id="privacyagree" required checked>
                    <label for="privacyagree"><b>개인정보이용방침</b>에 동의합니다.</label>
                    <input type="checkbox" name="maketagree" id="maketagree" required>
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
            inputs: {}
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault();
            // const inputs = this.inputs;
            console.log(this.inputs);
            // console.log(api.data(inputs));
        },
        onChange(e){
            api.onChange(e, this.inputs);
            // this.inputs[e.target.name] = e.target.value;
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