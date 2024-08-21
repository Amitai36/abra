import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env.OPEN_WEATHE_MAP_TOCKEN": JSON.stringify(env.OPEN_WEATHE_MAP_TOCKEN),
    },
    plugins: [react()],
    server: {
      fs: {
        cachedChecks: false,
      },
    },
  };
});