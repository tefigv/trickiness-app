import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { colors } from '../../theme/colors';

export default function JournalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.emptyContainer}>
          <Text variant="headlineSmall" style={styles.emptyTitle}>
            Journal
          </Text>
          <Text variant="bodyMedium" style={styles.emptyText}>
            Your journal entries will appear here
          </Text>
        </View>
      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => router.push('/journal/new')}
        label="New Entry"
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
    padding: 16,
    paddingBottom: 100, // Extra padding for FAB clearance
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
    bottom: 100, // Above bottom nav with proper spacing
  },
});
