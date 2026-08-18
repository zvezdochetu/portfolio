import { defineConfig } from 'vitepress'
//import Unocss from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/portfolio/',
  title: "А. К.",
  description: "Личный сайт и портфолио Алисы Котиковой",
  themeConfig: {
    sidebar: {
          '/projects/': [
            {
              text: 'Чем я занимаюсь',
              items: [
                { text: 'CI/CD для документации', link: '/projects/docs-as-code' },
                { text: 'Порталы OpenAPI 3.0', link: '/projects/openapi-portal' },
                { text: 'Архитектура баз знаний', link: '/projects/knowledge-architecture' }
              ]
            }
          ]
        },

    aside: true, // Включает правую панель (по умолчанию находится справа)
    outline: {
      label: 'На этой странице',
      level: 'deep' // Разворачивает оглавление на все уровни заголовков (h2–h6)
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Обо мне', link: '/about' },
      { text: 'Чем я занимаюсь',
        items: [
          { text: 'CI/CD для документации', link: '/projects/docs-as-code' },
          { text: 'Порталы OpenAPI 3.0', link: '/projects/openapi-portal' },
          { text: 'Архитектура баз знаний', link: '/projects/knowledge-architecture' }
        ]
      },
      { text: 'Резюме', link: '/cv' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
