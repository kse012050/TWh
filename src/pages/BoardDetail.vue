<template>
    <section class="boardDetail contentSize" v-if="boardItem.id">
        <small>
            {{
                boardItem.type === "NEWS" ? '보도자료' : '인터뷰'
            }}
        </small>
        <h2>{{ boardItem.title }}</h2>
        <time>{{ boardItem.regymdt[0] }}</time>
        <div>
            <Editor v-model="boardItem.description" readonly></Editor>
            <ul v-if="boardItem.medias.length">
                <li v-for="data in boardItem.medias" :key="data.id">
                    <img :src="data.imageurl" :alt="`${data.title} 이미지`" onerror="this.onerror=null; this.src='https://placehold.co/380x250'">
                </li>
            </ul>
            <a v-if="boardItem.linkurl" :href="boardItem.linkurl">{{ boardItem.linkurl }}</a>
        </div>
        <router-link to="/board" class="btn-black">목록으로</router-link>
    </section>
</template>
<script>
import * as api from '../api/api'
import Editor from 'primevue/editor';

export default {
    name: 'BoardDetail',
    components: { 
        Editor
    },
    data(){
        return{
            id: this.$route.params.id,
            boardItem: {},
        }
    },
    methods: {
        detail(){
            api.user('detail',{type: 'board', id: this.id})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        this.boardItem = {...result.boardItem};
                        this.boardItem.regymdt = this.boardItem.regymdt.split('T');
                        this.boardItem.regymdt[0] = this.boardItem.regymdt[0].replaceAll('-','.');
                        this.boardItem.regymdt[1] = this.boardItem.regymdt[1].replace('.000Z','');
                        this.boardItem.description = this.boardItem.description.replaceAll('\r\n', '<br />');
                    }
                })
        }
    },
    mounted(){
        this.detail()
    }
}
</script>
<style>
    
</style>