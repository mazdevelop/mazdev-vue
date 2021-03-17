<template>
  <div>
    <div class="relative pt-1">
      <div
        class="overflow-hidden h-6 mb-4 text-xs flex rounded bg-transparent border-2 border-gray-900 flex items-center"
      >
        <div
          :style="{ width: (quoteCounter / maxQuotes) * 100 + '%' }"
          class="shadow-none flex flex-col h-6 text-center whitespace-nowrap text-white justify-center bg-gray-900"
        >
          {{ quoteCounter }} / {{ maxQuotes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quoteCounter: {
      type: Number,
    },
    maxQuotes: {
      type: Number,
    },
  },
};
</script>

<style>
</style>