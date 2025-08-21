<template>
  <div class="product-page">
    <!-- 标题 -->
    <h1 v-if="frontmatter.title">{{ frontmatter.title }}</h1>

    <!-- 设备标签 -->
    <DeviceTags v-if="frontmatter.tags" :tags="frontmatter.tags" />

    <!-- 产品图库 -->
    <div v-if="frontmatter.gallery && frontmatter.gallery.length" class="gallery-section">
      <h2>Gallery</h2>
      <div class="gallery-grid">
        <a
          v-for="image in frontmatter.gallery"
          :key="image.src"
          :href="image.link ? withBase(image.link) : undefined"
          class="gallery-item"
          :class="{ 'is-link': image.link }"
          :target="image.link && image.link.startsWith('http') ? '_blank' : undefined"
          :rel="image.link && image.link.startsWith('http') ? 'noopener noreferrer' : undefined"
        >
          <img :src="withBase(image.src)" :alt="image.alt || frontmatter.title" />
        </a>
      </div>
    </div>

    <!-- 参数表格 -->
    <div v-if="frontmatter.parameters && frontmatter.parameters.length" class="parameters-section">
      <h2>参数</h2>
      <table class="parameters-table">
        <tbody>
        <tr v-for="param in frontmatter.parameters" :key="param.item">
          <td>{{ param.item }}</td>
          <!-- 使用 v-html 以支持 <br> 等 HTML 标签 -->
          <td v-html="param.value"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- 用于渲染 Markdown 文件中除了 frontmatter 外的其他内容 -->
    <Content class="extra-content"/>
  </div>
</template>

<script setup>
import { useData, withBase } from 'vitepress';
import DeviceTags from '../devicetags/deviceTag.vue';

const { frontmatter } = useData();
</script>

<style scoped>
.product-page {
  max-width: 820px;
  margin: 0 auto;
  /* Add top padding to prevent the title from being obscured by the fixed nav bar. */
  /* Also add some bottom padding for better spacing. */
  padding: 32px 24px 64px;
}

h1 {
  font-size: 2.25em;
  font-weight: 700;
  margin-bottom: 8px;
}

/*
 * Use the :deep() pseudo-class to apply styles to h2 elements
 * both within this component's template (Gallery, 参数) and inside
 * the <Content /> component (注释). This ensures consistent styling.
 */
.product-page :deep(h2) {
  font-size: 1.65em;
  font-weight: 600;
  margin-top: 48px;
  margin-bottom: 16px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
}

.gallery-section .gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.gallery-item {
  display: block;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  line-height: 0; /* Removes extra space below the image inside the link */
}

.gallery-item.is-link {
  transition: all 0.2s ease-in-out;
}

.gallery-item.is-link:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.gallery-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.parameters-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.parameters-table tr {
  border-bottom: 1px solid var(--vp-c-divider);
}
.parameters-table tr:last-child {
  border-bottom: none;
}

.parameters-table td {
  padding: 12px 16px;
  line-height: 1.6;
}

.parameters-table td:first-child {
  font-weight: 600;
  width: 35%;
  background-color: var(--vp-c-bg-soft);
}
</style>