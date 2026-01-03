import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://inklayer.dev',
  integrations: [tailwind()]
})