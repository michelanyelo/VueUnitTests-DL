import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import AboutView from "@/views/AboutView.vue";

describe("AboutView.vue", async () => {
    // Creo una instancia de router para las pruebas con la ruta para AboutView
    const routerPrueba = createRouter({
        history: createWebHistory(),
        routes: [{
            path: "/about",
            name: "about",
            component: AboutView
        }]
    })

    // Pruebo la navegación hacia la vista AboutView
    it("Navega por la vista AboutView", async () => {
        // Agrego la ruta 'about' al router
        routerPrueba.push({ name: "about" })

        // Espero a que el router esté listo antes de continuar
        await routerPrueba.isReady()

        // Montar el componente App con el router de prueba
        const wrapper = mount(App, {
            global: {
                plugins: [routerPrueba],
            }
        })

        // Verifico que el componente AboutView esté presente en el wrapper
        expect(wrapper.findComponent(AboutView).exists()).toBeTruthy()
    })
})
