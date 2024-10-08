<script setup>
import { ref } from 'vue';
import ChildComp from './ChildComp.vue';

const message = ref('')

const displayText = (text) => {
    message.value = text;
}
</script>

<template>
    <div>
        <ChildComp @sendText="displayText" />
        <p>{{ message }}</p>
    </div>
</template>