import { deleteHabit } from '../../services/habitService';
import { Habit, HabitCompletion } from '@/types';
import { CloseIcon } from '@chakra-ui/icons';
import { VStack, Text, Card, HStack, IconButton } from '@chakra-ui/react';


type SingleHabitProps = {
  habit: Habit;
}

export const SingleHabit = ({ habit }: SingleHabitProps) => {


  const handleDeleteHabit = async () => {
    console.log('deleting habit', habit.id);
    await deleteHabit(habit.id);
    console.log('habit deleted');
  };
  return (
    <Card bgColor="white" borderRadius="lg" p={4} boxShadow="md" border="1px solid #e2e8f0">
      <VStack spacing={2} align="stretch">
        <HStack justify="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          {habit.label.toUpperCase()}
        </Text>
        <IconButton bgColor="red.500" size="sm" aria-label="Delete Habit" icon={<CloseIcon />} onClick={handleDeleteHabit} />
        </HStack>
        <Text fontSize="md" color="gray.500" fontWeight="bold">
          Weekly Target: {habit.weekly_target}
        </Text>
      </VStack>
    </Card>
  );
};
