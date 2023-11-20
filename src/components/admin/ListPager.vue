<template>
    <div class="admin-board-pager" data-styleIdx="a">
        <a href="?page=1">첫 페이지</a>
        <a :href="`?page=${page === 1 ? 1 : Number(page) - 1}`">이전 페이지</a>
        <ol>
            <template v-for="n in 5" :key="n">
                <li v-if="(Math.floor(n / 5) + n) <= lastPage" :class="[{active: (Math.floor(n / 5) + 1) === page}]">
                    <a :href="`?page=${(Math.floor(n / 5) + n)}`">
                        {{ (Math.floor(n / 5) + n) }}
                    </a>
                </li>
            </template>
        </ol>
        <a :href="`?page=${page === lastPage ? lastPage : Number(page) + 1}`">다음 페이지</a>
        <a :href="`?page=${lastPage}`">마지막 페이지</a>
    </div>
</template>
<script>
export default {
    name: 'ListPager',
    props: {
        page: Number,
        lastPage: Number,
    }
}
</script>
<style>
    
</style>