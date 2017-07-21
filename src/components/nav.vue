<template>
    <div class="nav">
        <!--<h1>我是导航栏</h1>
        <button class="btn btn-danger">我是按钮</button>-->
        <ul class="nav nav-pills">
            <li role="presentation">
                <router-link class="name" to="/login">登录页面</router-link>
            </li>
            <li role="presentation">
                <router-link class="name" to="/info">检核任务管理</router-link>
            </li>
            <li role="presentation">
                <router-link class="name" to="">业务中心</router-link>
            </li>
            <li role="presentation">
                <router-link class="name" to="">活动中心</router-link>
            </li>
            <li role="presentation">
                <router-link class="name" to="">问卷中心</router-link>
            </li>
            <!--<li role="presentation">
                <router-link class="name" to="">社区论坛</router-link>
            </li>
            <li role="presentation">
                <router-link class="name" to="">能力诊断</router-link>
            </li>-->
        </ul>
    </div>
</template>

<script>
    export default {
        // name: 'nav',
        // data() {
        //    return{}
        // }
    }

</script>

<style>
    li {
        list-style: none;
    }
    
    li .name {
        color: #333;
        color: #333;
        font-size: 16px;
    }
    
    .nav-pills {
        margin-top: -42px;
        padding: 0 200px;
        float: right;
    }
</style>