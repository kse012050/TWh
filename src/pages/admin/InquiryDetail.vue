<template>
    <section class="inquiryDetailPage contentSize">
        <h2>
            <router-link to="/admins/inquiry">
                No.{{id}}
            </router-link>
        </h2>
        <div>
            <ul class="infoArea">
                <li>
                    <b class="required">성함</b>
                    <div>
                        <p>{{ inquiryItem.name }}</p>
                    </div>
                </li>
                <li>
                    <b class="required">회사</b>
                    <div>
                        <p>{{ inquiryItem.company }}</p>
                    </div>
                </li>
                <li>
                    <b class="required">연락처</b>
                    <div>
                        <p>{{ inquiryItem.phonenum }}</p>
                    </div>
                </li>
                <li>
                    <b class="required">이메일</b>
                    <div>
                        <p>{{ inquiryItem.email }}</p>
                    </div>
                </li>
                <li>
                    <b class="required">상담목적</b>
                    <div>
                        <p>{{ inquiryItem.consultpurpose }}</p>
                    </div>
                </li>
                <li>
                    <b>RE100 이행목표</b>
                    <div>
                        <p>{{ inquiryItem.implementgoal }}</p>
                    </div>
                </li>
                <li>
                    <b>연간 전력사용량</b>
                    <div>
                        <p>{{ inquiryItem.recweight }}</p>
                    </div>
                </li>
                <li>
                    <b>이행 방안</b>
                    <div>
                        <p>{{ inquiryItem.implementplan }}</p>
                    </div>
                </li>
                <li>
                    <b>상세 내용</b>
                    <div>
                        <p v-html="inquiryItem.content"></p>
                    </div>
                </li>
                <li>
                    <b>동의</b>
                    <div>
                        <dl>
                            <dt>개인정보 이용방침</dt>
                            <dd>{{ inquiryItem.privacyagree ? '동의' : '비동의'}}</dd>
                        </dl>
                        <dl>
                            <dt>마케팅 정보 수신</dt>
                            <dd>{{ inquiryItem.maketagree ? '동의' : '비동의'}}</dd>
                        </dl>
                    </div>
                </li>
            </ul>
            <div class="answerArea">
                <form>
                    <fieldset>
                        <ul>
                            <li>
                                <label for="">회신 여부</label>
                                <div class="inquirystateArea">
                                    <div class="select-box" :class="{active: isSelect}">
                                        <button @click.prevent="isSelect = true" @click.stop>
                                            {{
                                                inquirystateUpdate.inquirystate === '2' ? '회신 안함' : '회신 완료'
                                            }}
                                        </button>
                                        <div v-if="isSelect">
                                            <button @click.prevent="inquirystateUpdate.inquirystate = '2'">회신 안함</button>
                                            <button @click.prevent="inquirystateUpdate.inquirystate = '3'">회신 완료</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <label for="">비고</label>
                                <div class="commentArea">
                                    <input type="text" name="name" id="name" placeholder="작성자명">
                                    <textarea name="memo" id="memo" placeholder="메모를 입력하세요. (최대 100자)"></textarea>
                                </div>
                            </li>
                        </ul>
                        <input type="submit" value="저장" class="btn-black" @click.prevent="replysAdd">
                        <div class="content-btn">
                            <button class="btn-border" @click.prevent="onDelete">삭제</button>
                            <input type="submit" value="수정" class="btn-black" @click.prevent="onUpdate">
                        </div>
                    </fieldset>
                </form>
                <ul>
                    <li v-for="data in inquiryItem.replys" :key="data.id">
                        <b>{{ data.name }}</b>
                        <div>
                            <p>{{ data.memo }}</p>
                            <time>
                                {{ data.regymdt[0] }} {{ data.regymdt[1] }}
                            </time>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <modal-confirm v-if="isModalConfirm" :isModal="isModalConfirm" @modalClose="modalClose" @modalConfirm="modalConfirm" :modalText="modalText"/>
        <modal-alert v-if="isModalAlert" :isModal="isModalAlert" @modalClose="modalClose" :modalText="modalText"/>
    </section>
</template>
<script>
import * as api from '../../api/api'
import ModalAlert from '@/components/modal/ModalAlert.vue';
import ModalConfirm from '@/components/modal/ModalConfirm.vue';

export default {
    name: 'InquiryDetail',
    components: { 
        ModalAlert,
        ModalConfirm
    },
    data(){
        return{
            id: this.$route.params.id,
            inquiryItem: {},
            isSelect: false,
            inquirystateUpdate: {
                inquirystate: undefined
            },
            nextPagePath: '/admins/inquiry',
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
            api.admin('detail', {type: 'inquiry', id: this.id})
                .then((result)=>{
                    this.inquiryItem = {...result.inquiryItem}
                    this.inquiryItem.replys = this.inquiryItem.replys.reverse();
                    this.inquiryItem.replys.forEach((arr)=>{
                        arr.regymdt = arr.regymdt.split('T');
                        arr.regymdt[0] = arr.regymdt[0].replaceAll('-','.')
                        arr.regymdt[1] = arr.regymdt[1].replace('.000Z','')
                    })
                    this.inquirystateUpdate['inquirystate'] = result.inquiryItem['inquirystate']
                })
        },
        onSelect(){
            this.isSelect = false;
        },
        replysAdd(){
            const nameSelector = document.querySelector('[name="name"]')
            const memoSelector = document.querySelector('[name="memo"]')
            nameSelector.value || (nameSelector.value = sessionStorage.getItem('adminName'))
            if(!memoSelector.value){
                memoSelector.focus();
                return;
            }
            api.admin('comment', {id: this.id, data: {name: nameSelector.value, memo:memoSelector.value}})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        document.querySelectorAll('.commentArea *').forEach((element)=>{
                            element.value = ''
                        })
                        this.detailData();
                    }
                })
        },
        onDelete(){
            this.modalText['title'] = '삭제';
            this.modalText['description'] = '게시글을 삭제하시겠습니다?<br>즉시 홈페이지에서 삭제되며 복구할 수 없습니다.';
            this.isModalConfirm = true;
        },
        onUpdate(){
            this.inquirystateUpdate['name'] = this.inquiryItem['name'];
            this.inquirystateUpdate['company'] = this.inquiryItem['company'];
            this.inquirystateUpdate['phonenum'] = this.inquiryItem['phonenum'];
            this.inquirystateUpdate['email'] = this.inquiryItem['email'];
            api.admin('update', {type: 'inquiry/update', id: this.id, data: this.inquirystateUpdate})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        this.modalText['title'] = '저장';
                        this.modalText['description'] = '변경사항이 저장되었습니다.';
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
            api.admin('delete', {type: 'inquiry', id: this.id})
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
        window.addEventListener('click',this.onSelect)
    },
    beforeUnmount() {
        window.removeEventListener('click',this.onSelect)
    }
}
</script>
<style lang="">
    
</style>