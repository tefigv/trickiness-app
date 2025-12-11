import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import BottomNav from '../components/BottomNav';
import HeaderWithUser from '../components/HeaderWithUser';
import { appTheme } from '../theme';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={appTheme}>
        <View style={styles.container}>
          <Stack>
            <Stack.Screen 
              name="index" 
              options={{ 
                title: 'Home', 
                headerShown: false,
              }} 
            />
            <Stack.Screen 
              name="habits" 
              options={{ 
                title: 'Habits',
                headerRight: () => <HeaderWithUser />,
              }} 
            />
            <Stack.Screen 
              name="habits/[id]" 
              options={{ 
                title: 'Habit Details',
                headerRight: () => <HeaderWithUser />,
              }} 
            />
            <Stack.Screen 
              name="habits/new" 
              options={{ 
                title: 'New Habit',
                headerRight: () => <HeaderWithUser />,
              }} 
            />
            <Stack.Screen 
              name="journal" 
              options={{ 
                title: 'Journal',
                headerRight: () => <HeaderWithUser />,
              }} 
            />
            <Stack.Screen 
              name="journal/new" 
              options={{ 
                title: 'New Entry',
                headerRight: () => <HeaderWithUser />,
              }} 
            />
            <Stack.Screen 
              name="goals" 
              options={{ 
                title: 'Goals',
                headerRight: () => <HeaderWithUser />,
              }} 
            />
            <Stack.Screen 
              name="goals/new" 
              options={{ 
                title: 'New Goal',
                headerRight: () => <HeaderWithUser />,
              }} 
            />
            <Stack.Screen 
              name="mood" 
              options={{ 
                title: 'Mood',
                headerRight: () => <HeaderWithUser />,
              }} 
            />
            <Stack.Screen 
              name="mood/new" 
              options={{ 
                title: 'Log Mood',
                headerRight: () => <HeaderWithUser />,
              }} 
            />
            <Stack.Screen 
              name="profile" 
              options={{ 
                title: 'Profile',
                headerShown: true,
              }} 
            />
          </Stack>
          <BottomNav />
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

