import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import CheckBox from './components/Checkbox';
import CheckboxGroup from './components/CheckboxGroup';

import Form from './components/Form';
import RadioGroup from './components/RadioGroup';
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
      <Form<FormData> onSubmit={handleSubmit} noValidate>
        <VStack spacing="4">
          <Heading>React Hook Form Schema Lab 🔥</Heading>
          <TextField
            name="firstName"
            label="First name"
            validation="required|matches:/^[a-z]+$/i"
          />
          <TextField name="length" label="Length" defaultValue={2} readOnly />
          <TextField
            name="lastName"
            label="Last name"
            validation="required|alpha"
            required
          />
          <Select
            name="country"
            label="Country"
            placeholder="Select country"
            required
            multiple
            validation="required"
            options={[
              { label: 'Egypt', value: 'EG' },
              { label: 'France', value: 'FR' },
            ]}
          />
          <CheckboxGroup
            name="hobbies"
            label="Hobbies"
            options={[
              { label: 'Football', value: 'football' },
              { label: 'Basketball', value: 'basketball' },
              { label: 'Tennis', value: 'tennis', disabled: true },
            ]}
            validation="required|minLength:2"
          />
          <RadioGroup
            name="gender"
            label="Gender"
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
            validation="required"
          />
          <CheckBox
            name="terms"
            label="I agree to terms & conditions"
            required
            validation="required"
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
