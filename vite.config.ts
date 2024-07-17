import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import mkcert from'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  /*
  server: {
    https: true
  }, // Not needed for Vite 5+ (simply omit this option)
  plugins: [mkcert(), react()]
  */
});
