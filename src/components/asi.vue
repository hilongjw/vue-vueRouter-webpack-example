<script>
export default {
    data() {
            return {
                item: {
                    'title': '三食堂',
                    'img': 'img/test3.jpg',
                    'color': 'rgba(173, 171, 163, 0.7)'
                },
                lists: {},
                siteInfo: {
                    sitename: "去吃啥？"
                }
            }
        },
        asyncData: function(resolve, reject) {
            var self = this;
            setTimeout(function() {
                var lists = JSON.parse(localStorage.lists);
                var cc = Math.round(Math.random() * (lists.length - 1));
                resolve({
                    item: lists[cc]
                })


            }, 1000)
        },
        methods: {
            goBack: function(e) {
                history.go(-1);
            },
            reAsi: function() {
                var lists = JSON.parse(localStorage.lists);
                var cc = Math.round(Math.random() * (lists.length - 1));
                this.$data.item = lists[cc];
            }

        }
}
</script>
<template>
    <header class="header mui-bar mui-bar-nav">
        <a  @click="goBack" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h1 id="title" class="mui-title">{{siteInfo.sitename}}</h1></header>
    <div class="mui-content asi-page">
        <div class="loading" v-if="$loadingAsyncData">
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
            <span>给我一点时间...</span>
        </div>
        <div v-if="!$loadingAsyncData" class="asi-box">
            <div class="asi-card" :class="item.img">
                <div class="asi-card-title" style="background-color:rgba(173, 171, 163, 0.7);"><span>{{item.title}}</span></div>
            </div>
            <div class="re-asi-btn"  @click="reAsi"><span>不对不对，再选一次！</span></div>
        </div>
    </div>
</template>
