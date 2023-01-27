<script setup>
    defineProps({
        blok: Object,
    })
</script>

<template>
    <div class="hero flex justify-around align-center mx-auto mb-4 container p-8 lg:p-16" v-editable="blok">
        <img 
            v-if="blok.image" 
            :src="blok.image.filename" 
            :title="blok.image.title" 
            :alt="blok.image.alt"
        />
        <div class="ml-8">
            <h1 class="text-3xl md:text-5xl font-bold mb-2">{{ blok.heading }}</h1>
            <p class="text-md text-white">{{ blok.subheading }}</p>
        </div>
    </div>
</template>