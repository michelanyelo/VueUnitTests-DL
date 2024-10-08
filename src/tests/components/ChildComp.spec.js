import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ChildComp from "@/components/ChildComp.vue";

describe("ChildComp.vue", () => {

    // Pruebo el envío de información desde ChildComp hacia el componente Padre
    it("Enviando información hacia el componente Padre", async () => {
        // Monto el componente ChildComp
        const wrapper = mount(ChildComp)

        // Ingreso texto en el campo de entrada
        await wrapper.find("input").setValue("Texto ingresado")

        // Disparo el evento de envío del formulario
        await wrapper.find("form").trigger("submit")

        // Verifico que se haya emitido el evento con el texto correcto
        expect(wrapper.emitted("sendText")[0]).toEqual(["Texto ingresado"])
    })
})
