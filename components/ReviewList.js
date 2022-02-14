app.component('review-list', {
    props: {
      valoraciones: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Valoraciones:</h3>
      <ul>
        <li v-for="(valoracion, indice) in valoraciones" :key="indice">
          {{ valoracion.nombre }} ha dado {{ valoracion.estrellas }} estrellas
          <br/>
          "{{ valoracion.valoracion }}"
          <br/>
          Recomendacion: {{ valoracion.recomendacion }}
        </li>
      </ul>
    </div>
  `
  })