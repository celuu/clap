import { Habit, HabitCompletion } from '@/types';
import { VStack, Text, Card } from '@chakra-ui/react';


type SingleHabitProps = {
  habit: Habit;
}

export const SingleHabit = ({ habit }: SingleHabitProps) => {
  return (
    <Card bgColor="white" borderRadius="lg" p={4} boxShadow="md" border="1px solid #e2e8f0">
      <VStack spacing={2} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          {habit.label}
        </Text>
        <Text fontSize="md" color="gray.500" fontWeight="bold">
          {habit.weekly_target}
        </Text>
      </VStack>
    </Card>
  );
};
