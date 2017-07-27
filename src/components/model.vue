<template>
    <div class="modal-use">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <!--<button type="button" @click="closeModal"  class="close"><span>&times;</span></button>  -->
                    <button type="button" @click="$emit('fireclose')" class="close"><span>&times;</span></button> 检核任务编辑
                </div>
                <div class="modal-body">
                    <form action="" class="form clearfix" id="caseCheckForm">
                        <div class="form__block">
                            <h4 class="title--line"><span class="line--color-red"></span>检核任务编辑</h4>
                            <div class="input__items">
                                <div class="input__item">
                                    <label class="input__label">任务类型：</label>
                                    <select name="" class="input__text" v-model="checkDetail.CHECKINFO_TYPE">
                                          <option value="">请选择</option>
                                          <option value="0">临时</option>
                                          <option value="1">普通</option>
                                    </select>
                                </div>

                                <div class="input__item">
                                    <label class="input__label">任务名：</label>
                                    <input type="text" placeholder="请填写" class="input__text" name="" v-model="checkDetail.CHECK_NAME">
                                </div>
                                <div class="input__item">
                                    <label class="input__label">开始时间：</label>
                                    <el-date-picker v-model="checkDetail.BEGIN_DATE" type="date" placeholder="选择日期" :picker-options="ranger">
                                    </el-date-picker>
                                </div>
                                <div class="input__item">
                                    <label class="input__label">结束时间：</label>
                                    <el-date-picker v-model="checkDetail.END_DATE" type="date" placeholder="选择日期">
                                    </el-date-picker>
                                </div>
                                <div class="input__item">
                                    <label class="input__label">是否需要签名：</label>
                                    <select name="" class="input__text" id="isSign" v-model="checkDetail.SIGNATURE_SIGN">
                                         <option value="">请选择</option>
                                         <option value="0">不需要</option>
                                         <option value="1">需要</option>
                                    </select>
                                </div>
                                <!--<div class="input__item">
                                    <label class="input__label">任务标识：</label>
                                    <select name="" class="input__text" id="remark" placeholder="请选择" v-model="checkDetail.CHECK_SIGN">
                                         <option value="item.PUBLIC_VALUE" v-for="(item,index) in CHECK_STATION">{{item.PUBLIC_NAME}}</option>
                                    </select>
                                </div>-->
                                <div class="input__item">
                                    <label class="input__label">任务标识：</label>
                                    <el-select v-model="checkDetail.CHECK_SIGN" placeholder="请选择">
                                        <el-option v-for="(item,index) in CHECK_STATION" :key="item.PUBLIC_VALUE" :label="item.PUBLIC_NAME" :value="item.PUBLIC_VALUE">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="input__item input__item--long">
                                    <label class="input__label">要检核专营店：</label>
                                    <div class="input__block">
                                        <input type="text" placeholder="请选择" id="dlrBaseName" v-model="checkDetail.DLR_NAME" class="input__text" name="DLR_NAME">
                                        <input type="hidden" id="dlrBaseId" v-model="checkDetail.DLR_ID" name="DLR_ID" />
                                        <button type="button" class="input__button" data-target=".bs-example-modal-lg" data-toggle="modal" onclick="edit.dlr_list()">...
                                      </button>
                                    </div>
                                </div>
                                <div class="input__item input__item--long">
                                    <label class="input__label">备注：</label>
                                    <textarea type="text" placeholder="请填写" id="note" class="" v-model="checkDetail.REMARK" name="" style="width:73%"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="button__group">
                            <button class="btn btn-danger" type="button" id="saveCheckTask" @click="save()">保存</button>
                            <button class="btn" type="reset" id="reset">重置</button>
                            <!--<button class="button" type="reset" id="">重置</button>-->
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <!--我是尾巴-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                checkDetail: {},
                CHECK_STATION: [],
                ranger: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                }
            }
        },
        props: ['checkId'],
        mounted() {
            var _this = this;
            console.log(this.checkId);
            var postData = { CHECK_ID: this.checkId }
            // this.$store.dispatch('showLoading');
            this.$http.post('api/AppCheckCategory/SaveLoad', postData).then(function (res) {
                // _this.$store.dispatch('hideLoading');
                console.log(res.data);
                _this.CHECK_STATION = res.data.CHECK_STATION;
                _this.checkDetail = res.data;
            }).catch(function (err) {
                alert(res.data);
                _this.$router.push({ path: '/login' });
            })
        },
        computed: {

        },
        methods: {
            save() {
                var _this = this;
                var param = {};
                param.CHECK_NAME = this.checkDetail.CHECK_NAME;
                param.CHECK_SIGN = this.checkDetail.CHECK_SIGN;
                param.CHECKINFO_TYPE = this.checkDetail.CHECKINFO_TYPE;
                param.SIGNATURE_SIGN = this.checkDetail.SIGNATURE_SIGN;
                param.REMARK = this.checkDetail.REMARK;
                param.BEGIN_DATE = this.checkDetail.BEGIN_DATE;
                param.END_DATE = this.checkDetail.END_DATE;
                param.DLR_ID = this.checkDetail.DLR_ID;
                param.UPDATE_CONTROL_ID = this.checkDetail.UPDATE_CONTROL_ID;
                param.CHECK_ID = this.checkDetail.CHECK_ID;
                param.FLAG = 1;
                this.$http.post('api/AppCheckCategory/SaveCategory', param).then(function (res) {
                    if (res.data.RESULT_CODE == 1) {
                        alert(res.data.RESULT_DESC);
                        _this.$emit('fireclose'); //通知父级组件关闭模态框
                        _this.$router.go(_this.$route.path);//刷新当前页面
                        
                    }
                    if (res.data.RESULT_CODE == 0) {
                        alert(res.data.RESULT_DESC);
                    }
                }).catch(function (err) {

                })
            }
        }
    }

</script>
<style>
    /*.input__item--long .input__text {
        width: 72%;
    }*/
    
    .input__text {
        border: 0;
        padding: 0;
        width: 50%;
        padding-left: 5px;
        height: 24px;
        line-height: 22px;
        border: 1px solid #d6d6d6;
    }
    
    .button__group {
        float: right;
    }
    
    .modal-use {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1050;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
        outline: 0;
        background: #999;
        /*filter: alpha(opacity: 70);*/
        /*opacity: 0.5;*/
    }
    
    .modal-dialog {
        /*filter: alpha(opacity: 100);*/
        /*opacity: 1;*/
        position: relative;
        width: 800px;
        margin: 10px;
        /*background: #fff;*/
        margin: 50px auto;
    }
    
    .modal-content {
        /*opacity: 1 !important;*/
        position: relative;
        background-color: #fff;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid #999;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 6px;
        outline: 0;
        -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
        box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
    }
    
    .input__label {
        float: left;
        width: 125px;
        margin-bottom: 0;
        text-align: right;
        font-weight: normal;
        font-size: 14px;
        line-height: inherit;
        color: #666;
        font-family: "微软雅黑";
    }
    
    label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: bold;
    }
    
    .input__item {
        float: left;
        width: 48%;
        vertical-align: top;
        margin-bottom: 10px;
        line-height: 24px;
    }
    /*.input__items {
        padding-left: 10px;
        padding-top: 10px;
        overflow: hidden;
    }*/
</style>