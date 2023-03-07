<template>
  <v-card style="margin-top:40px ;">
    <v-tabs
      v-model="tab"
      align-tabs="center"
    >
      <v-tab value="one">DAG</v-tab>
      <v-tab value="two">CAT</v-tab>

    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
        <v-row >
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="/images/Dog/Beagle (1).jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn> </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Dog/Chowchow (2).jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn>  </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Dog/Englishbulldog.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn>
          </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Dog/Frenchbulldog (1).jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn>
         </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Dog/Frenchbulldog (4).jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn>
        </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Dog/Frenchbulldog (1).jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn>
      </div>
    </div>
  </div>
</div>


        </v-row>
        </v-window-item>

        <v-window-item value="two">
          <v-row>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="/images/Cat/Scottishfold2.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn> </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Cat/Ragdoll1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn>  </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Cat/KhaoManee (2).jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn>
          </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Cat/KhaoManee (2).jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn>
         </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Cat/Britishshorthair(2).jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn>
        </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Cat/AmericanShorthair (2).jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <h6>gender: {{ gender }}<br> อายุ {{ age }}</h6>
        <p class="card-text"> {{ price }}</p>
        <v-btn variant="outlined" >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
   <path d="M15 6h6m-3 -3v6"></path>
</svg>
        </v-btn>
      </div>
    </div>
  </div>
</div>


        </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      tab: null,
    }),
    props :['ID','species','price','age','gender']
  }
</script>

<style scoped>

</style>