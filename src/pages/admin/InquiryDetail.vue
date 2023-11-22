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
                    <b>회사</b>
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
                        <p>
                           {{ inquiryItem.content }}
                        </p>
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
                                <div>
                                    <select name="" id="">
                                        <option value="">회신완료</option>
                                    </select>
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
                        <input type="submit" value="저장" class="btn-black" @click="replysAdd">
                        <div class="content-btn">
                            <button class="btn-border">삭제</button>
                            <input type="submit" value="수정" class="btn-black" @click="onUpdate">
                        </div>
                    </fieldset>
                </form>
                <ul>
                    <!-- <li v-for="(data, idx) in replysAdds" :key="idx">
                        <b>{{ data.name }}</b>
                        <div>
                            <p>{{ data.memo }}</p>
                        </div>
                    </li> -->
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
    </section>
</template>
<script>
import * as api from '../../api/api'

export default {
    name: 'InquiryInput',
    data(){
        return{
            id: this.$route.params.id,
            inquiryItem: {},
            replysAdds: []
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
                    
                })
        },
        replysAdd(e){
            e.preventDefault();
            let comment = {}
            document.querySelectorAll('.commentArea *').forEach((element)=>{
                comment[element.name] = element.value
            })
            let isValue = Object.entries(comment).find((arr)=>{
                return !arr[1]
            })
            
            if(isValue){
                document.querySelector(`[name="${isValue[0]}"]`).focus();
            }else{
                this.replysAdds.push(comment)
                document.querySelectorAll('.commentArea *').forEach((element)=>{
                    element.value = ''
                })
                api.admin('comment', {id: this.id, data: comment})
                    .then((result)=>{
                        if(result.statusCode === '200'){
                            this.detailData();
                        }
                    })
            }
        },
        onUpdate(e){
            e.preventDefault();
        }
    },
    mounted(){
        this.detailData();
    }
}
</script>
<style lang="">
    
</style>