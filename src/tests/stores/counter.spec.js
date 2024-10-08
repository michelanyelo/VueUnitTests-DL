import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useCounterStore } from "@/stores/counter";

describe("useCounter", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    // Verificar que se reciba un valor inicial en el contador
    it("Contador inicial en 0", () => {
        const counterStore = useCounterStore()

        expect(counterStore.count).toBe(0)
    })

    // Probar la funcionalidad de incremento del contador.
    it("El contador aumenta", () => {
        const counterStore = useCounterStore()

        counterStore.increment()
        expect(counterStore.count).toBe(1)

        counterStore.decrement()
        expect(counterStore.count).toBe(0)
    })

})