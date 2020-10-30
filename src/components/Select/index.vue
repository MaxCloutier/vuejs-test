<template>
  <div class="select-wrapper">
    <div class="select-wrapper-2">
      <select
        v-model="selectedOption"
        @input="
          (event) => {
            $emit('input', event.target.value);
          }
        "
      >
        <option v-if="placeholder" :value="null">{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
    <BIconCaretDown />
  </div>
</template>
<script>
export default {
  name: "Select",
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  watch: {
    value: function (newValue) {
      this.selectedOption = newValue || null;
    },
  },
  mounted() {
    this.selectedOption = this.value;
  },
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
