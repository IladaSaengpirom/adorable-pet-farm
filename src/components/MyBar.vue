<template>
  <div>
  <v-carousel     cycle
    height="800"
    hide-delimiter-background
    show-arrows="hover" >
    
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</div>

</template>



<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/images/imgtop/imgtop1.jpeg',
          },
          {
            src: '/images/imgtop/imgtop3.jpg',
          },
          {
            src: '/images/imgtop/imgtop7.jpg',
          },
          {
            src: '/images/imgtop/imgtop6.jpg',
          },
        ],
      }
    },
  
  }
</script>

<style scoped>

</style>