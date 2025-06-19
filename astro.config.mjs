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
    }],
    csp: {
      styleDirective: {
        resources: [
          "'self'",
          "'unsafe-inline'",
          "https://cdn.jsdelivr.net"
        ]
      },
      scriptDirective: {
        resources: [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-hashes'",
          "https://cdn.jsdelivr.net"
        ]
      },
      directives: [
        "default-src 'none'",
        "frame-src 'self' https://app.netlify.com/ https://codepen.io",
        "form-action 'self'",
        "base-uri 'self'",
        "manifest-src 'self'",
        "font-src 'self' data: https://cdn.jsdelivr.net",
        "object-src 'self'",
        "img-src 'self' data:",
        "frame-ancestors 'self'"
      ]
    }
  }
});
