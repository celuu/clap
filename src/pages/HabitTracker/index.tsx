import { Container, VStack, Text, Grid, Button, HStack } from '@chakra-ui/react';
import { Card } from '../../components/Card';
import { useState } from 'react';
import { SingleHabit } from './SingleHabit';
import { createHabit } from '../../services/habitService';
import { AddIcon } from '@chakra-ui/icons';

export const HabitTracker = () => {
  const [habits, setHabits] = useState([
    { id: 1, label: 'Meditate', completed: false },
    { id: 2, label: 'Exercise', completed: false },
    { id: 3, label: 'Read', completed: false },
    { id: 4, label: 'Write', completed: false },
    { id: 5, label: 'Code', completed: false },
    { id: 6, label: 'Sleep', completed: false },
  ]);

  const handleCreate = async () => {
    await createHabit({
      label: 'Hello',
      completed: false,
    });
  };

  return (
    <>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={6} align="stretch">
          <HStack justify="space-between">
            <VStack spacing={2} align="stretch">
              <Text fontSize="2xl" fontWeight="bold">
                Habit Tracker
              </Text>
              <Text fontSize="md" color="gray.500" fontWeight="bold">
                Build consistency! Win the day!
              </Text>
            </VStack>
            <Button onClick={handleCreate} leftIcon={<AddIcon />}>
              Create Habit
            </Button>
          </HStack>

          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {habits.map((habit) => (
              <SingleHabit key={habit.id} label={habit.label} completed={habit.completed} />
            ))}
          </Grid>
        </VStack>
      </Container>
    </>
  );
};
