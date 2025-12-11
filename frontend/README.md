# Trickiness App - Frontend

React Native mobile application built with Expo and TypeScript.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo Go app on your phone (for testing) OR iOS Simulator / Android Emulator

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
   - `EXPO_PUBLIC_API_URL` - Backend API URL (e.g., `http://127.0.0.1:3030`)
   - `EXPO_PUBLIC_GEMINI_API_KEY` - Gemini API key (if needed on frontend)

4. Start the development server:
```bash
npm start
```

This will open Expo DevTools. You can:
- Press `i` to open iOS simulator
- Press `a` to open Android emulator
- Scan QR code with Expo Go app on your phone

## 📁 Project Structure

```
frontend/
├── app/              # App routes (Expo Router)
│   ├── _layout.tsx   # Root layout
│   └── index.tsx     # Home screen
├── components/        # Reusable React Native components
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
├── hooks/            # Custom React hooks
├── assets/           # Images, fonts, etc.
└── scripts/          # Build scripts (asset generation, etc.)
```

## 🛠️ Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser (for testing)
- `npm run generate-assets` - Generate placeholder app icons and splash screens

## 🎨 UI Components

The app uses:
- **React Native** - Core framework
- **Expo Router** - File-based navigation
- **TypeScript** - Type safety

UI libraries to consider:
- React Native Paper
- NativeBase
- React Native Elements

## 📱 Features

### Current
- ✅ Basic app structure
- ✅ Expo Router setup
- ✅ TypeScript configuration
- ✅ Asset generation script

### Planned
- 🚧 Habit tracking screens
- 🚧 Mood logging interface
- 🚧 Journal entry editor
- 🚧 Goal management
- 🚧 User authentication
- 🚧 API integration
- 🚧 AI insights display

## 🔌 API Integration

The frontend communicates with the backend API. Make sure the backend is running before testing API calls.

Example API call:
```typescript
const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/habits`, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
```

## 🎯 Development Guidelines

1. **TypeScript**: Use TypeScript for all new files
2. **Components**: Create reusable components in `components/`
3. **Hooks**: Extract reusable logic into custom hooks in `hooks/`
4. **Types**: Define types in `types/` directory
5. **Styling**: Use StyleSheet or consider styled-components

## 📦 Building for Production

### iOS
```bash
eas build --platform ios
```

### Android
```bash
eas build --platform android
```

(Requires Expo Application Services account)

## 🐛 Troubleshooting

### iOS Simulator Not Launching

If the iOS simulator doesn't launch even though Xcode is installed, check the following:

1. **Verify Xcode is properly configured**:
   ```bash
   # Check if xcode-select points to full Xcode (not just command line tools)
   xcode-select -p
   # Should show: /Applications/Xcode.app/Contents/Developer
   # If it shows /Library/Developer/CommandLineTools, run:
   sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
   ```

2. **Accept Xcode license** (if prompted):
   ```bash
   sudo xcodebuild -license accept
   ```

3. **Install CocoaPods** (required for iOS dependencies):
   ```bash
   sudo gem install cocoapods
   ```

4. **Verify iOS simulators are available**:
   ```bash
   xcrun simctl list devices available
   ```

5. **If still not working, try**:
   ```bash
   # Open Xcode once to complete setup
   open -a Xcode
   # Then try again
   npm run ios
   ```

### Metro bundler issues
```bash
npm start -- --reset-cache
```

### Clear Expo cache
```bash
expo start -c
```

### Reinstall dependencies
```bash
rm -rf node_modules
npm install
```

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

