<script setup>
    defineProps({
        blok: Object,
    })
</script>

<template>
    <div class="container values-page">
        <div class="value-title">
            <h1>{{blok.name || "Mijn kernwaarden"}}</h1>
            <NuxtLink :to="{ name: 'index'}">Terug</NuxtLink>
        </div>

        <div class="value-description">
            <img :src="blok.image?.filename || 'https://www.picsum.photos/300/174'" :alt="blok.image?.alt" />
            <p>{{ blok.description || "Kernwaarden van Zoals de Boer zijn: Ploegen, Eggen, Zaaien en Oogsten" }}</p>
        </div>
    </div>
</template>