<script setup>
const story = await useStoryblok('home', {
    version: "draft",
    resolve_relations: "featuredValues.values"
    },
    {
        resolveRelations: "featuredValues.values"
    });
</script>

<template>
   <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>
