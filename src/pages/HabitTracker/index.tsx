import { Container, VStack, Text } from '@chakra-ui/react';
import { Card } from '../../components/Card';

export const HabitTracker = () => {
  return (
    <>

      <Container maxW="container.xl" py={8}>
        <VStack spacing={6} align="stretch">
          <Card>
            <Text fontSize="2xl" fontWeight="bold">Habit Tracker Page</Text>
            <Text color="gray.500" mt={2}>
              Build your habit tracking interface here!
            </Text>
          </Card>
        </VStack>
      </Container>
    </>
  );
};