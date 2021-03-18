<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <HeaderQuotes
      :quoteCounter="state.quote.length"
      :maxQuotes="state.maxQuote"
    />
    <div
      class="container mx-auto px-4 font-mono bg-white py-8 px-6 shadow rounded-lg sm:px-10"
    >
      <div class="mb-0 space-y-6">
        <h1 class="text-center font-semibold">Quote</h1>
        <FormQuotes @addQuote="addQuote" />
        <hr />
        <QuotesList :state="state" @remove="removeItem" />
      </div>
    </div>
  </div>
</template>
    <script>
import { reactive, computed } from "vue";
import HeaderQuotes from "@/components/Quote/HeaderQuotes";
import FormQuotes from "@/components/Quote/FormQuotes";
import QuotesList from "@/components/Quote/QuotesList";
export default {
  components: {
    HeaderQuotes,
    FormQuotes,
    QuotesList,
  },
  setup(props, { emit }) {
    const state = reactive({
      quote: [],
      maxQuote: 10,
      sortedQuotes: computed(() => {
        let temp = [];
        temp = state.quote?.slice().sort(function (a, b) {
          return b.date - a.date;
        });
        return temp;
      }),
    });

    function addQuote(data) {
      let d = data?.date.split("-");
      let newD = new Date(d[0], d[1], d[2]);
      if (parseInt(state.quote.length) >= parseInt(state.maxQuote)) {
        emit("bad-value");
      } else {
        state.quote = [
          ...state.quote,
          {
            id: Date.now(),
            author: data.author,
            quote: data.quote,
            date: newD.getTime(),
          },
        ];
      }
    }
    function removeItem(id) {
      state.quote = state.quote.filter((data) => data.id !== id);
    }
    return { state, addQuote, removeItem };
  },
};
</script>
<style></style>