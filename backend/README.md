# Trickiness App - Backend

Backend API server for the Trickiness App built with Nuxt.js. Handles database operations, authentication, and AI integration.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Google Gemini API key

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
   - `DATABASE_URL` - PostgreSQL connection string
   - `GEMINI_API_KEY` - Google Gemini API key
   - `JWT_SECRET` - Secret key for JWT tokens
   - `PORT` - Server port (default: 3000)

4. Set up database:
```bash
# Run Prisma migrations
npx prisma migrate dev

# Generate Prisma client
npx prisma generate
```

acces primsa studio (db interface): npx prisma studio

5. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000/api` (or the port you configured)

### Changing the Port

You can change the port in three ways:

1. **Environment variable** (recommended):
   ```bash
   # In your .env file
   PORT=3001
   ```

2. **Command line**:
   ```bash
   npm run dev -- --port 3001
   ```

3. **In `nuxt.config.ts`**:
   ```typescript
   devServer: {
     port: 3001
   }

1. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables (same as above)

4. Run migrations:
```bash
alembic upgrade head
```

5. Start the server:
```bash
uvicorn main:app --reload
```

## 📁 Project Structure

```
backend/
├── server/              # Server-side code
│   ├── api/             # API routes (auto-routed by Nuxt)
│   │   ├── auth/        # Authentication endpoints
│   │   ├── habits/      # Habit endpoints
│   │   ├── mood/        # Mood logging endpoints
│   │   ├── journal/     # Journal endpoints
│   │   ├── goals/       # Goal endpoints
│   │   └── insights/    # AI insights endpoints
│   ├── utils/           # Utility functions
│   ├── middleware/      # Nuxt middleware
│   └── services/        # Business logic (AI, etc.)
├── prisma/              # Prisma schema and migrations
└── types/                # TypeScript type definitions
```

## 🗄️ Database

### Recommended: Neon (Easiest Setup)

**📖 See [DATABASE_ALTERNATIVES.md](./DATABASE_ALTERNATIVES.md) for all options**

**Quick setup with Neon:**
1. Go to https://neon.tech and create a free account
2. Create a new project
3. Copy the connection string (shown after project creation)
4. Add to `.env`:
   ```env
   DATABASE_URL="postgresql://[user]:[password]@[endpoint]/[dbname]?sslmode=require"
   ```
5. Test connection:
   ```bash
   npx prisma db pull
   ```
### Schema

See `../project-specifications/erd.png` for the complete database schema.

Key tables:
- `users` - User accounts
- `users_profiles` - User profile information
- `habits` - User-defined habits
- `habit_logs` - Habit completion logs
- `mood_logs` - Mood entries
- `journal_entrees` - Journal entries
- `goals` - User goals
- `goal_habits` - Goal-habit relationships
- `reminders` - Habit reminders
- `ai_insights` - AI-generated insights

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh JWT token
- `GET /api/auth/me` - Get current user

### Habits
- `GET /api/habits` - Get user's habits
- `POST /api/habits` - Create new habit
- `PUT /api/habits/:id` - Update habit
- `DELETE /api/habits/:id` - Delete habit
- `POST /api/habits/:id/log` - Log habit completion

### Mood
- `GET /api/mood` - Get mood logs
- `POST /api/mood` - Log mood entry

### Journal
- `GET /api/journal` - Get journal entries
- `POST /api/journal` - Create journal entry
- `PUT /api/journal/:id` - Update journal entry
- `DELETE /api/journal/:id` - Delete journal entry

### Goals
- `GET /api/goals` - Get user's goals
- `POST /api/goals` - Create new goal
- `PUT /api/goals/:id` - Update goal
- `DELETE /api/goals/:id` - Delete goal

### AI Insights
- `GET /api/insights` - Get AI insights
- `POST /api/insights/generate` - Generate new insights

## 🤖 AI Integration

### Gemini API

The backend uses Google Gemini API to:
- Generate weekly summaries
- Identify patterns in user data
- Provide personalized suggestions
- Create encouraging messages

Example usage:
```typescript
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const prompt = `Analyze this user's habit data and provide insights...`;
const result = await model.generateContent(prompt);
```

## 🔐 Authentication

JWT-based authentication:
1. User logs in with email/password
2. Server returns JWT token
3. Client includes token in `Authorization` header
4. Server validates token on protected routes

## 🧪 Testing

### Run tests
```bash
npm test
```

### Run with coverage
```bash
npm run test:coverage
```

## 📝 Environment Variables

Required:
- `DATABASE_URL` - PostgreSQL connection string
- `GEMINI_API_KEY` - Google Gemini API key
- `JWT_SECRET` - Secret for JWT signing

Optional:
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `CORS_ORIGIN` - Allowed CORS origins

## 🚀 Deployment

### Recommended Platforms
- **Railway** - Easy PostgreSQL + Node.js hosting
- **Render** - Free tier available
- **Fly.io** - Good for Docker deployments
- **Heroku** - Traditional option

### Steps
1. Set environment variables on hosting platform
2. Connect to PostgreSQL database
3. Run migrations
4. Deploy code
5. Update frontend `EXPO_PUBLIC_API_URL`

## 📚 Resources

- [Nuxt.js Documentation](https://nuxt.com/docs)
- [Nuxt Server Routes](https://nuxt.com/docs/guide/directory-structure/server#api-routes)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

