// Simple in-memory rate limiter for per-key throttling (use a real store in production)
type Bucket = {
  timestamps: number[]
}

const buckets: Record<string, Bucket> = {}

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
) {
  const now = Date.now()
  const bucket = (buckets[key] = buckets[key] || { timestamps: [] })

  // purge old
  bucket.timestamps = bucket.timestamps.filter(ts => now - ts < windowMs)

  if (bucket.timestamps.length >= limit) {
    throw createError({
      statusCode: 429,
      message: 'Too many requests'
    })
  }

  bucket.timestamps.push(now)
}

