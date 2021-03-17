<template>
  <form class="flex flex-col space-y-4" @submit.prevent="FormHandler">
    <div>
      <label for="author" class="text-sm"> Author </label>
      <input
        type="text"
        class="outline-none cursor-pointer mt-2 text-gray-900 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 focus:ring-2 focus:ring-teal-300"
        name=""
        id="author"
        placeholder="Author..."
        v-model="formData.author"
      />
    </div>
    <div>
      <label for="quote" class="text-sm">Quote</label>
      <textarea
        class="outline-none cursor-pointer mt-2 text-gray-900 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 focus:ring-2 focus:ring-teal-300"
        name=""
        id="quote"
        v-model="formData.quote"
      ></textarea>
    </div>
    <div>
      <label for="date" class="text-sm">Date</label>

      <input
        id="date"
        type="date"
        class="outline-none cursor-pointer mt-2 text-gray-900 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 focus:ring-2 focus:ring-teal-300"
        name=""
        placeholder="Date"
        v-model="formData.date"
      />
    </div>
    <button
      class="capitalize outline-none cursor-pointer bg-blue-700 inline-block self-end rounded-lg px-6 py-2 font-mono font-bold text-sm text-white"
    >
      send
    </button>
  </form>
</template>
<script>
import { reactive } from "vue";
export default {
  setup(props, { emit }) {
    const formData = reactive({
      author: null,
      quote: null,
      date: null,
    });
    function FormHandler() {
      emit("add-quote", {
        author: formData.author,
        quote: formData.quote,
        date: formData.date,
      });
      formData.author = null;
      formData.quote = null;
      formData.date = null;
    }
    return { FormHandler, formData };
  },
};
</script>
<style></style>