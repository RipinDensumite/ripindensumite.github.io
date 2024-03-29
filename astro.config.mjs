import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
const BASE_URL = "https://arifindensumite.github.io";


// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  integrations: [tailwind(), svelte()]
});