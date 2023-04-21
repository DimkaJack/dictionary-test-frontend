<script>
const host = "http://localhost:8080/api/";

export default {
  name: "DictionaryTable",
  props: ["localeFrom", "localeTo"],
  data() {
    return {
      loading: false,
      categories: [],
      dictionary: [],
    }
  },
  methods: {
    async getData() {
      try {
        const [categories, dictionary] = await Promise.all([
          fetch(host + "categories", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }),
          fetch(host + "dictionary?localeFrom=" + this.localeFrom + "&localeTo=" + this.localeTo, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }),
        ]);
        this.categories = await categories.json();
        this.dictionary = await dictionary.json();
        this.loading = true;
      } catch (e) {
        console.log(e);
      }
    },
    filteredTranslations(category) {
      return this.dictionary.data.filter((translation) => translation.category === category)
    }
  },
  mounted() {
    this.getData()
  },
}
</script>

<template>
  <table class="table-auto w-full">
    <thead>
    <tr>
      <th v-for="category in categories.data" class="border border-slate-300">{{ category.name }}</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td v-for="category in categories.data">
        <table class="w-full table-auto">
          <tbody>
          <tr v-if="loading" v-for="translation in filteredTranslations(category.id)">
            <td class="border border-slate-300">{{ translation.value }}</td>
            <td class="border border-slate-300" >{{ translation.translation ? translation.translation.value : '' }}</td>
          </tr>
          </tbody>
        </table>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>
