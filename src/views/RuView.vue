<script>
import MainLayout from "../layouts/MainLayout.vue";
import DictionaryTable from "../components/DictionaryTable.vue";

export default {
  components: {
    DictionaryTable,
    MainLayout,
  },
}
</script>

<template>
  <MainLayout>
    <template v-slot:headerslot>Словарь</template>
    <DictionaryTable localeFrom="en" localeTo="ru"/>
  </MainLayout>
</template>
