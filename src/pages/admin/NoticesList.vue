<template>
    <section class="boardListPage contentSize">
        <h2>공지사항 관리</h2>
        <div class="admin-board-title">
            <b>No.</b>
            <b>이미지</b>
            <b>설명</b>
            <b>작성일시</b>
            <b>노출여부</b>
        </div>
        <ul class="admin-board-list" data-noneListText="작성된 공지사항이 없습니다.">
            <li>
                <a href="">
                    <span>999</span>
                    <div>미리보기</div>
                    <p>사이트 런칭 공지</p>
                    <time>
                        2023.12.01<br>
                        12:34:56
                    </time>
                    <span>노출</span>
                </a>
            </li>
        </ul>
        <div class="admin-board-pager" data-styleIdx>
            <a href="">첫 페이지</a>
            <a href="">이전 페이지</a>
            <ol>
                <li><a href="">1</a></li>
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