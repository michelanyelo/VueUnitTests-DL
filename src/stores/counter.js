import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function increment() {
    count.value++
  }

  // Funcion para disminuir el contador
  const decrement = () => {
    count.value--
  }

  return { count, increment, decrement }
})
