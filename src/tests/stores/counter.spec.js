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

        expect(counterStore.count).toEqual(0)
    })

})