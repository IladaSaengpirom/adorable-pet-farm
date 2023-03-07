<template>
  <main>
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
        <v-row>
          <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="/images/Dog/Beagle (1).jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Dog/Chowchow (2).jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <p class="card-text">{{  }}</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/Dog/Englishbulldog.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <p class="card-text">{{  }}</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ species }}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>


        </v-row>
        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</main>
</template>

<script>
  export default {
    data: () => ({
      tab: null,
    }),
    props :['species','price']
  }
</script>

<style scoped>

</style>