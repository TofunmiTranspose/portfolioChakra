import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the repository name from the homepage field in package.json
// Or set it directly if you know your repo name
const repoName = 'portfolioChakra'; // Replace with your actual GitHub repository name if different

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // This is crucial for GitHub Pages serving from a subpath
  build: {
    outDir: 'dist', // Default for Vite, but confirm this is what gh-pages is configured for
  },
});