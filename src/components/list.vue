<script>
export default {
    data() {
            var lists = [];
            var listState = false;
            if (localStorage.lists) {
                if (JSON.parse(localStorage.lists).length != 0) {
                    lists = JSON.parse(localStorage.lists);
                    listState = true;
                }
            }

            return {
                lists: lists,
                siteInfo: {
                    sitename: "去吃啥？"
                },
                itemname: "",
                showAddModal: false,
                showDelModal: false,
                listState: listState,
                tmpid: ""
            }
        },
        methods: {
            goBack: function(e) {
                history.go(-1);
            },
            add: function() {
                this.showAddModal = false;
                
                var cc = Math.round(Math.random() * 10);
                if (this.itemname != '') {
                    this.lists.push({
                        'id': this.lists.length + 1,
                        'title': this.itemname,
                        'img': 'bg'+cc,
                        'color': 'rgba(173, 171, 163, 0.7)'
                    });
                    this.itemname = "";
                    this.listState = true;
                }
            },
            goAsi: function() {
                localStorage.lists = JSON.stringify(this.lists);
            },
            openDelIt: function(id) {
                console.log(id);
                this.tmpid = id;
                this.showAddModal = true;
                this.showDelModal = true;
            },
            Cancel: function() {
                this.showAddModal = false;
                this.showDelModal = false;
            },
            delIt: function(id) {
                for (var i = 0; i < this.lists.length; i++) {
                    if (this.lists[i].id == id) {
                        this.lists.splice(i, 1);
                    }
                }
                if (this.lists.length == 0) {
                    this.listState = false;
                }
                this.showAddModal = false;
                this.showDelModal = false;
            }
        }
}

</script>
<template>
    <header class="header mui-bar mui-bar-nav">
        <a @click="goBack" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
        <button @click="goAsi"  v-link="{ path: '/asi' }" class="mui-btn mui-btn-link mui-btn-nav mui-pull-right"><span class="mui-icon  mui-icon-checkmarkempty"></span></button>
        <h1 id="title" class="mui-title">{{siteInfo.sitename}}</h1></header>
    <div class="modal-mask" v-if="showAddModal">
        <div class="modal-wrapper">
            <div v-show="!showDelModal" class="modal-container">
                <content select=".modal-header">
                    <div class="modal-header">
                        添加
                    </div>
                </content>
                <content select=".modal-body">
                    <div class="modal-body">
                        <input class="doned-input" v-model="itemname" autofocus="autofocus">
                        <button class="doned-btn" @click="add "> Done </button>
                    </div>
                </content>
            </div>
            <div v-show="showDelModal" class="modal-container">
                <content select=".modal-header">
                    <div class="modal-header">
                        要删除这个吗？
                    </div>
                </content>
                <content select=".modal-body">
                    <div class="modal-body">
                        <button class="cancel-btn" @click="Cancel"> Cancel </button>
                        <button class="doned-btn" @click="delIt(tmpid) "> Del </button>
                    </div>
                </content>
            </div>
        </div>
    </div>
    <div class="mui-content">
        <div class="eating-box">
            <ul>
                <li class="eating-card eating-null" v-if="!listState" @click="showAddModal = true">
                    <div class="eating-card-title"><span>添加你的选择</span></div>
                </li>
                <li class="eating-card"  v-for="item in lists" :class="item.img" @click="openDelIt(item.id)">
                    <div class="eating-card-title" style="background-color:rgba(173, 171, 163, 0.7);"><span>{{item.title}}</span></div>
                </li>
            </ul>
        </div>
        <div class="add-box">
            <span @click="showAddModal = true">＋</span>
        </div>
    </div>
</template>
