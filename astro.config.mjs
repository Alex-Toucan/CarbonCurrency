import { defineConfig } from "astro/config";

export default defineConfig({
  experimental: {
    fonts: [{
      provider: "local",
      name: "CustomIcons",
      cssVariable: "--font-customicons", 
      display: "block",
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/customicons.woff"]
        },
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/customicons.woff2"]
        }
      ]
    }]
  }
});
