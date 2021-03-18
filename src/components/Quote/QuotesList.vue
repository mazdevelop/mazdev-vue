<template>
  <div class="grid grid-cols-1">
    <div class="flex flex-wrap justify-between p-2">
      <h3>Delete</h3>
      <h3>Author</h3>
      <h3></h3>
      <h3>Date</h3>
    </div>
    <QuotesItem
      v-for="data in state.sortedQuotes"
      :key="data.id"
      :quote="data"
      @removeItem="removeQuotes(data.id)"
    />
  </div>
</template>

<script>
import QuotesItem from "@/components/Quote/QuotesItem";

export default {
  components: {
    QuotesItem,
  },
  props: {
    state: Object,
  },
  setup(props, { emit }) {
    function removeQuotes(id) {
      emit("remove", id);
    }
    return { removeQuotes };
  },
};
</script>

<style>
</style>