<template lang="">
  <v-card style="margin-top:40px ;">
    <v-tabs
      v-model="tab"
      align-tabs="center"
    >
      <v-tab value="one">DAG</v-tab>
      <v-tab value="two">CAT</v-tab>

    </v-tabs>
  </v-card>
</template>
<script>
export default {
    data: () => ({
      tab: null,
    }),
}
</script>
<style lang="">
    
</style>