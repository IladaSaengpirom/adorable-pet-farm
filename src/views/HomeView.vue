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
5285
        </v-window-item>

        <v-window-item value="two">
255352
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