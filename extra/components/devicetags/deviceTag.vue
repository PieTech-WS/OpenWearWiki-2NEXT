<template>
  <div class="device-tags">
    <component
      v-for="(tag, index) in tags"
      :is="getTagComponent(tag)"
      :key="typeof tag === 'string' ? tag : tag.key || index"
      :href="getTagLink(tag)"
      :target="isExternalLink(getTagLink(tag)) ? '_blank' : undefined"
      :rel="isExternalLink(getTagLink(tag)) ? 'noopener noreferrer' : undefined"
      class="device-tag"
      :style="{ 'background-image': `url(${getImagePath(tag)})` }"
    >
    </component>
  </div>
</template>

<script>
import tagMapping from './res/tag_mapping.json';

export default {
  props: {
    tags: {
      type: Array,
      required: true,
      validator: value => {
        return value.every(tag => typeof tag === 'string' || (typeof tag === 'object' && 'key' in tag)); // link is optional
      }
    }
  },
  methods: {
    getImagePath(tag) {
      const key = typeof tag === 'string' ? tag : tag.key;
      const imageName = tagMapping[key];
      if (!imageName) {
        // Add a warning for easier debugging if a tag is not found
        console.warn(`Image mapping not found for tag key: ${key}`);
        return '';
      }
      return new URL(`./res/${imageName}`, import.meta.url).href;
    },
    getTagComponent(tag) {
      // If the tag object has a link property, render it as an 'a' tag
      return (typeof tag === 'object' && tag.link) ? 'a' : 'div';
    },
    getTagLink(tag) {
      return (typeof tag === 'object' && tag.link) ? tag.link : undefined;
    },
    isExternalLink(link) {
      if (!link) return false;
      // A simple check for external links
      return /^(https?|mailto|tel):/.test(link);
    }
  }
};
</script>

<style scoped>
.device-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
}

a.device-tag {
  /* Add a subtle hover effect for clickable tags */
  transition: transform 0.2s ease;
}
a.device-tag:hover {
  transform: translateY(-2px);
}

.device-tag {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  width: 109px;
  height: 27px;
}

@media (max-width: 768px) {
  .device-tag {
    width: 80px;
    height: 20px;
  }
}
</style>