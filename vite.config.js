import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'

export default ({ mode }) => {
  // Load environment variables from .env file
  const env = loadEnv(mode, process.cwd(), '');
 
// https://vitejs.dev/config/
return defineConfig({
  base:  env.VITE_BASE_PATH || './',
  plugins: [react()],
});
};
