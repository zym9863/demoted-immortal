<script setup>
import IconClassical from './icons/IconClassical.vue';
</script>

<template>
  <footer class="app-footer">
    <div class="footer-decoration">
      <div class="mountain-icon">
        <IconClassical name="mountain" size="32" color="white" />
      </div>
    </div>
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-logo">
          <IconClassical name="lotus" size="24" color="white" />
          <span class="title-font">谪仙诗词鉴赏</span>
        </div>
        <p class="footer-text">&copy; {{ new Date().getFullYear() }}</p>
        <p class="footer-description">品味古典诗词之美，感受谪仙意境之妙</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--primary-color);
  background-image: linear-gradient(to right, var(--primary-dark), var(--primary-color), var(--primary-dark));
  color: white;
  padding: 2rem 0;
  margin-top: 3rem;
  position: relative;
}

.footer-decoration {
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.mountain-icon {
  background-color: var(--primary-color);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  text-align: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.footer-description {
  font-size: 0.9rem;
  opacity: 0.8;
  font-style: italic;
}
</style>
