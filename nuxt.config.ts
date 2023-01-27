// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/main.css"],
    modules: [
        [
            "@storyblok/nuxt",
            {
                accessToken: "gxVQpz67ho5lriZ3bRQc3Qtt",
            }
        ]
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
