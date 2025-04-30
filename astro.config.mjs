import { defineConfig } from "astro/config";

export default defineConfig({
  experimental: {
    fonts: [{
      provider: "local",
      name: "CustomIcons",
      cssVariable: "--font-customicons", 
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/customicons.woff"],
          display: "block"
        },
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/customicons.woff2"],
          display: "block"
        }
      ]
    }]
  }
});
