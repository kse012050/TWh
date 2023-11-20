<template>
    <section class="boardInputPage contentSize">
        <h2><a href="">No.9999</a></h2>
        <form>
            <fieldset class="admin-input">
                <ul>
                    <li>
                        <label for="">카테고리</label>
                        <div class="limited">
                            <select name="type" id="type">
                                <option value="" :selected="boardItem.type !== 'BLOG'">보도자료</option>
                                <option value="" :selected="boardItem.type === 'BLOG'">블로그</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <label for="title">제목</label>
                        <div>
                            <input type="text" name="title" id="title" placeholder="제목을 입력하세요." :value="boardItem.title" @input="onChange">
                        </div>
                    </li>
                    <li>
                        <label for="description">내용</label>
                        <div>
                            <textarea name="description" id="description" placeholder="내용을 입력하세요. (5,000자)" :value="boardItem.description" @input="onChange"></textarea>
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
                            <div v-for="data in boardItem.medias" :key="data.id">
                                <img :src="data.imageurl" alt="임시 이미지">
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
                    <input type="checkbox" name="exposeyn" id="exposeyn" :checked="boardItem.exposeyn === 'Y'">
                    <label for="exposeyn">노출여부</label>
                    <button class="btn-border">삭제</button>
                    <input type="submit" value="수정" class="btn-black" @click="onSubmit">
                </div>
            </fieldset>
        </form>
    </section>
</template>
<script>
import * as api from '../../api/api'

export default {
    name: 'BoardInput',
    data(){
        return{
            boardItem: {},
            inputs: {}
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault();
            // console.log(this.boardItem);
            api.admin('update', {type: 'boards', id: this.$route.params.id, data: {...this.boardItem}})
                    .then((result)=>{
                        console.log(result);
                        // alert(result.message)
                    })
        },
        onChange(e){
            api.onChange(e, this.boardItem)
        }
    },
    mounted() {
        api.admin('detail', {type: 'boards', id: this.$route.params.id})
            .then((result)=>{
                // console.log(result);
                this.boardItem = {...result.boardItem}
            })

    }
    
}
</script>
<style lang="">
    
</style>