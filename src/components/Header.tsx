import { Box, HStack, VStack, Text, Button, Icon } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

interface HeaderProps {
  userName?: string;
  date?: string;
}

export const Header = ({ userName = 'Christine', date }: HeaderProps) => {
  const today = date || new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Box w="full" bg="white" borderBottom="1px" borderColor="gray.200" px={8} py={6}>
      <HStack justify="space-between" align="center">
        <VStack align="flex-start" spacing={1}>
          <Text fontSize="3xl" fontWeight="bold">
            Good morning, {userName}
          </Text>
          <Text fontSize="md" color="gray.500">
            {today}
          </Text>
        </VStack>
        <Button
          leftIcon={<Icon as={AddIcon} />}
          colorScheme="brand"
          size="lg"
          px={8}
          borderRadius="xl"
        >
          Quick Log
        </Button>
      </HStack>
    </Box>
  );
};

