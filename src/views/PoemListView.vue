<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { poems } from '../data/poems';
import PoemCard from '../components/PoemCard.vue';

const searchQuery = ref('');
const selectedAuthor = ref('');
const selectedDynasty = ref('');

// 获取所有作者和朝代，用于筛选
const authors = computed(() => {
  const authorSet = new Set(poems.map(poem => poem.author));
  return Array.from(authorSet);
});

const dynasties = computed(() => {
  const dynastySet = new Set(poems.map(poem => poem.dynasty));
  return Array.from(dynastySet);
});

// 根据筛选条件过滤诗词
const filteredPoems = computed(() => {
  return poems.filter(poem => {
    const matchesSearch = searchQuery.value === '' || 
      poem.title.includes(searchQuery.value) || 
      poem.content.includes(searchQuery.value);
    
    const matchesAuthor = selectedAuthor.value === '' || 
      poem.author === selectedAuthor.value;
    
    const matchesDynasty = selectedDynasty.value === '' || 
      poem.dynasty === selectedDynasty.value;
    
    return matchesSearch && matchesAuthor && matchesDynasty;
  });
});

// 重置筛选条件
const resetFilters = () => {
  searchQuery.value = '';
  selectedAuthor.value = '';
  selectedDynasty.value = '';
};
</script>

<template>
  <div class="poem-list">
    <div class="page-header">
      <h1>谪仙诗词鉴赏</h1>
      <p>探索古典诗词之美，感受谪仙意境之妙</p>
    </div>
    
    <div class="filters">
      <div class="search-box">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="搜索诗词标题或内容"
        >
      </div>
      
      <div class="filter-selects">
        <select v-model="selectedAuthor">
          <option value="">所有作者</option>
          <option v-for="author in authors" :key="author" :value="author">
            {{ author }}
          </option>
        </select>
        
        <select v-model="selectedDynasty">
          <option value="">所有朝代</option>
          <option v-for="dynasty in dynasties" :key="dynasty" :value="dynasty">
            {{ dynasty }}
          </option>
        </select>
        
        <button class="reset-button" @click="resetFilters">重置筛选</button>
      </div>
    </div>
    
    <div class="poems-container">
      <PoemCard 
        v-for="poem in filteredPoems" 
        :key="poem.id" 
        :poem="poem"
      />
      
      <div v-if="filteredPoems.length === 0" class="no-results">
        <p>未找到符合条件的诗词，请尝试其他筛选条件。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.poem-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #8c4b2a;
  margin-bottom: 0.5rem;
}

.page-header p {
  font-size: 1.2rem;
  color: #5a5a5a;
}

.filters {
  margin-bottom: 2rem;
  background-color: #f8f4e9;
  padding: 1.5rem;
  border-radius: 8px;
}

.search-box {
  margin-bottom: 1rem;
}

.search-box input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.filter-selects {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-selects select {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
  min-width: 150px;
  font-size: 1rem;
}

.reset-button {
  padding: 0.8rem 1.5rem;
  background-color: #8c4b2a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.reset-button:hover {
  background-color: #6a381f;
}

.poems-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  background-color: #f8f4e9;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .filter-selects {
    flex-direction: column;
  }
  
  .poems-container {
    grid-template-columns: 1fr;
  }
}
</style>
