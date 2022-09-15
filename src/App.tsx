import { useState } from 'react';
import { Button, Center, Heading, VStack } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Center minHeight="100vh">
      <VStack spacing="4">
        <Heading>React Hook Form Schema Lab 🔥</Heading>
        <Button onClick={() => setCount(c => c + 1)} colorScheme="red">
          Counter {count}
        </Button>
      </VStack>
    </Center>
  );
}

export default App;
