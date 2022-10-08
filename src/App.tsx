import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import CheckBox from './components/Checkbox';
import CheckboxGroup from './components/CheckboxGroup';
import DatePicker from './components/DatePicker';
import DepSelect from './components/DepSelect';

import Form from './components/Form';
import RadioGroup from './components/RadioGroup';
import Select from './components/Select';
import TextField from './components/TextField';

type FormData = {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
};

function App() {
  const handleSubmit = (data: FormData) =>
    console.log(data, JSON.stringify(data));

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
            required
            options={[
              { label: 'Egypt', value: 'EG' },
              { label: 'France', value: 'FR' },
            ]}
            validation="required"
          />
          <DepSelect
            name="city"
            label="City"
            dependency="country"
            required
            validation="required"
            optionsMap={{
              EG: [
                { label: 'Cairo', value: 'cairo' },
                { label: 'Alexandria', value: 'alex' },
              ],
              FR: [{ label: 'Paris', value: 'paris' }],
            }}
            autoFocusOnDepChange
          />
          <DatePicker
            name="birthday"
            label="Date of Birth"
            validation="required|dateBetween:2022/10/10,2022/10/20"
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
