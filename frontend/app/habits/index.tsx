import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { Text, FAB, ActivityIndicator } from 'react-native-paper';
import { useRouter } from 'expo-router';
import HabitCard from '../../components/HabitCard';
import { Habit } from '../../types/habit';
import { colors } from '../../theme/colors';

export default function HabitsScreen() {
  const router = useRouter();
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchHabits = async () => {
    try {
      // Use environment variable or default to Mac IP for iOS simulator compatibility
      // iOS simulator often can't reach localhost/127.0.0.1
      const apiUrl = process.env.EXPO_PUBLIC_API_URL || 'http://192.168.1.239:3030';
      const response = await fetch(`${apiUrl}/api/habits`, {
        headers: {
          'Content-Type': 'application/json',
          // TODO: Add auth token
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setHabits(data.habits || []);
      } else {
        // Backend returned an error, show empty state
        console.warn('Failed to fetch habits:', response.status);
        setHabits([]);
      }
    } catch (error) {
      // Network error - backend likely not running
      // Silently fail and show empty state for development
      // In production, you might want to show a user-friendly error message
      if (__DEV__) {
        console.log('Backend not available - showing empty state. Start backend with: cd backend && npm run dev');
      }
      setHabits([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchHabits();
  };

  const handleHabitPress = (habitId: string) => {
    router.push(`/habits/${habitId}`);
  };

  const handleLogPress = (habitId: string) => {
    // Quick log - could navigate to detail screen or log directly
    router.push(`/habits/${habitId}?action=log`);
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Loading habits...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {habits.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text variant="headlineSmall" style={styles.emptyTitle}>
              No habits yet
            </Text>
            <Text variant="bodyMedium" style={styles.emptyText}>
              Create your first habit to start tracking!
            </Text>
          </View>
        ) : (
          habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onPress={() => handleHabitPress(habit.id)}
              onLogPress={() => handleLogPress(habit.id)}
              loggedToday={false} // TODO: Check if logged today
              streakCount={0} // TODO: Calculate streak
            />
          ))
        )}
      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => router.push('/habits/new')}
        label="New Habit"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 8,
    paddingBottom: 100, // Extra padding for FAB clearance
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loadingText: {
    marginTop: 16,
    color: colors.textMuted,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    minHeight: 400,
  },
  emptyTitle: {
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyText: {
    color: colors.textMuted,
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 140, // Above bottom nav with proper spacing
  },
});

