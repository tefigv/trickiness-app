# Technology Stack - Trickiness App

## 📊 **Current Project Status**

| Component | Technology | Status |
|-----------|------------|--------|
| **Frontend** | React Native + Expo + TypeScript | ✅ Set Up |
| **Backend** | Node.js/Express + TypeScript | ⏳ To Set Up |
| **Database** | PostgreSQL | ⏳ To Set Up |
| **ORM** | Prisma | ⏳ To Set Up |
| **AI** | Google Gemini API | ⏳ To Set Up |
| **Auth** | JWT | ⏳ To Set Up |

---

## 🎯 Core Requirements
- Habit tracking with quick logging
- Mood logging (1-5 scale + optional tags)
- Journal entries
- Goal setting tied to habits
- AI-powered weekly insights using Gemini API
- User authentication

---

## 📊 **Database**

### **Recommended: PostgreSQL**
- **Why**: Your ERD shows a relational structure with foreign keys, JSON fields (`days_of_week` in reminders), and complex relationships
- **Free Tier**: 
  - Local development (free)
  - [Supabase](https://supabase.com) (free tier: 500MB database, 2GB bandwidth)
  - [Neon](https://neon.tech) (free tier: 0.5GB storage)
  - [Railway](https://railway.app) (free tier: $5 credit/month)
- **Alternatives**:
  - **MySQL/MariaDB**: Good alternative, but PostgreSQL has better JSON support
  - **SQLite**: Only for local dev/prototyping (not production-ready for multi-user)

### **ORM (Object-Relational Mapping)**
- **Python**: **SQLAlchemy** or **Prisma** (if using Python)
- **Node.js**: **Prisma** (recommended) or **TypeORM** or **Sequelize**
- **Why ORM**: Handles migrations, type safety, and makes queries easier

---

## 🔧 **Backend Framework**

### **Option 1: Node.js + Express/Fastify** ⭐ (Recommended for students)
- **Framework**: **Express.js** or **Fastify**
- **Language**: TypeScript (better type safety)
- **Why**: 
  - Large ecosystem
  - Easy Gemini API integration
  - Good for REST APIs
  - Many free hosting options
- **Packages**:
  - `express` or `fastify` - Web framework
  - `@prisma/client` - Database ORM
  - `@google/generative-ai` - Gemini API client
  - `bcrypt` - Password hashing
  - `jsonwebtoken` - JWT authentication
  - `zod` - Input validation

### **Option 2: Python + FastAPI**
- **Framework**: **FastAPI**
- **Why**: 
  - Auto-generated API docs
  - Great for AI/ML projects
  - Easy async support
- **Packages**:
  - `fastapi` - Web framework
  - `sqlalchemy` - ORM
  - `google-generativeai` - Gemini API
  - `passlib[bcrypt]` - Password hashing
  - `python-jose` - JWT tokens

### **Option 3: Next.js (Full-stack)** ⭐⭐ (Best for rapid development)
- **Framework**: **Next.js 14+** (App Router)
- **Why**: 
  - Frontend + Backend in one
  - Server Actions for API routes
  - Built-in authentication options
  - Great for solo projects
- **Packages**: Same as Node.js option

---

## 🎨 **Frontend** ✅ (Currently Set Up)

### **Using: React Native + Expo** ⭐
- **Framework**: **React Native** with **Expo** (SDK 52)
- **Language**: **TypeScript**
- **Navigation**: **Expo Router** (file-based routing)
- **Why**: 
  - Native mobile app (iOS & Android)
  - Fast development with Expo
  - Hot reload for quick iteration
  - Easy deployment with EAS Build

### **Current Packages** (Installed)
- `expo` - Expo SDK
- `expo-router` - File-based navigation
- `expo-status-bar` - Status bar component
- `expo-asset` - Asset management
- `expo-font` - Font loading
- `react` - React library
- `react-native` - React Native core
- `react-native-safe-area-context` - Safe area handling
- `react-native-screens` - Native screen components
- `typescript` - TypeScript support

### **UI Library Options** (To Add)
- **React Native Paper** ⭐ (Recommended) - Material Design components
- **NativeBase** - Comprehensive component library
- **React Native Elements** - Popular UI toolkit
- **Tamagui** - High-performance UI library

### **State Management** (To Add)
- **React Query (TanStack Query)** - For server state (API calls, caching)
- **Zustand** or **Jotai** - For client state (lightweight, simple)
- **Context API** - For simple global state (user auth, theme)

### **Form Handling** (To Add)
- **React Hook Form** - Performant form library
- **Zod** - Schema validation (works great with React Hook Form)

### **Date/Time Handling** (To Add)
- **date-fns** or **dayjs** - Lightweight date utilities
- **@react-native-community/datetimepicker** - Date/time picker

### **HTTP Client** (To Add)
- **Axios** - Popular HTTP client
- **fetch** - Built-in (but Axios has better error handling)

---

## 🤖 **AI Integration**

### **Gemini API**
- **Package**: 
  - Node.js: `@google/generative-ai`
  - Python: `google-generativeai`
- **Setup**: 
  - Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
  - Free tier available for students
- **Use Cases**:
  - Weekly summaries
  - Pattern detection (correlations between habits, mood, sleep)
  - Personalized suggestions
  - Encouraging messages

### **Prompt Engineering Tips**
- Store prompts in database (`ai_insights.prompt_used`)
- Use structured prompts with user data
- Cache insights to avoid excessive API calls

---

## 🔐 **Authentication**

### **Option 1: JWT (JSON Web Tokens)** ⭐ (Simple, good for learning)
- **Flow**: Email/password → JWT token → Store in localStorage/cookies
- **Packages**: `jsonwebtoken` (Node) or `python-jose` (Python)
- **Security**: Use httpOnly cookies for production

### **Option 2: NextAuth.js** (If using Next.js)
- **Why**: Built-in OAuth, email/password, session management
- **Easy setup**: Supports multiple providers

### **Option 3: Supabase Auth** (If using Supabase)
- **Why**: Built-in auth, email verification, password reset
- **Free tier**: 50,000 monthly active users

---

## 📱 **Mobile App** ✅ (Currently Set Up)

### **Using: React Native with Expo**
- **Status**: ✅ Frontend initialized and ready
- **Platform**: iOS & Android native apps
- **Development**: Expo Go app for testing
- **Build**: EAS Build for production apps

### **Expo Features**
- Hot reload for fast development
- Over-the-air updates (OTA)
- Easy asset management
- Built-in navigation with Expo Router
- Access to native device features

---

## 🚀 **Deployment & Hosting**

### **Frontend (Mobile App)**
- **EAS Build** ⭐ (Expo Application Services) - Build iOS & Android apps
- **App Store Connect** - iOS app distribution
- **Google Play Console** - Android app distribution
- **Over-the-Air Updates** - Update app without app store approval (Expo Updates)

### **Backend Hosting** (To Set Up)
- **Railway** ⭐ - Free $5/month credit, easy PostgreSQL setup
- **Render** - Free tier (with limitations)
- **Fly.io** - Free tier, good for Docker
- **Supabase** - If using Supabase for database (includes backend functions)
- **Heroku** - Traditional option (paid now)

### **Database Hosting** (To Set Up)
- **Supabase** ⭐ - PostgreSQL + Auth + Storage (free tier)
- **Neon** - Serverless PostgreSQL (free tier)
- **Railway** - PostgreSQL included with app hosting
- **Local PostgreSQL** - For development

---

## 📦 **Development Tools**

### **Package Manager**
- **Node.js**: `npm` or `pnpm` (faster)
- **Python**: `pip` or `poetry`

### **Version Control**
- **Git** + **GitHub** (free private repos for students)

### **Environment Variables**
- **`.env` files** - For local development
- **Vercel/Netlify env vars** - For production

### **Code Quality**
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **TypeScript** - Type safety (highly recommended)

---

## 🧪 **Testing** (Optional but recommended)

### **Frontend**
- **Vitest** - Fast unit testing
- **React Testing Library** - Component testing
- **Playwright** or **Cypress** - E2E testing

### **Backend**
- **Jest** (Node.js) or **pytest** (Python) - Unit tests
- **Supertest** (Node.js) - API testing

---

## 📊 **Analytics & Monitoring** (Optional)

### **Error Tracking**
- **Sentry** - Free tier for error tracking
- **LogRocket** - Session replay (free tier)

### **Analytics**
- **PostHog** - Open-source analytics (free tier)
- **Google Analytics** - Free, but privacy concerns

---

## 🎯 **Current Project Stack**

### **Full-Stack Mobile App** ⭐⭐⭐
```
Frontend: ✅ React Native + Expo + TypeScript (SET UP)
Backend: ⏳ Node.js/Express + TypeScript (TO SET UP)
Database: ⏳ PostgreSQL (TO SET UP)
ORM: ⏳ Prisma (TO SET UP)
Auth: ⏳ JWT (TO SET UP)
AI: ⏳ @google/generative-ai (Gemini) (TO SET UP)
Deployment: EAS Build (frontend) + Railway/Supabase (backend + DB)
```

### **Why This Stack?**
1. **One language** (TypeScript) for frontend and backend
2. **React Native** provides native mobile experience
3. **Expo** simplifies development and deployment
4. **Prisma** makes database work easy (when set up)
5. **Free hosting** options available
6. **Great documentation** and community
7. **Fast development** with hot reload

---

## 📚 **Learning Resources**

### **Frontend**
- **Expo Docs**: https://docs.expo.dev/
- **React Native Docs**: https://reactnative.dev/
- **Expo Router Docs**: https://docs.expo.dev/router/introduction/
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/

### **Backend** (To Set Up)
- **Express.js Docs**: https://expressjs.com/
- **Prisma Docs**: https://www.prisma.io/docs
- **Node.js Docs**: https://nodejs.org/docs

### **AI & Database**
- **Gemini API Docs**: https://ai.google.dev/docs
- **Supabase Docs**: https://supabase.com/docs
- **PostgreSQL Docs**: https://www.postgresql.org/docs/

---

## 🔄 **Development Workflow**

### **Completed** ✅
1. **Frontend Setup**:
   - ✅ Initialized React Native with Expo
   - ✅ Configured TypeScript
   - ✅ Set up Expo Router
   - ✅ Created project structure
   - ✅ Generated placeholder assets

### **Next Steps** ⏳
2. **Backend Setup**:
   - ⏳ Initialize Node.js/Express project
   - ⏳ Set up Prisma with PostgreSQL
   - ⏳ Configure environment variables
   - ⏳ Create database schema from ERD

3. **Database**:
   - ⏳ Create Prisma schema from ERD
   - ⏳ Run migrations
   - ⏳ Seed initial data (optional)

4. **Backend API**:
   - ⏳ Create API routes for CRUD operations
   - ⏳ Implement authentication (JWT)
   - ⏳ Set up Gemini API integration
   - ⏳ Add input validation (Zod)

5. **Frontend Development**:
   - ⏳ Build UI components
   - ⏳ Connect to backend API
   - ⏳ Add form validation
   - ⏳ Implement state management
   - ⏳ Add authentication flow

6. **AI Features**:
   - ⏳ Create prompt templates
   - ⏳ Build insight generation service
   - ⏳ Add caching for API responses
   - ⏳ Implement weekly insight generation

7. **Deploy**:
   - ⏳ Deploy backend to Railway/Render
   - ⏳ Set up PostgreSQL database
   - ⏳ Build mobile app with EAS Build
   - ⏳ Submit to App Store & Google Play

---

## 💡 **Additional Recommendations**

### **Real-time Features** (Future)
- **WebSockets**: For live habit logging
- **Server-Sent Events (SSE)**: For push notifications
- **Pusher** or **Ably**: Managed WebSocket services (free tiers)

### **Notifications**
- **Web Push API**: Browser notifications
- **Email**: SendGrid (free tier) or Resend (free tier)

### **File Storage** (If needed for journal attachments)
- **Supabase Storage** - Free tier
- **Cloudinary** - Free tier for images
- **AWS S3** - Pay-as-you-go

---

## ✅ **Project Checklist**

### **Frontend** ✅
- [x] Initialize React Native with Expo
- [x] Set up TypeScript
- [x] Configure Expo Router
- [x] Generate app assets
- [ ] Add UI component library
- [ ] Build habit tracking screens
- [ ] Implement mood logging UI
- [ ] Add journal entry editor
- [ ] Create goal management screens
- [ ] Add authentication screens
- [ ] Connect to backend API

### **Backend** ⏳
- [ ] Initialize Node.js/Express project
- [ ] Set up PostgreSQL database (Supabase/Neon)
- [ ] Initialize Prisma schema from ERD
- [ ] Run database migrations
- [ ] Get Gemini API key
- [ ] Set up authentication (JWT)
- [ ] Create basic CRUD APIs
- [ ] Implement habit endpoints
- [ ] Implement mood logging endpoints
- [ ] Implement journal endpoints
- [ ] Implement goal endpoints
- [ ] Integrate Gemini for insights
- [ ] Deploy backend to production

### **Deployment** ⏳
- [ ] Deploy backend API
- [ ] Set up production database
- [ ] Configure environment variables
- [ ] Build iOS app with EAS
- [ ] Build Android app with EAS
- [ ] Submit to App Store
- [ ] Submit to Google Play

---

## 📋 **Current Status**

- ✅ **Frontend**: React Native + Expo + TypeScript - **SET UP**
- ⏳ **Backend**: Node.js/Express - **TO BE SET UP**
- ⏳ **Database**: PostgreSQL - **TO BE SET UP**
- ⏳ **AI Integration**: Gemini API - **TO BE SET UP**

**Next Priority**: Set up the backend API server with Express.js, Prisma, and PostgreSQL.

**Note**: Start simple, add features incrementally. Focus on getting the core habit tracking working first, then add AI features.

