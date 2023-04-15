import { defineConfig } from 'npm:vite@^4.0.4'
import react from 'npm:@vitejs/plugin-react@^3.0.1'

import 'npm:react@^18.2.0'
import 'npm:react-dom@^18.2.0/client'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    cors: false,
    fs: {strict: false}
  },
  hmr: {
    host: '0.0.0.0',
    port: 3010,
  },
  plugins: [react()]
})
