<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">left</el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>Welcome to atGuigu Background Management System</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">
              login
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'

let useStore = useUserStore()
let loginForms = ref();
let $router = useRouter()
let loading = ref(false)

let loginForm = reactive({ username: 'admin', password: '111111' })
const login = async () => {
  await loginForms.value.validate();


  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: 'Welcome back.',
      title: 'Hi, good ' + getTime() + '.',
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

const validatorUserName = (rule: any, value: any, callback: any) => {
  if (/^.{5,10}$/.test(value)) {
    callback();
  } else {
    callback(new Error('username should contain between 5 and 10 characters'));
  }
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (/^.{6,15}$/.test(value)) {
    callback();
  } else {
    callback(new Error('password should contain between 6 and 15 characters'));
  }
}

const rules = {
  username: [
    // {required: true, message:'user name cannot be null.', trigger: 'blur'},
    // {required: true, min: 6, max: 10, message:'the length should be between 6 and 10 chars.', trigger: 'change'}
    { trigger: 'change', validator: validatorUserName }
  ],
  password: [
    // {required: true, min: 6, max: 15, message:'the length should be between 6 and 15 chars.', trigger: 'change'}
    { trigger: 'change', validator: validatorPassword }
  ]
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}

.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  padding: 40px;
}

h1 {
  color: white;
  font-size: 40px;
}

h2 {
  color: white;
  font-size: 18px;
  margin: 20px 0;
}

.login_btn {
  width: 100%;
}
</style>
