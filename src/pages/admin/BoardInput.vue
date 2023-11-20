<template>
    <section class="boardInputPage contentSize">
        <h2><router-link to="/admins/board">No.{{id}}</router-link></h2>
        <form>
            <fieldset class="admin-input">
                <ul>
                    <li>
                        <label for="">카테고리</label>
                        <div class="limited">
                            <select name="type" id="type">
                                <option value="" :selected="boardItem.type === 'NEWS'">보도자료</option>
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
                        <label for="test">이미지</label>
                        <div>
                            <input type="file" name="test" id="test" @change="imgAdd">
                            <label for="test" v-if="imgAdds.length + imgData.length < 3">+ 이미지 등록</label>
                            <div v-for="(data, idx) in imgAdds" :key="idx">
                                <img :src="data" alt="임시 이미지">
                                <button class="delete" @click="(e)=>imgDelete(e, idx)">이미지 삭제</button>
                            </div>
                            <div v-for="(data, idx) in imgData" :key="data.id">
                                <img :src="data.imageurl" alt="임시 이미지">
                                <button class="delete" @click="(e)=>imgDataDelete(e, idx, data.id)">이미지 삭제</button>
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
                    <input type="checkbox" name="exposeyn" id="exposeyn" value="Y" :checked="boardItem.exposeyn === 'Y'" @input="onChange">
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
            id: this.$route.params.id,
            boardItem: {},
            // 유저 추가 이미지
            imgAdds: [],
            // 기존 데이터 이미지
            imgData: [],
            imgDeletes: []
        }
    },
    methods: {
        detailData(){
            this.id && api.admin('detail', {type: 'boards', id: this.$route.params.id})
                .then((result)=>{
                    this.boardItem = {...result.boardItem}
                    this.imgData = [...this.boardItem.medias]
                    this.boardItem.medias = []
                    this.imgAdds = []
                    this.imgDeletes = []
                })
        },
        onChange(e){
            api.onChange(e, this.boardItem)
        },
        imgAdd(e){
            const { files } = e.target;
            const reader = new FileReader();
            reader.onloadend = () => {this.imgAdds.push(reader.result);}
            reader.readAsDataURL(files[0]);
            this.boardItem.medias.push(files[0])
            e.target.value = '';
        },
        imgDelete(e, idx){
            e.preventDefault();
            this.imgAdds.splice(idx, 1)
            this.boardItem.medias.splice(idx, 1)
        },
        imgDataDelete(e, idx, id){
            e.preventDefault();
            this.imgDeletes.push(id);
            this.imgData.splice(idx, 1)
        },
        onSubmit(e){
            e.preventDefault();
            delete this.boardItem.regymdt;
            delete this.boardItem.useYn;
            delete this.boardItem.id;

            this.boardItem.exposeyn = this.boardItem.exposeyn || 'N';

            api.admin('update', {type: 'boards', id: this.id, data: {...this.boardItem}, imgDeletes: this.imgDeletes})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        this.detailData();
                    }
                })
        },
    },
    mounted() {
        this.detailData();
    }
    
}
</script>
<style lang="">
    
</style>