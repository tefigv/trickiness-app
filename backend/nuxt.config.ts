// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // Development server configuration
  devServer: {
    port: parseInt(process.env.PORT || '3000'),
    host: process.env.HOST || '0.0.0.0' // Listen on all interfaces for iOS simulator access
  },
  
  // API server configuration
  nitro: {
    // API routes will be in server/api/ cors enabled
    routeRules: {
      '/api/**': { cors: true }
    }
  },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    jwtSecret: process.env.JWT_SECRET ,
    databaseUrl: process.env.DATABASE_URL,
    
    // Public keys (exposed to client-side)
    public: {
      apiBase: '/api'
    }
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  vite: {
    server: {
      hmr: {
        port: 24679 // or any free port
      }
    }
  }
})



