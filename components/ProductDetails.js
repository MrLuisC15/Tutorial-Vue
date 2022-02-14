app.component('product-details', {
    props: {
      details: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <ul>
      <li v-for="detalle in detalles">{{ detalle }}</li>
    </ul>
    `
  })