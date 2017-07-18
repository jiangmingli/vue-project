<template>
    <div class="header">
        <div class="head">
            <div class="logo"><img src="../assets/logo.png"></div>
            <h2>东风日产经销商门户</h2>
            <h5>DEALER PORTAL</h5>
            <button class="btn btn-danger btn-login" @click="getLoginData()">登录</button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
            getLoginData() {
                this.$http.post('api/Login/CheckLogin', {
                    username: 'H2901',
                    password: 'c28e0f32547fc18e5f00ebc31021ff8f'
                }).then(function (res) {
                    console.log(res);
                    // _this.articleData = res.data[id];
                }).catch(function (err) {
                    console.log(err);
                })
            }
        }

    }

</script>

<style>
    .btn-login {
        position: absolute;
        top: 20px;
        right: 20px;
    }
    
    .header {
        width: 100%;
        height: 100px;
        border-top: 5px solid rgb(201, 0, 40);
        border-bottom: 1px solid #ddd;
    }
    
    h5 {
        color: #999;
        padding-top: 10px;
    }
    
    h2 {
        display: inline;
        color: rgb(201, 0, 40);
        font-family: "Microsoft Yahei";
        /*padding-top:10px;*/
        position: relative;
        top: 10px;
    }
    
    .logo {
        width: 86px;
        height: 109px;
        margin-right: 18px;
        background-color: #c90028;
        text-align: center;
        line-height: 146px;
        float: left;
        margin-left: 150px;
    }
    
    .logo img {
        width: 66px;
        height: 82px;
        margin-top: 12px;
        vertical-align: text-bottom;
        border: 0;
    }
    /*.head {
         width:100%;
        height: 300px;
        border-top: 3px solid blue;
    }*/
</style>