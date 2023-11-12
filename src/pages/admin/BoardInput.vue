<template>
    <section class="boardInputPage contentSize">
        <h2><a href="">No.9999</a></h2>
        <form>
            <fieldset class="admin-input">
                <ul>
                    <li>
                        <label for="">카테고리</label>
                        <div class="limited">
                            <select name="" id="">
                                <option value="">선택</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <label for="">제목</label>
                        <div>
                            <input type="text" name="" id="" placeholder="제목을 입력하세요.">
                        </div>
                    </li>
                    <li>
                        <label for="">내용</label>
                        <div>
                            <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요. (5,000자)"></textarea>
                        </div>   
                    </li>
                    <li>
                        <label for="">이미지</label>
                        <div>
                            <input type="file" name="" id="">
                            <label for="">+ 이미지 등록</label>
                            <div>
                                <img src="../../images/delete/test.png" alt="임시 이미지">
                                <button class="delete">이미지 삭제</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <label for="">링크</label>
                        <div>
                            <input type="url" name="" id="" placeholder="연결 링크를 입력하세요. (선택)">
                            <button class="delete">링크 지우기</button>
                        </div>
                    </li>
                </ul>
                <div class="content-btn">
                    <input type="checkbox" name="" id="">
                    <label for="">노출여부</label>
                    <button class="btn-border">삭제</button>
                    <input type="submit" value="수정" class="btn-black">
                </div>
            </fieldset>
        </form>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>