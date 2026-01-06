import { VStack, Text, Card } from '@chakra-ui/react';

export const SingleHabit = ({ label }: { label: string; }) => {
  return (
    <Card bgColor="white" borderRadius="lg" p={4} boxShadow="md" border="1px solid #e2e8f0">
      <VStack spacing={2} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          {label}
        </Text>
        <Text fontSize="md" color="gray.500" fontWeight="bold">
          
        </Text>
      </VStack>
    </Card>
  );
};
