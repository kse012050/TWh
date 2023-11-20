<template>
    <section class="inquiryInputPage contentSize">
        <h2>
            <router-link to="/admins/inquiry">
                No.{{id}}
            </router-link>
        </h2>
        <form>
            <fieldset class="admin-input">
                <ul>
                    <li>
                        <label for="name">성함</label>
                        <div class="limited">
                            <input type="text" name="name" id="name" :value="inquiryItem.name" @input="onChange" required>
                        </div>
                    </li>
                    <li>
                        <label for="company">회사</label>
                        <div class="limited">
                            <input type="text" name="company" id="company" :value="inquiryItem.company" @input="onChange">
                        </div>
                    </li>
                    <li>
                        <label for="phonenum">연락처</label>
                        <div class="limited">
                            <input type="text" name="phonenum" id="phonenum" :value="inquiryItem.phonenum" @input="onChange" data-formet="number" maxlength="11" required>
                        </div>
                    </li>
                    <li>
                        <label for="email">이메일</label>
                        <div class="limited">
                            <input type="email" name="email" id="email" :value="inquiryItem.email" @input="onChange" required>
                        </div>
                    </li>
                    <li>
                        <label for="consultpurpose">상담목적</label>
                        <div>
                            <input type="checkbox" name="consultpurpose" id="consultpurpose" checked @input="onChange" required>
                            <label for="">
                                {{ 
                                    inquiryItem.consultpurpose === 'GENERAL' ? '일반' :
                                        inquiryItem.consultpurpose === 'RE100' ? 'RE100' :
                                            inquiryItem.consultpurpose === 'RECURUT' && '발전소 매입'
                                }}
                            </label>
                        </div>
                    </li>
                    <li>
                        <label for="implementgoal">RE100 이행목표</label>
                        <div class="limited">
                            <input type="text" name="implementgoal" id="implementgoal" :value="inquiryItem.implementgoal" @input="onChange" required>
                        </div>
                    </li>
                    <li>
                        <label for="recweight">연간 전력사용량</label>
                        <div class="limited">
                            <input type="text" name="recweight" id="recweight" :value="inquiryItem.recweight" data-formet="number" @input="onChange">
                        </div>
                    </li>
                    <li>
                        <label for="implementplan">상담목적</label>
                        <div>
                            <input type="checkbox" id="implementplan-PPA" name="implementplan" value="PPA" :checked="implementplan[0]" @input="onChange" required>
                            <label for="implementplan-PPA">PPA</label>
                            <input type="checkbox" id="implementplan-REC" name="implementplan" value="REC구매" :checked="implementplan[1]" @input="onChange" required>
                            <label for="implementplan-REC">REC 구매</label>
                            <input type="checkbox" id="implementplan-sunlight" name="implementplan" value="자가소비형 태양광 구축"  :checked="implementplan[2]" @input="onChange"  required>
                            <label for="implementplan-sunlight">자가소비형 태양광 구축</label>
                            <input type="checkbox" id="implementplan-inquiry" name="implementplan" value="종합솔류션 문의"  :checked="implementplan[3]" @input="onChange"  required>
                            <label for="implementplan-inquiry">종합솔루션 문의</label>
                        </div>
                    </li>
                    <li>
                        <label for="content">상세 내용</label>
                        <div>
                            <textarea name="content" id="content" :value="inquiryItem.content" @input="onChange"></textarea>
                        </div>
                    </li>
                </ul>
                <div class="content-btn">
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
    name: 'InquiryInput',
    data(){
        return{
            id: this.$route.params.id,
            inquiryItem: {},
            implementplan: [],
            inputsRequired: {},
            inputs: {}
        }
    },
    methods: {
        detailData(){
            api.admin('detail', {type: 'inquiry', id: this.id})
                .then((result)=>{
                    // console.log(result);
                    this.inquiryItem = {...result.inquiryItem}
                    this.implementplan = [this.inquiryItem.implementplan.includes('PPA'), this.inquiryItem.implementplan.includes('REC구매'), this.inquiryItem.implementplan.includes('자가소비형 태양광 구축'), this.inquiryItem.implementplan.includes('종합솔류션 문의')]
                    document.querySelectorAll('.admin-input ul li :is(input, textarea)').forEach((element)=>{
                        element.required ? 
                            (this.inputsRequired[element.name] = this.inquiryItem[element.name]) :
                            (this.inputs[element.name] = this.inquiryItem[element.name])
                    })
                })
           
        },
        onSubmit(e){
            e.preventDefault();
            if(!api.isRequired(this.inputsRequired)){
                api.admin('update', {type: 'inquiry/update', id: this.id, data: {...this.inputsRequired, ...this.inputs}})
                    .then((result)=>{
                        if(result.statusCode === '200'){
                            this.detailData();
                        }
                    })
            }
        },
        onChange(e){
            api.onChange(e, this.inputsRequired, this.inputs)
        }
    },
    mounted() {
       this.detailData();
    }
}
</script>
<style lang="">
    
</style>