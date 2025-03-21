import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      ...mdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: 'frontmatter' }]
        ]
      }),
      enforce: 'pre'
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
    tsconfigPaths(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['@mdx-js/react']
  }
});