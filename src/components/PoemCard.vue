<script setup>
import { RouterLink } from 'vue-router';
import IconClassical from './icons/IconClassical.vue';

// 接收诗词数据作为props
const props = defineProps({
  poem: {
    type: Object,
    required: true
  }
});

// 获取诗词内容的前两行作为摘要
const getExcerpt = (content) => {
  const lines = content.split('\n');
  return lines.slice(0, 2).join('\n');
};
</script>

<template>
  <div class="poem-card card decorative-border">
    <h3 class="poem-title title-font">{{ poem.title }}</h3>
    <div class="poem-meta">
      <span class="poem-author">{{ poem.author }}</span>
      <span class="poem-dynasty">{{ poem.dynasty }}</span>
    </div>

    <div class="poem-excerpt poem-font">
      <p>{{ getExcerpt(poem.content) }}</p>
    </div>

    <div class="poem-tags">
      <span
        v-for="(tag, index) in poem.tags"
        :key="index"
        class="tag"
      >
        {{ tag }}
      </span>
    </div>

    <RouterLink :to="`/poems/${poem.id}`" class="read-more btn btn-outline">
      <IconClassical name="scroll" size="16" />
      <span>阅读全文</span>
    </RouterLink>
  </div>
</template>

<style scoped>
.poem-card {
  background-color: var(--bg-color);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.poem-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, transparent 50%, var(--accent-light) 50%);
  border-radius: 0 0 0 var(--radius-md);
  opacity: 0.7;
  transition: opacity var(--transition-normal);
}

.poem-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.poem-card:hover::before {
  opacity: 1;
}

.poem-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  position: relative;
}

.poem-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--text-light);
  font-style: italic;
}

.poem-excerpt {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: var(--text-color);
  white-space: pre-line;
}

.poem-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background-color: var(--bg-dark);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all var(--transition-fast);
}

.tag:hover {
  background-color: var(--primary-light);
  color: white;
  transform: translateY(-2px);
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}
</style>
