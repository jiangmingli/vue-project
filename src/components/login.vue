<template>
    <div class="login">
        <!--<h1>我是登录页面</h1>-->
        <div class="loginBox">
            <img src="../assets/logo.png">
            <div>
                <label>账号</label>
                <input type="text" value="" placeholder="请输入账号" />
            </div>
            <div>
                <label>密码</label>
                <input type="text" value="" placeholder="请输入密码" />
            </div>
            <button class="btn btn-danger" @click="getLoginData()">登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
        ,mounted() {

        },
        methods: {
            getLoginData() {
                var _this = this;
                this.$store.dispatch('showLoading');
                this.$http.post('api/Login/CheckLogin', {
                    username: 'H2901',
                    password: 'c28e0f32547fc18e5f00ebc31021ff8f'
                }).then(function (res) {
                    console.log(res);
                    _this.$store.dispatch('hideLoading');
                    if (res.data.state == "success") {
                        alert("登录成功！");
                        _this.$router.push({ path: '/info' })
                    }
                }).catch(function (err) {
                    console.log(err);
                })
            }
        }

    }

</script>

<style>
    .loginBox {
        text-align: center;
        margin-top: 150px;
    }
</style>