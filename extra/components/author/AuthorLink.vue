<template>
  <div class="author-container" @mouseenter="isCardVisible = true" @mouseleave="isCardVisible = false">
    <span class="author-name-link">
      <slot>{{ author.name }}</slot>
    </span>

    <transition name="fade">
      <div v-if="isCardVisible && author" class="author-card">
        <div class="card-header">
          <img v-if="author.avatar" :src="withBase(author.avatar)" :alt="author.name" class="author-avatar" />
          <div class="author-identity">
            <strong class="author-name">{{ author.name }}</strong>
            <p v-if="author.bio" class="author-bio">{{ author.bio }}</p>
          </div>
        </div>
        <div v-if="hasLinks" class="card-links">
          <a v-if="author.contacts?.email" :href="'mailto:' + author.contacts.email" title="Email" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>Email</span>
          </a>
          <a v-if="author.contacts?.qq" :href="'tencent://message/?uin=' + author.contacts.qq" title="QQ" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.23 8.8c.32-.32.85-.32 1.17 0l1.6 1.6c.32.32.32.85 0 1.17l-1.6 1.6c-.32.32-.85.32-1.17 0l-1.6-1.6c-.32-.32-.32-.85 0-1.17l1.6-1.6z"></path><path d="M16.83 13.2l1.6-1.6c.32-.32.85-.32 1.17 0l1.6 1.6c.32.32.32.85 0 1.17l-1.6 1.6c-.32.32-.85.32-1.17 0l-1.6-1.6z"></path><path d="M21.6 18.8c0 1.23-1.17 2.2-2.6 2.2H5.2c-1.43 0-2.6-1-2.6-2.2V5.2C2.6 4 3.77 3 5.2 3h13.6c1.43 0 2.6 1 2.6 2.2v13.6z"></path></svg>
            <span>QQ</span>
          </a>
          <a v-if="author.links?.website" :href="author.links.website" title="个人网站" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
            <span>Website</span>
          </a>
          <a v-if="author.links?.github" :href="author.links.github" title="GitHub" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>GitHub</span>
          </a>
          <a v-if="author.links?.bilibili" :href="author.links.bilibili" title="Bilibili" target="_blank" rel="noopener noreferrer">
            <svg t="1755805483620" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1496" width="20" height="20"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 0 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.114667 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="1497" fill="#8a8a8a"></path></svg>
            <span>Bilibili</span>
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { withBase } from 'vitepress';
import authorsData from '../../data/authors.json';

const props = defineProps({
  authorId: {
    type: String,
    required: true,
  },
});

const isCardVisible = ref(false);

const author = computed(() => {
  const data = authorsData[props.authorId];
  if (!data) {
    console.warn(`[AuthorLink] Author with ID '${props.authorId}' not found in authors.json.`);
    return { name: props.authorId }; // Fallback to show the ID
  }
  return data;
});

const hasLinks = computed(() => {
  return author.value && (author.value.contacts || author.value.links);
});
</script>

<style scoped>
.author-container {
  position: relative;
  display: inline-block;
}

.author-name-link {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  cursor: default;
  border-bottom: 1px dashed var(--vp-c-brand-soft);
}

.author-card {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  width: 300px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px;
  box-shadow: var(--vp-shadow-2);
  z-index: 10;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-5px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--vp-c-bg);
}

.author-identity {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-size: 1.1em;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.author-bio {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  margin: 4px 0 0;
  line-height: 1.4;
}

.card-links {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 8px;
}

.card-links a {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  transition: color 0.2s ease;
  padding: 4px;
  border-radius: 4px;
}

.card-links a:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.card-links a svg {
  stroke: currentColor;
}
</style>