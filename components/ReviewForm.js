app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Deja tu valoración</h3>
      <label for="nombre">Nombre:</label>
      <input id="nombre" v-model="nombre">
  
      <label for="valoracion">Valoracion:</label>      
      <textarea id="valoracion" v-model="valoracion"></textarea>
  
      <label for="estrellas">Estrellas:</label>
      <select id="estrellas" v-model.number="estrellas">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
  
      <label for="recomendacion">¿Recomiendas este producto?</label>
      <select id="recomendacion" v-model="recomendacion">
        <option>Si</option>
        <option>No</option>
      </select>
  
      <input class="button" type="submit" value="Enviar">  
  
    </form>`,
    data() {
      return {
        nombre: '',
        valoracion: '',
        estrellas: null,
        recomendacion: null
      }
    },
    methods: {
      onSubmit() {
        if (this.nombre === '' || this.valoracion === '' || this.estrellas === null || this.recomendacion === null) {
          alert('La valoración está incompleta, por favor rellena todos los campos.')
          return
        }
  
        let valoracionProducto = {
          nombre: this.nombre,
          valoracion: this.valoracion,
          estrellas: this.estrellas,
          recomendacion: this.recomendacion
  
        }
        this.$emit('review-submitted', valoracionProducto)
  
        this.nombre = ''
        this.valoracion = ''
        this.estrellas = null
        this.recomendacion = null
  
      }
    }
  })