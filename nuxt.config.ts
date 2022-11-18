// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', [

        '@pinia/nuxt',

        {

          autoImports: [

            // automatically imports defineStore

            'defineStore', // import { defineStore } from 'pinia'

            // automatically imports defineStore as definePiniaStore

            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'

          ],

        },

      ],

    ],
    css: [
      "/layouts/global.css",
    ],
    app: {
      head: {
          title: "One Piece",
          meta: [
              {name: "description", content: "Everything about One Piece"}
          ],
          link: [
              {
                  rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"
              }
          ]
      }
  }
    
    

})
