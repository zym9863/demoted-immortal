<script setup>
import { RouterLink } from 'vue-router';
import IconClassical from '../components/icons/IconClassical.vue';
</script>

<template>
  <div class="home">
    <div class="hero ink-bg">
      <div class="hero-icon">
        <IconClassical name="lotus" size="64" color="var(--primary-color)" />
      </div>
      <h1 class="title-font">谪仙诗词鉴赏</h1>
      <p class="subtitle">品味古典诗词之美，感受谪仙意境之妙</p>
      <RouterLink to="/poems" class="cta-button btn btn-primary">
        <IconClassical name="scroll" size="20" />
        <span>开始鉴赏</span>
      </RouterLink>
    </div>

    <div class="divider"></div>

    <div class="intro-section">
      <h2 class="title-font">何为"谪仙"？</h2>
      <div class="intro-content decorative-border">
        <p class="classical-font">"谪仙"原指被贬谪到人间的仙人，后多用来称赞才华横溢、风格超凡的诗人，如李白被称为"诗仙"，苏轼被称为"词仙"。</p>
        <p class="classical-font">这些诗人的作品意境高远，想象丰富，语言优美，充分体现了他们旷达豁达的胸怀和对生命的热爱。</p>
        <p class="classical-font">本站收录了与"谪仙"意境相关的古典诗词作品，为您提供高质量的排版，并附带注释、背景介绍、名家解读等，营造沉浸式的鉴赏体验。</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="featured-section">
      <h2 class="title-font">精选诗词</h2>
      <div class="featured-poems">
        <div class="featured-poem card">
          <div class="poem-corner"></div>
          <h3 class="title-font">将进酒</h3>
          <p class="author">李白 · 唐</p>
          <p class="excerpt poem-font">君不见，黄河之水天上来，奔流到海不复回。<br>君不见，高堂明镜悲白发，朝如青丝暮成雪。</p>
          <RouterLink to="/poems/1" class="read-more btn btn-outline">
            <IconClassical name="scroll" size="16" />
            <span>阅读全文</span>
          </RouterLink>
        </div>
        <div class="featured-poem card">
          <div class="poem-corner"></div>
          <h3 class="title-font">赤壁怀古</h3>
          <p class="author">苏轼 · 宋</p>
          <p class="excerpt poem-font">大江东去，浪淘尽，千古风流人物。<br>故垒西边，人道是，三国周郎赤壁。</p>
          <RouterLink to="/poems/4" class="read-more btn btn-outline">
            <IconClassical name="scroll" size="16" />
            <span>阅读全文</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--bg-color);
  border-radius: var(--radius-lg);
  margin-bottom: 3rem;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(to right, var(--primary-color), var(--accent-color), var(--secondary-color));
}

.hero-icon {
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.5rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  font-style: italic;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: var(--radius-md);
}

.intro-section, .featured-section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 2.2rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
}

.intro-content {
  line-height: 1.8;
  color: var(--text-color);
  padding: 2rem;
  background-color: var(--bg-light);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.intro-content p {
  margin-bottom: 1rem;
}

.intro-content p:last-child {
  margin-bottom: 0;
}

.featured-poems {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.featured-poem {
  background-color: var(--bg-color);
  padding: 2rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.poem-corner {
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

.featured-poem:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.featured-poem:hover .poem-corner {
  opacity: 1;
}

.featured-poem h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.author {
  color: var(--text-light);
  font-style: italic;
  margin-bottom: 1rem;
}

.excerpt {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .featured-poems {
    grid-template-columns: 1fr;
  }
}
</style>
