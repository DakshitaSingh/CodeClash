import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/AmazonHackon/", // ✅ Set to your GitHub repo name
});
