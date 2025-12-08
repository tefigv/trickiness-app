# Trickiness App

A full-stack habit tracking and mood logging application with AI-powered insights.

## 📱 Project Overview

Trickiness App helps users:
- Track daily habits (study, gym, water, sleep, etc.)
- Log mood multiple times per day (1-5 scale + optional tags)
- Write short journal entries
- Set goals tied to habits (e.g., "Exercise 3x a week")
- Receive AI-powered weekly insights and pattern recognition

## 🏗️ Project Structure

```
trickiness-app/
├── frontend/              # React Native mobile app (Expo)
├── backend/               # Backend API server
└── project-specifications/ # ERD and project documentation
```

## 🚀 Quick Start

### Frontend (Mobile App)
See [frontend/README.md](./frontend/README.md) for setup instructions.

```bash
cd frontend
npm install
npm start
```

### Backend (API Server)
See [backend/README.md](./backend/README.md) for setup instructions.

```bash
cd backend
npm install
npm run dev
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router

### Backend
- **Framework**: To be determined (Node.js/Express or Python/FastAPI)
- **Database**: PostgreSQL
- **ORM**: Prisma (if Node.js) or SQLAlchemy (if Python)
- **AI**: Google Gemini API

## 📊 Database Schema

See `project-specifications/erd.png` for the complete Entity-Relationship Diagram.

The database includes:
- Users and profiles
- Habits and habit logs
- Mood logs
- Journal entries
- Goals and goal-habit relationships
- Reminders
- AI-generated insights

## 🔐 Environment Variables

Both frontend and backend require environment variables. See:
- `frontend/.env.example`
- `backend/.env.example`

## 📚 Documentation

- [Technology Stack Recommendations](./TECHNOLOGY_STACK.md) - Detailed tech stack analysis
- [Frontend README](./frontend/README.md) - Frontend setup and development
- [Backend README](./backend/README.md) - Backend setup and development

## 🎯 Features

- ✅ Habit tracking with quick logging
- ✅ Mood logging (1-5 scale + optional tags)
- ✅ Journal entries
- ✅ Goal setting tied to habits
- 🚧 AI-powered weekly insights (in development)
- 🚧 Pattern recognition (in development)
- 🚧 Personalized suggestions (in development)

## 📝 Development Workflow

1. **Start Backend**: `cd backend && npm run dev`
2. **Start Frontend**: `cd frontend && npm start`
3. **Test on Device**: Use Expo Go app or simulators

## 🤝 Contributing

This is a student project. Development guidelines:
- Use TypeScript for type safety
- Follow existing code style
- Write clear commit messages
- Test on both iOS and Android when possible

## 📄 License

Student project - CS452
