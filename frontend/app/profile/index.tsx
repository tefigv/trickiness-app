import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Divider } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>U</Text>
        </View>
        <Text variant="headlineSmall" style={styles.name}>
          User Profile
        </Text>
        <Text variant="bodyMedium" style={styles.email}>
          user@example.com
        </Text>
      </View>

      <Divider style={styles.divider} />

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Account Settings
          </Text>
          <Button
            mode="text"
            onPress={() => {}}
            style={styles.settingButton}
            icon="account-edit"
          >
            Edit Profile
          </Button>
          <Button
            mode="text"
            onPress={() => {}}
            style={styles.settingButton}
            icon="lock"
          >
            Change Password
          </Button>
          <Button
            mode="text"
            onPress={() => {}}
            style={styles.settingButton}
            icon="bell"
          >
            Notifications
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            About
          </Text>
          <Text variant="bodyMedium" style={styles.aboutText}>
            Trickiness App v1.0.0
          </Text>
          <Text variant="bodySmall" style={styles.aboutText}>
            Your habit tracking and mood logging companion
          </Text>
        </Card.Content>
      </Card>

      <Button
        mode="outlined"
        onPress={() => {
          // TODO: Implement logout
          router.push('/');
        }}
        style={styles.logoutButton}
        icon="logout"
      >
        Log Out
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
    paddingBottom: 100, // Space for bottom nav
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4F7CAC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    color: '#666',
  },
  divider: {
    marginVertical: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
  settingButton: {
    justifyContent: 'flex-start',
    marginVertical: 4,
  },
  aboutText: {
    color: '#666',
    marginBottom: 8,
  },
  logoutButton: {
    marginTop: 16,
    marginBottom: 32,
  },
});
