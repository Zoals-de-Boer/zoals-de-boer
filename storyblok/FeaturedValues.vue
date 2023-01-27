<script setup>
    defineProps({
        blok: Object,
    })
</script>

<template>
    <div class="container mx-auto" v-editable="blok">
        <h1>{{blok.title}}</h1>

        <div class="grid grid-cols-4 gap-4">
            <div class="value bg-[#20303f]" v-for="value in blok.values" :key="value._uid">
                <NuxtLink :to="{ name: 'values-slug', params: { slug: value.slug }  }">
                    <img :src="value.content.image?.filename" :alt="value.content.image?.alt" />
                    <h3>{{ value.content.name }}</h3>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>