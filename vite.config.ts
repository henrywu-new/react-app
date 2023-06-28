import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolve = (dir: string) => {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    resolve: {
      alias: { '@': resolve('src') },
    },
    build: {
      target: 'es2015',
      minify: 'terser',
      cssCodeSplit: true,
      rollupOptions: {
        plugins: [],
      },
    },
  }
})
