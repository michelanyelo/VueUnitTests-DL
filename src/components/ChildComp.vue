<script setup>
import { ref, defineEmits } from 'vue';

const inputText = ref('')
const emit = defineEmits(['sendText'])

const sendTextToParent = () => {
    emit('sendText', inputText.value)
}
</script>

<template>
    <div>
        <form @submit.prevent="sendTextToParent">
            <input v-model="inputText" type="text" />
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>
