<script>
import MainLayout from "../layouts/MainLayout.vue";
import DictionaryTable from "../components/DictionaryTable.vue";
import axios from "axios";

const host = "http://localhost:8080/api/";

export default {
  // props: ['locale'],
  data() {
    return {
      form: {
        word: '',
        locale: 'en',
      },
      value: '',
      examples: [],
    }
  },
  methods : {
    submit() {
      axios.post(host + 'translate', this.form)
          .then((res) => {
            console.log(res)
            this.value = res.data.value;
            this.examples = res.data.examples;
          })
          .catch((error) => {
            console.log(error)
          });
    }
  },
  components: {
    DictionaryTable,
    MainLayout,
  },
}
</script>

<template>
  <MainLayout>
    <template v-slot:headerslot>Перевод слова</template>

    <form v-on:submit.prevent="submit">
      <select v-model="form.locale">
        <option value="en">en</option>
        <option value="ru">ru</option>
        <option value="es">es</option>
      </select>
      <input type="text" class="form-input" v-model="form.word" placeholder="Введите слово">
      <button class="ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Submit</button>
    </form>

    <div v-if="value" class="mt-10">
      <p>Перевод: {{ value }}</p>
      <div v-for="example in examples" :key="example.id">
        <p>Пример использования: {{ example.description }}</p>
      </div>
    </div>
  </MainLayout>
</template>
