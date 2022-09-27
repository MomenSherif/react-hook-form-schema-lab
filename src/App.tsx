import { Button, Center, Heading, VStack } from '@chakra-ui/react';

import Form from './components/Form';
import Select from './components/Select';
import TextField from './components/TextField';

type FormData = {
  firstName: string;
  lastName: string;
  country: string;
};

function App() {
  const handleSubmit = (data: FormData) => console.log(data);

  return (
    <Center minHeight="100vh">
      <Form<FormData>
        onSubmit={handleSubmit}
        defaultValues={{ firstName: 'Mama' }}
        noValidate
      >
        <VStack spacing="4">
          <Heading>React Hook Form Schema Lab 🔥</Heading>
          <TextField
            name="firstName"
            label="First name"
            validation="required|alpha|minLength:$length"
          />
          <TextField
            name="length"
            label="Length"
            validation="required|number"
            defaultValue={2}
            readOnly
          />
          <TextField
            name="lastName"
            label="Last name"
            validation="required|alpha"
          />
          <Select
            name="country"
            label="Country"
            placeholder="Select country"
            validation="required"
            options={[
              { label: 'Egypt', value: 'EG' },
              { label: 'France', value: 'FR' },
            ]}
          />
          <Button type="submit" w="full" mt="10!" colorScheme="teal">
            Submit
          </Button>
        </VStack>
      </Form>
    </Center>
  );
}

export default App;
