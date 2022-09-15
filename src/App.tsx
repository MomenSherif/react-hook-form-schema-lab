import { Button, Center, Heading, VStack } from '@chakra-ui/react';

import Form from './components/Form';
import TextField from './components/TextField';

function App() {
  const handleSubmit = (data: any) => console.log(data);

  return (
    <Center minHeight="100vh">
      <VStack as={Form} spacing="4" onSubmit={handleSubmit}>
        <Heading>React Hook Form Schema Lab 🔥</Heading>
        <TextField name="firstName" label="First name" />
        <TextField name="lastName" label="Last name" />
        <Button type="submit" w="full" mt="10!" colorScheme="teal">
          Submit
        </Button>
      </VStack>
    </Center>
  );
}

export default App;
