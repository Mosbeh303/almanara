<template>
  <label :for="forr" class="block mb-2 text-sm font-medium text-gray-700">
    {{ text }}
  </label>
</template>

<script>
export default {
  name: 'Label',
  props: {
    forr: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
/* Add any scoped styles here, if needed */
</style>
