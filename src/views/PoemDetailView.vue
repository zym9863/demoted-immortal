<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import { poems } from '../data/poems';
import PoemDetail from '../components/PoemDetail.vue';

const route = useRoute();
const router = useRouter();
const poemId = ref(parseInt(route.params.id));

// 监听路由参数变化
watch(
  () => route.params.id,
  (newId) => {
    poemId.value = parseInt(newId);
  }
);

// 根据ID查找诗词
const poem = computed(() => {
  return poems.find(p => p.id === poemId.value);
});

// 获取上一首和下一首诗词的ID
const prevPoemId = computed(() => {
  const index = poems.findIndex(p => p.id === poemId.value);
  return index > 0 ? poems[index - 1].id : null;
});

const nextPoemId = computed(() => {
  const index = poems.findIndex(p => p.id === poemId.value);
  return index < poems.length - 1 ? poems[index + 1].id : null;
});

// 导航到上一首或下一首诗词
const navigateToPrev = () => {
  if (prevPoemId.value) {
    router.push(`/poems/${prevPoemId.value}`);
  }
};

const navigateToNext = () => {
  if (nextPoemId.value) {
    router.push(`/poems/${nextPoemId.value}`);
  }
};
</script>

<template>
  <div class="poem-detail-view">
    <div v-if="poem" class="poem-container">
      <div class="navigation-links">
        <RouterLink to="/poems" class="back-link">返回诗词列表</RouterLink>
        <div class="prev-next-links">
          <button
            v-if="prevPoemId"
            @click="navigateToPrev"
            class="nav-link"
          >
            上一首
          </button>
          <button
            v-if="nextPoemId"
            @click="navigateToNext"
            class="nav-link"
          >
            下一首
          </button>
        </div>
      </div>

      <PoemDetail :poem="poem" />
    </div>

    <div v-else class="not-found">
      <h2>未找到诗词</h2>
      <p>抱歉，未找到ID为 {{ poemId }} 的诗词。</p>
      <RouterLink to="/poems" class="back-link">返回诗词列表</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.poem-detail-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.navigation-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.back-link, .nav-link {
  color: #8c4b2a;
  text-decoration: none;
  font-weight: bold;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
}

.back-link:hover, .nav-link:hover {
  text-decoration: underline;
}

.prev-next-links {
  display: flex;
  gap: 1.5rem;
}

.not-found {
  text-align: center;
  padding: 3rem;
  background-color: #f8f4e9;
  border-radius: 8px;
}

.not-found h2 {
  color: #8c4b2a;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .navigation-links {
    flex-direction: column;
    gap: 1rem;
  }

  .prev-next-links {
    justify-content: space-between;
  }
}
</style>
