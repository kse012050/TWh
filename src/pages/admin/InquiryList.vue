<template>
    <section class="inquiryListPage contentSize">
        <h2>사업 문의 관리</h2>

        <div class="admin-tab">
            <button class="active">전체(99)</button>
            <button>RE100(33)</button>
            <button>발전소 매입(66)</button>
            <div class="search">
                <input type="search">
                <button>검색</button>
            </div>
        </div>
        <div class="admin-board-title">
            <b>No.</b>
            <b>성함</b>
            <b>회사</b>
            <b>연락처</b>
            <b>이메일</b>
            <b>상담목적</b>
            <b>개인정보이용방침 동의</b>
            <b>마케팅 정보 수신 동의</b>
            <b>상세보기</b>
            <b>회신 여부</b>
        </div>
        <ul class="admin-board-list" data-noneListText="작성된 사업문의가 없습니다.">
            <li>
                <a href="inquiryInput/0">
                    <span>999</span>
                    <span>홍길동</span>
                    <span>한화컨버전스</span>
                    <span>010-3333-5555</span>
                    <button>afdsfadsfasdfasdfasdf@gmail.com</button>
                    <span>발전소 매입</span>
                    <span>동의</span>
                    <span>미동의</span>
                    <button>상세보기</button>
                    <span class="unread">읽지 않음</span>
                </a>
            </li>
            <li>
                <a href="inquiryInput/0">
                    <span>999</span>
                    <span>홍길동</span>
                    <span>한화컨버전스</span>
                    <span>010-3333-5555</span>
                    <button>afdsfadsfasdfasdfasdf@gmail.com</button>
                    <span>발전소 매입</span>
                    <span>동의</span>
                    <span>미동의</span>
                    <button>상세보기</button>
                    <span>회신 완료</span>
                </a>
            </li>
            <li>
                <a href="inquiryInput/0">
                    <span>999</span>
                    <span>홍길동</span>
                    <span>한화컨버전스</span>
                    <span>010-3333-5555</span>
                    <button>afdsfadsfasdfasdfasdf@gmail.com</button>
                    <span>발전소 매입</span>
                    <span>동의</span>
                    <span>미동의</span>
                    <button>상세보기</button>
                    <span class="noReply">회신 안함</span>
                </a>
            </li>
        </ul>
        <div class="admin-board-pager" data-styleIdx="a">
            <a href="">첫 페이지</a>
            <a href="">이전 페이지</a>
            <ol>
                <li class="active"><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
                <li><a href="">5</a></li>
            </ol>
            <a href="">다음 페이지</a>
            <a href="">마지막 페이지</a>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>