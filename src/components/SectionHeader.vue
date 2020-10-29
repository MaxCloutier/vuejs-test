<template>
  <div class="section-header">
    <b-container>
      <slot></slot>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "SectionHeader",
};
</script>

<style lang="scss">
.section-header {
  background: var(--mainBlue);
  border-bottom: 1px solid var(--mainDark);
  padding: var(--spacing-large);

  .container {
    align-items: center;
    display: flex;
  }

  svg {
    fill: #fff;
    height: 20px;
    width: 20px;
  }
}
</style>
