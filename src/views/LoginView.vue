<template>
    <button @click="toggleForm">{{ isLogin ? 'Go to Signup' : 'Go to Login' }}</button>
    <LoginForm v-if="isLogin" />
    <SignupForm v-else />
</template>

<script setup>
import { ref } from 'vue'
import SignupForm from "./../components/SignupForm.vue"
import LoginForm from "./../components/LoginForm.vue"

const isLogin = ref(true)


const toggleForm = () => {
    isLogin.value = !isLogin.value;
};

</script>

<style lang="scss" scoped></style>