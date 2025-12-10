// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // Development server configuration
  devServer: {
    port: parseInt(process.env.PORT || '3000'),
    host: process.env.HOST || 'localhost'
  },
  
  // API server configuration
  nitro: {
    // Enable CORS for mobile app
    cors: true,
    // API routes will be in server/api/
    routeRules: {
      '/api/**': { cors: true }
    }
  },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
    geminiApiKey: process.env.GEMINI_API_KEY || '',
    databaseUrl: process.env.DATABASE_URL || '',
    
    // Public keys (exposed to client-side)
    public: {
      apiBase: '/api'
    }
  },

  typescript: {
    strict: true,
    typeCheck: true
  }
})

