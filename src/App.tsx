import { Button, Center, Heading, VStack } from '@chakra-ui/react';

import Form from './components/Form';
import TextField from './components/TextField';

type FormData = {
  firstName: string;
  lastName: string;
};

function App() {
  const handleSubmit = (data: FormData) => console.log(data);

  return (
    <Center minHeight="100vh">
      <Form<FormData> onSubmit={handleSubmit}>
        <VStack spacing="4">
          <Heading>React Hook Form Schema Lab 🔥</Heading>
          <TextField name="firstName" label="First name" />
          <TextField name="lastName" label="Last name" />
          <Button type="submit" w="full" mt="10!" colorScheme="teal">
            Submit
          </Button>
        </VStack>
      </Form>
    </Center>
  );
}

export default App;
