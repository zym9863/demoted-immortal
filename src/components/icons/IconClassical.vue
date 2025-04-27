<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  }
});

const iconPath = computed(() => {
  return new URL(`../../assets/icons/${props.name}.svg`, import.meta.url).href;
});

const iconStyle = computed(() => {
  return {
    width: `${props.size}px`,
    height: `${props.size}px`,
    display: 'inline-block',
    color: props.color
  };
});
</script>

<template>
  <span class="icon" :style="iconStyle">
    <img :src="iconPath" :alt="name" class="svg-icon" />
  </span>
</template>

<style scoped>
.icon {
  vertical-align: middle;
}

.svg-icon {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
