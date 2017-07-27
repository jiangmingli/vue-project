<template>
    <div class="info clearfix">
        <div class="left">
            <div id="haha">{{haha}}</div>
            <h4>检核任务管理</h4>
            <el-button type="primary" icon="search">主要按钮</el-button>
        </div>
        <div class="right">
            <h4>查询条件</h4>
            <form>
                <div class="items_input clearfix">
                    <div class="item_input">
                        <!--<label class="input__label">类型：</label>-->
                        <select name="CHECKINFO_TYPE" class="input__text" id="CHECKINFO_TYPE" v-model="CHECK_TYPE">
                          <option value="">请选择</option>
                          <option value="0">临时</option>
                          <option value="1">普通</option>
                        </select>
                    </div>
                    <div class="item_input">
                        <!--<lable class="input__label">任务名：</lable>-->
                        <input type="text" value="" placeholder="请输入" v-model="CHECK_NAME" />
                    </div>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-danger" @click="getTableData()">查询</button>
                    <button type="reset" class="btn">重置</button>
                </div>
            </form>

            <div class="output__table">
                <table class="table table-bordered" id="checkTaskTable">
                    <thead>
                        <tr>
                            <th>进度</th>
                            <th>结果</th>
                            <th>明细</th>
                            <th>编辑</th>
                            <th>任务项</th>
                            <th>任务名称</th>
                            <th>类型</th>
                            <th>开始日期</th>
                            <th>结束日期</th>
                            <th>标准总分</th>
                            <th>是否需要DLR确认</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in arrList">
                            <td><a>{{item.进度}}</a></td>
                            <td><a>{{item.结果}}</a></td>
                            <td><a>{{item.明细}}</a></td>
                            <td><a @click="detail(item.CHECK_ID)" :checkId="item.CHECK_ID">{{item.编辑}}</a></td>
                            <td>{{item.任务}}</td>
                            <td>{{item.任务名称}}</td>
                            <td>{{item.类型}}</td>
                            <td>{{item.开始日期}}</td>
                            <td>{{item.结束日期}}</td>
                            <td>{{item.标准总分}}</td>
                            <td>{{item.是否需要DLR确认}}</td>
                            <td>{{item.状态}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--<mAside></mAside>-->
        <!--<models :isShow="show" v-on:ee="ishidden"></models>-->
        <models v-if="show" @fireclose="show = false" :checkId="CHECK_ID"></models>
    </div>
</template>

<script>
    import models from '@/components/model.vue'
    export default {
        data() {
            return {
                arrList: [],
                checkDetail: [],
                CHECK_TYPE: '',
                CHECK_NAME: '',
                ha: '',
                show: false,
                CHECK_ID: ""
            }
        }
        , props: ['haha']
        , components: {
            models
        }
        , mounted() {
            // console.log(this.checkId);
            this.getTableData();
            //    this.$http.get({ type: "get", url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=callback', dataType: 'jsonp', jsonpCallback: 'callback', success: function (res, data) { console.log(res); }, error: function (err) { console.log(err); } });
        }
        , methods: {
            detail(id) {
                // alert("a");
                // console.log(id);
                var _this = this;
                this.CHECK_ID = id;
                console.log(this.CHECK_ID);
                this.show = !this.show
                // this.$router.push({ path: '/model', query: { id }});

            },
            
            getTableData() {
                var _this = this;
                var postData = {
                    PAGE_SIZE: 10,
                    PAGE_NO: 1,
                    CHECKINFO_TYPE: _this.CHECK_TYPE,
                    STATUS: "",
                    CHECK_NAME: _this.CHECK_NAME,
                };
                this.$store.dispatch('showLoading');
                this.$http.post('api/AppCheckCategory/QueryCategory', postData).then(function (res) {
                    _this.$store.dispatch('hideLoading');
                    if (res.data.RESULT_CODE == 1) {
                        console.log(res.data.DATA);
                        _this.arrList = res.data.DATA;
                    } else {
                        alert(res.data);
                        _this.$router.push({ path: '/login' });//动态匹配路由

                    }
                }).catch(function (err) {
                    console.log(err);
                })

            }
        }
    }

</script>

<style scoped lang="less">
    @link-color: green;
    a {
        color: @link-color
    }
    
    .table {
        margin: 0px;
    }
    
    .input__label {
        font-weight: normal;
    }
    
    .input__text {
        width: 174px;
        margin-right: 50px;
        height: 26px;
    }
    
    .item_input {
        float: left;
    }
    
    .output__table {
        width: 736px;
        overflow: auto;
        padding-top: 10px;
    }
    
    .output__table th {
        white-space: nowrap;
        text-align: center;
        background: #ccc;
    }
    
    .output__table td {
        white-space: nowrap;
        text-align: center
    }
    
    .btn-group {
        float: right;
    }
    
    h4 {
        color: #333;
        font-family: "Microsoft Yahei";
        font-size: 16px;
        /*border-left:3px solid red;*/
        border-bottom: 1px solid #f7f7f7;
        padding: 0px 0px 10px 10px;
    }
    
    .info {
        background: #f7f7f7;
        padding: 20px 150px 0px;
        height: 520px;
        margin-top: 10px;
    }
    
    .left {
        float: left;
        width: 25%;
        background: #f7f7f7;
        background: #fff;
        margin-right: 20px;
    }
    
    .right {
        /*padding: 0 10px;*/
        width: 70%;
        float: left;
        background: #fff;
    }
    
    form {
        padding: 0 10px 10px;
    }
</style>