app.component('product-display', {
    props: {
        premium: {
          type: Boolean,
          required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="imagen" alt="" srcset="">
      </div>
      <div class="product-info">
        <h1>{{ titulo }}</h1>

        <p v-if="enVenta">{{ mensajeVenta }}</p>

        <p v-if="enStock">En Stock</p>
        <p v-else>Sin Existencias</p>

        <p>Envio: {{ envio }}
        
        <product-details :detalles="detalles"></product-details>

        <div 
          v-for="(variante, indice) in variantes" 
          :key="variante.id" 
          @mouseover="cambiarVariante(indice)"
          class="color-circle"
          :style="{ backgroundColor: variante.color }">
        </div>
        <button 
          class="button"
          :class="{ disabledButton: !enStock }"
          :disabled="!enStock"
          @click="addCarrito">
          Añadir al carrito
        </button>
      </div>
    </div>
    <review-list v-if="valoraciones.length" :valoraciones="valoraciones"></review-list>
    <review-form @review-submitted="addValoracion"></review-form>
  </div>`,
  data(){
        return {
            producto: 'Socks',
            marca: 'Vue Mastery',
            varianteSeleccionada: 0,
            detalles: ['50% Algodón', '30% Lana', '20% Poliester' ],
            variantes: [
                { id: 2234, color: 'green', imagen: './assets/images/socks_green.jpg', cantidad: 50 },
                { id: 2235, color: 'blue', imagen: './assets/images/socks_blue.jpg', cantidad: 0 },
            ],
            valoraciones: [],

            //enVenta:true
        }
    },
    methods: {
        addCarrito(){
            this.$emit('add-carrito', this.variantes[this.varianteSeleccionada].id)
        },
        cambiarVariante(indice){
            this.varianteSeleccionada = indice
        },
        addValoracion(valoracion) {
            this.valoraciones.push(valoracion)
          }
    },
    computed: {
        titulo(){
            return this.marca + ' ' + this.producto
        },
        imagen() {
            return this.variantes[this.varianteSeleccionada].imagen
        },
        enStock() {
            return this.variantes[this.varianteSeleccionada].cantidad
        },
        mensajeVenta() {
            if (this.enVenta) {
                return this.marca + ' ' + this.producto + ' está a la venta.'
            }
            return ''
        },
        envio() {
            if (this.premium) {
              return 'Gratis'
            }
            return 2.99
        }

    }
})