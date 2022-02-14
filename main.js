const app = Vue.createApp({
    data(){
        return {
            carrito: [],
            premium: true
        }
    },
    methods: {
        actualizaCarrito(id) {
            this.carrito.push(id)
        }
    }
})