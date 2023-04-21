<script>
import MainLayout from "../layouts/MainLayout.vue";
import DictionaryTable from "../components/DictionaryTable.vue";

export default {
  components: {
    MainLayout,
    DictionaryTable,
  },
}
</script>

<template>
  <MainLayout>
    <template slot="headerslot">Diccionario</template>
    <DictionaryTable localeFrom="en" localeTo="es"/>
  </MainLayout>
</template>
