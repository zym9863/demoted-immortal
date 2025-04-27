<script setup>
import { ref } from 'vue';

// 接收诗词数据作为props
const props = defineProps({
  poem: {
    type: Object,
    required: true
  }
});

// 控制注释的显示状态
const showNotes = ref(true);

// 切换注释显示状态
const toggleNotes = () => {
  showNotes.value = !showNotes.value;
};

// 处理诗词内容，添加注释
const processedContent = () => {
  if (!props.poem || !props.poem.content) return [];
  
  const lines = props.poem.content.split('\n');
  return lines.map(line => {
    const note = props.poem.notes?.find(n => n.line === line);
    return {
      text: line,
      note: note?.note || null
    };
  });
};
</script>

<template>
  <div class="poem-detail">
    <div class="poem-header">
      <h1 class="poem-title">{{ poem.title }}</h1>
      <div class="poem-meta">
        <span class="poem-author">{{ poem.author }}</span>
        <span class="poem-dynasty">{{ poem.dynasty }}</span>
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
    </div>
    
    <div class="poem-content-container">
      <div class="poem-content">
        <div 
          v-for="(line, index) in processedContent()" 
          :key="index" 
          class="poem-line"
        >
          <p class="line-text">{{ line.text }}</p>
          <div 
            v-if="showNotes && line.note" 
            class="line-note"
          >
            <span class="note-icon">注</span>
            <span class="note-text">{{ line.note }}</span>
          </div>
        </div>
      </div>
      
      <div class="notes-toggle">
        <button @click="toggleNotes">
          {{ showNotes ? '隐藏注释' : '显示注释' }}
        </button>
      </div>
    </div>
    
    <div class="poem-sections">
      <div class="poem-section background">
        <h2>创作背景</h2>
        <p>{{ poem.background }}</p>
      </div>
      
      <div class="poem-section appreciation">
        <h2>鉴赏</h2>
        <p>{{ poem.appreciation }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.poem-detail {
  background-color: #f8f4e9;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.poem-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e6d9c2;
}

.poem-title {
  font-size: 2.5rem;
  color: #8c4b2a;
  margin-bottom: 1rem;
}

.poem-meta {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  color: #666;
  font-style: italic;
}

.poem-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tag {
  background-color: #e6d9c2;
  color: #8c4b2a;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.poem-content-container {
  margin-bottom: 3rem;
}

.poem-content {
  font-size: 1.2rem;
  line-height: 2;
  margin-bottom: 1.5rem;
}

.poem-line {
  margin-bottom: 1.5rem;
}

.line-text {
  margin-bottom: 0.5rem;
}

.line-note {
  background-color: #f0e9d9;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #666;
  margin-left: 2rem;
}

.note-icon {
  display: inline-block;
  background-color: #8c4b2a;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.notes-toggle {
  text-align: center;
}

.notes-toggle button {
  background-color: #e6d9c2;
  color: #8c4b2a;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.notes-toggle button:hover {
  background-color: #d9c9a9;
}

.poem-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.poem-section {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.poem-section h2 {
  color: #8c4b2a;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.poem-section p {
  line-height: 1.8;
  color: #333;
}

@media (max-width: 768px) {
  .poem-sections {
    grid-template-columns: 1fr;
  }
  
  .poem-title {
    font-size: 2rem;
  }
  
  .poem-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
