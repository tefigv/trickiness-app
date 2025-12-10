export default defineEventHandler((event) => {
  return {
    status: 'ok',
    message: 'Trickiness API is running',
    timestamp: new Date().toISOString()
  }
})

