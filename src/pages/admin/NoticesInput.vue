<template>
    <section class="noticesInputPage contentSize">
        <h2>
            <router-link :to="nextPagePath">
                <template v-if="id">
                    No.{{id}}
                </template>
                <template v-else>
                    게시판 작성
                </template>
            </router-link>
        </h2>
        <form>
            <fieldset class="admin-input">
                <ul>
                    <li>
                        <label for="test">이미지</label>
                        <div>
                            <input type="file" name="test" id="test" @change="imgAdd" accept="image/*">
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
                        <label for="description">내용</label>
                        <div>
                            <textarea name="description" id="description" placeholder="내용을 입력하세요. (5,000자)" :value="noticeItem.description" @input="onChange"></textarea>
                        </div> 
                    </li>
                    <li>
                        <label for="linkurl">링크</label>
                        <div>
                            <input type="url" name="linkurl" id="linkurl" placeholder="연결 링크를 입력하세요. (선택)" :value="noticeItem.linkurl" @input="onChange">
                            <button class="delete" @click="linkDelete">링크 지우기</button>
                        </div>
                    </li>
                </ul>
                <div class="content-btn">
                    <input type="checkbox" name="exposeyn" id="exposeyn" value="Y" :checked="noticeItem.exposeyn === 'Y'" @input="onChange">
                    <label for="exposeyn">노출여부</label>
                    <template v-if="id">
                        <button class="btn-border" @click.prevent="onDelete">삭제</button>
                        <input type="submit" value="수정" class="btn-black" @click.prevent="onUpdate">
                    </template>
                    <template v-else>
                        <input type="submit" value="작성" class="btn-black" @click.prevent="onSubmit">
                    </template>
                </div>
            </fieldset>
        </form>
        <modal-confirm v-if="isModalConfirm" :isModal="isModalConfirm" @modalClose="modalClose" @modalConfirm="modalConfirm" :modalText="modalText"/>
        <modal-alert v-if="isModalAlert" :isModal="isModalAlert" @modalClose="modalClose" :modalText="modalText"/>
    </section>
</template>
<script>
import * as api from '../../api/api'
import ModalAlert from '@/components/modal/ModalAlert.vue';
import ModalConfirm from '@/components/modal/ModalConfirm.vue';

export default {
    name: 'NoticesInput',
    components: { 
        ModalAlert,
        ModalConfirm
    },
    data(){
        return{
            id: this.$route.params.id,
            noticeItem: {},
            // 유저 추가 이미지
            imgAdds: [],
            // 기존 데이터 이미지
            imgData: [],
            imgDeletes: [],
            nextPagePath: '/admins/notices',
            isModalAlert: false,
            isModalConfirm: false,
            modalText: {
                title: '',
                description: '',
            }
        }
    },
    methods: {
        detailData(){
            if(this.id) {
                api.admin('detail', {type: 'notice', id: this.id})
                    .then((result)=>{
                        this.noticeItem = {...result.noticeItem}
                        this.imgData = [...this.noticeItem.medias]
                        this.noticeItem.medias = []
                        this.imgAdds = []
                        this.imgDeletes = []
                    })
            } else {
                document.querySelectorAll('.admin-input ul li :is(input:not([type="file"]), textarea)').forEach((element)=>{
                    this.noticeItem[element.name] = '';
                })
                this.noticeItem.title = '테스트'
                this.noticeItem.startdate = '2023-11-05'
                this.noticeItem.medias = []
            }
        },
        onChange(e){
            api.onChange(e, {}, this.noticeItem)
        },
        imgAdd(e){
            const { files } = e.target;
            const reader = new FileReader();
            reader.onloadend = () => {this.imgAdds.push(reader.result);}
            reader.readAsDataURL(files[0]);
            this.noticeItem.medias.push(files[0])
            e.target.value = '';
        },
        imgDelete(e, idx){
            e.preventDefault();
            this.imgAdds.splice(idx, 1)
            this.noticeItem.medias.splice(idx, 1)
        },
        imgDataDelete(e, idx, id){
            e.preventDefault();
            this.imgDeletes.push(id);
            this.imgData.splice(idx, 1)
        },
        linkDelete(e){
            e.preventDefault();
            this.noticeItem['linkurl'] = ''
            document.querySelector('input[type="url"]').focus();
        },
        onDelete(){
            this.modalText['title'] = '삭제';
            this.modalText['description'] = '게시글을 삭제하시겠습니다?<br>즉시 홈페이지에서 삭제되며 복구할 수 없습니다.';
            this.isModalConfirm = true;
        },
        onUpdate(){
            delete this.noticeItem.enddate;
            delete this.noticeItem.id;
            delete this.noticeItem.regymdt;
            delete this.noticeItem.startdate;
            delete this.noticeItem.useYn;

            this.noticeItem.exposeyn = this.noticeItem.exposeyn || 'N';

            api.admin('update', {type: 'notice', id: this.id, data: {...this.noticeItem}, imgDeletes: this.imgDeletes})
                .then((result)=>{
                    console.log(result);
                    if(result.statusCode === '200'){
                        this.modalText['title'] = '저장';
                        this.modalText['description'] = '변경사항이 저장되었습니다.';
                        this.isModalAlert = true;
                        this.detailData();
                    }
                })
        },
        onSubmit(){
            api.admin('create', {type: 'notice', data: {...this.noticeItem}})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        this.modalText['title'] = '등록';
                        this.modalText['description'] = '작성 내용이 저장되었습니다.';
                        this.isModalAlert = true;
                        this.detailData();
                    }
                })
        },
        modalClose(isMove){
            this.isModalAlert = false;
            this.isModalConfirm = false;
            isMove && this.$router.push({path: this.nextPagePath})
        },
        modalConfirm(){
            api.admin('delete', {type: 'notice', id: this.id})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        this.modalText['title'] = '삭제';
                        this.modalText['description'] = '삭제가 완료되었습니다.';
                        this.isModalAlert = true;
                    }
                })
        }
    },
    mounted(){
        this.detailData();
    }
}
</script>
<style lang="">
    
</style>