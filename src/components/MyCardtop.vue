<template >
 <div class="card" style="width:400px">
    <img class="card-img-top" src="/images/img1.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">{{ species }}</h4>
      <p class="card-text">{{ character }}</p>
      <a href="#" class="btn btn-primary">{{ price }}</a>
    </div>
  </div>

</template>
<script>
export default {
  props: ['species','character','price']
}
</script>
<style scoped>
.card{
  color: rgba(186, 57, 57, 0.5);
}
</style>