<template>
    <section class="inquiryPage contentSize">
        <h2>사업 문의</h2>
        <form>
            <fieldset>
                <ul>
                    <li>
                        <label for="">업체명*</label>
                        <input type="text" placeholder="업체명을 작성하세요. (2자 - 20자)">
                    </li>
                    <li>
                        <label for="">담당자(성함)*</label>
                        <input type="text" placeholder="담당자 성함을 작성하세요. (2자 - 20자)">
                    </li>
                    <li>
                        <label for="">연락처*</label>
                        <input type="text" placeholder="휴대폰번호나 내선번호를 작성하세요. (8자 이상, ‘-‘ 제외)">
                    </li>
                    <li>
                        <label for="">이메일*</label>
                        <input type="text" placeholder="이메일을 형식에 맞게 작성하세요.">
                    </li>
                    <li>
                        <label for="">상세 내용</label>
                        <textarea placeholder="기타 문의 및 참고 내용을 작성하세요. (500자 내)"></textarea>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="" checked>
                        <label for=""><b>개인정보이용방침</b>에 동의합니다.</label>
                        <input type="checkbox" name="" id="">
                        <label for="">마케팅 정보 수신에 동의합니다.</label>
                    </li>
                </ul>
                <input type="submit" value="문의하기" class="btn-black">
            </fieldset>
        </form>
    </section>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>