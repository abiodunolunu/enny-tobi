<template>
  <section class="flex flex-wrap justify-center items-center h-screen p-4">
    <div class="max-w-md mx-auto flex-shrink-0 w-full">
      <h2 class="font-bold text-2xl">LOGIN</h2>
      <form @submit.prevent="onSubmit">
          <input type="email" placeholder="E-mail" class="rounded" v-model="email">
          <input type="password" placeholder="Password" class="rounded" v-model="password">
          <div class="flex justify-end items-center my-4 text-sm"><p>Forgot password?</p></div>
          <button class="text-white rounded font-semibold" v-if="loading">LOADING...</button>
          <button class="text-white rounded font-semibold" v-else>LOGIN</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent,  reactive,  ref, toRefs } from "vue";

export default defineComponent({
  setup() {
    
    const loading = ref(false)

    const signInData = reactive({
      email: '',
      password: ''
    })

    const onSubmit = () => {
      console.log(signInData.email, signInData.password)
      loading.value = true

      setTimeout(() => {
        loading.value = false
      }, 1500)
    }

    return {
     ...toRefs(signInData),
     loading,
     onSubmit
    }
  }
});
</script>

<style lang="postcss" scoped>
input {
    background: #e8e5e5;
    height: 48px;
    padding: 0 1rem;
    outline: none;
    border: none;
    display: block;
    width: 100%;
    margin: 0.75rem 0;
}

button {
    height: 48px;
    width: 100%;
    transition: 300ms ease-in;
    background: #7c79f3;
    outline: none;
}

button:hover {
  transform: scale(1.05);
  background-color:#4744f2;
}

button:active {
   transform: scale(0.95);
  background-color:#1b18f5;
}

input::placeholder {
    color: #616161;
    font-weight: 700;
}


</style>
