import { VStack, Text } from '@chakra-ui/react';

export const SingleHabit = ({ label, completed }: { label: string; completed: boolean }) => {
  return (
    <VStack spacing={2} align="stretch">
      <Text fontSize="2xl" fontWeight="bold">
        {label}
      </Text>
      <Text fontSize="md" color="gray.500" fontWeight="bold">
        {completed ? 'Completed' : 'Not Completed'}
      </Text>
    </VStack>
  );
};
