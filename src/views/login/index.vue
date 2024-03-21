<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0">left</el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form">
                    <h1>Hello</h1>
                    <h2>Welcome to atGuigu Background Management System</h2>
                    <el-form-item><el-input :prefix-icon="User" v-model="loginForm.username"></el-input></el-form-item>
                    <el-form-item><el-input type="password" :prefix-icon="Lock" v-model="loginForm.password"
                            show-password></el-input></el-form-item>
                    <el-form-item><el-button :loading="loading" class="login_btn" type="primary" size="default"
                            @click="login">login</el-button>
                    </el-form-item>

                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref} from 'vue'
import useUserStore from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
import {getTime} from '@/utils/time';


let useStore = useUserStore();
let $router = useRouter();
let loading = ref(false);

let loginForm = reactive({ username: 'admin', password: '111111' })
const login = async () => {
    loading.value = true;
    try {
        await useStore.userLogin(loginForm);
        $router.push('/');
        ElNotification({
            type: 'success',
            message: 'Welcome back.',
            title: 'Hi, good '+  getTime() +'.'
        })
        loading.value = false;
    } catch (error) {
        loading.value = false;
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
    }

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