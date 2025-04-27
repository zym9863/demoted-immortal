<script setup>
import { RouterLink } from 'vue-router';
import IconClassical from './icons/IconClassical.vue';
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo">
        <RouterLink to="/" class="logo-link">
          <IconClassical name="lotus" size="28" color="white" />
          <span class="logo-text title-font">谪仙诗词</span>
        </RouterLink>
      </div>

      <nav class="main-nav">
        <RouterLink to="/" class="nav-link">
          <IconClassical name="home" size="18" />
          <span>首页</span>
        </RouterLink>
        <RouterLink to="/poems" class="nav-link">
          <IconClassical name="scroll" size="18" />
          <span>诗词鉴赏</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: var(--primary-color);
  background-image: linear-gradient(to right, var(--primary-dark), var(--primary-color), var(--primary-dark));
  color: white;
  padding: 1rem 0;
  box-shadow: var(--shadow-md);
  position: relative;
  z-index: 10;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
}

.logo-text {
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.main-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 0;
  transition: all var(--transition-fast);
}

.nav-link:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--accent-color);
  transition: width var(--transition-normal);
}

.nav-link:hover {
  color: var(--accent-light);
}

.nav-link:hover:after,
.nav-link.router-link-active:after {
  width: 100%;
}

.router-link-active {
  color: var(--accent-light);
  font-weight: bold;
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
  }

  .main-nav {
    width: 100%;
    justify-content: space-around;
  }
}
</style>
