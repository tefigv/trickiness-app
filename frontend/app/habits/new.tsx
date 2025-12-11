import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Text,
  TextInput,
  Button,
  Card,
  SegmentedButtons,
  ActivityIndicator,
} from 'react-native-paper';
import { useRouter } from 'expo-router';
import { HabitType, FrequencyType, CreateHabitInput } from '../../types/habit';
import { colors } from '../../theme/colors';

export default function NewHabitScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<CreateHabitInput>({
    name: '',
    habitType: HabitType.OTHER,
    frequencyType: FrequencyType.DAILY,
    targetGoal: undefined,
  });

  const habitTypeOptions = [
    { value: HabitType.STUDY, label: 'Study' },
    { value: HabitType.GYM, label: 'Gym' },
    { value: HabitType.WATER, label: 'Water' },
    { value: HabitType.SLEEP, label: 'Sleep' },
    { value: HabitType.OTHER, label: 'Other' },
  ];

  const frequencyOptions = [
    { value: FrequencyType.DAILY, label: 'Daily' },
    { value: FrequencyType.WEEKLY, label: 'Weekly' },
    { value: FrequencyType.MONTHLY, label: 'Monthly' },
  ];

  const testConnection = async (apiUrl: string): Promise<boolean> => {
    try {
      const healthUrl = `${apiUrl}/api/health`;
      console.log('Testing connection to:', healthUrl);
      const response = await fetch(healthUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('Health check response:', data);
      return response.ok;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!formData.name.trim()) {
      return; // TODO: Show error message
    }

    setLoading(true);
    try {
      // Try multiple possible API URLs for iOS simulator
      // iOS simulator often can't reach localhost, so try Mac IP first
      const possibleUrls = [
        process.env.EXPO_PUBLIC_API_URL,
        'http://192.168.1.239:3030', // Your Mac's local IP (works best with iOS simulator)
        'http://127.0.0.1:3030',
        'http://localhost:3030',
      ].filter(Boolean) as string[];
      
      const apiUrl = possibleUrls[0] || 'http://192.168.1.239:3030';
      
      // First test connection with health endpoint
      const isConnected = await testConnection(apiUrl);
      if (!isConnected) {
        throw new Error(`Cannot reach backend at ${apiUrl}. Make sure backend is running on port 3030.`);
      }
      
      const url = `${apiUrl}/api/habits`;
      console.log('Attempting to create habit at:', url);
      console.log('Request body:', JSON.stringify(formData));
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // TODO: Add auth token when authentication is implemented
          // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response body:', responseText);
      
      if (response.ok) {
        const data = JSON.parse(responseText);
        console.log('Habit created successfully:', data);
        router.back();
      } else {
        const errorData = JSON.parse(responseText || '{}');
        console.error('Failed to create habit:', response.status, errorData);
        
        if (response.status === 401) {
          alert('Authentication required. Please log in first.');
        } else {
          alert(`Failed to create habit: ${response.status}\n${errorData.message || JSON.stringify(errorData)}`);
        }
      }
    } catch (error: any) {
      // Network error - backend might not be running or unreachable
      console.error('Error creating habit:', error);
      console.error('Error details:', {
        message: error?.message,
        stack: error?.stack,
      });
      
      if (__DEV__) {
        console.log('Troubleshooting:');
        console.log('1. Make sure backend is running: cd backend && npm run dev');
        console.log('2. Check backend is accessible at: http://127.0.0.1:3030/api/health');
        console.log('3. For iOS simulator, try using your Mac IP address: http://192.168.1.239:3030');
      }
      
      // Show user-friendly error message
      alert(`Network error: ${error?.message || 'Could not connect to server'}\n\nMake sure the backend is running on port 3030.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            Create New Habit
          </Text>

          <TextInput
            label="Habit Name"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
            mode="outlined"
            style={styles.input}
            placeholder="e.g., Drink 8 glasses of water"
          />

          <Text variant="labelLarge" style={styles.label}>
            Habit Type
          </Text>
          <SegmentedButtons
            value={formData.habitType}
            onValueChange={(value) =>
              setFormData({ ...formData, habitType: value as HabitType })
            }
            buttons={habitTypeOptions}
            style={styles.segmentedButtons}
          />

          <Text variant="labelLarge" style={styles.label}>
            Frequency
          </Text>
          <SegmentedButtons
            value={formData.frequencyType}
            onValueChange={(value) =>
              setFormData({ ...formData, frequencyType: value as FrequencyType })
            }
            buttons={frequencyOptions}
            style={styles.segmentedButtons}
          />

          <TextInput
            label="Target Goal (optional)"
            value={formData.targetGoal?.toString() || ''}
            onChangeText={(text) => {
              const num = parseInt(text, 10);
              setFormData({
                ...formData,
                targetGoal: isNaN(num) ? undefined : num,
              });
            }}
            mode="outlined"
            keyboardType="numeric"
            style={styles.input}
            placeholder="e.g., 8"
          />

          <View style={styles.buttonContainer}>
            <Button
              mode="outlined"
              onPress={() => router.back()}
              style={styles.button}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              mode="contained"
              onPress={handleSubmit}
              loading={loading}
              disabled={loading || !formData.name.trim()}
              style={styles.button}
            >
              Create Habit
            </Button>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  label: {
    marginTop: 8,
    marginBottom: 8,
    fontWeight: '600',
  },
  segmentedButtons: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    gap: 12,
  },
  button: {
    flex: 1,
  },
});

