<script setup>
const story = await useStoryblok('over-mij', {
    version: "draft"});
</script>

<template>
   <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>
