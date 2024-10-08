import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useCounterStore } from "@/stores/counter";

describe("useCounter", () => {
    // Antes de cada prueba inicializo una nueva instancia de Pinia
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    // Verifico que el contador inicial sea 0
    it("Contador inicial en 0", () => {
        const counterStore = useCounterStore()
        // Afirmo que el valor inicial del contador es 0
        expect(counterStore.count).toBe(0)
    })

    // Pruebo la funcionalidad de incremento y decremento del contador
    it("El contador aumenta", () => {
        const counterStore = useCounterStore()

        // Incremento el contador
        counterStore.increment()
        // Verifico que el contador sea 1 después de incrementar
        expect(counterStore.count).toBe(1)

        // Decremento el contador
        counterStore.decrement()
        // Verifico que el contador vuelva a ser 0 después de decrementar
        expect(counterStore.count).toBe(0)
    })
})
