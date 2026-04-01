// @ts-check

import svelte from "@astrojs/svelte"
import {defineConfig} from "astro/config"

import cloudflare from "@astrojs/cloudflare"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  output: "static",

  // Enable Svelte to support Svelte components.
  integrations: [svelte()],

  adapter: cloudflare({
    imageService: "compile",
    prerenderEnvironment: "node",
    configPath: "./wrangler.jsonc",
  }),

  vite: {
    plugins: [tailwindcss()],
    // adding this is suggested but causes error `The `$derived` rune is only available inside `.svelte` and `.svelte.js/ts` files`
    // resolve: {
    //   noExternal: ["bits-ui"],
    // },
  },
})
