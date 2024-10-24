<template>
    <div class="signup-form-container">
        <h2> Sign up </h2>
        <form class="signup-form" @submit.prevent="handleSignup">
            <div class="form-input">
                <label>Email:</label>
                <input type="email" v-model="email" required />
            </div>
            <div class="form-input">
                <label>Password:</label>
                <input type="password" v-model="password" required />
            </div>

            <button type="submit">Sign Up</button>
        </form>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <p v-if="successMessage">{{ successMessage }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { signup } from './../Services/firebaseConfiq.js'

const email = ref("");
const password = ref("");
const emailRegEx = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/
const errorMessage = ref("");
const successMessage = ref("");



const handleSignup = async () => {
    if (emailRegEx.test(email.value)) {
        const result = await signup(email.value, password.value)

        if (result.success) {
            successMessage.value = `User ${result.user.email} created successfully!`;
        } else {
            errorMessage.value = result.message;
        }
    } else {
        alert("Email is incorrectly typed")
    }
}

</script>

<style lang="scss" scoped></style>