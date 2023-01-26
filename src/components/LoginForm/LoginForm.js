import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormControl
      as="form"
      w="320px"
      m="0 auto"
      onSubmit={handleSubmit}
      pt="30px"
      pb="30px"
      isRequired
      autoComplete="off"
    >
      <FormLabel as="label" htmlFor="email" display="flex" fontSize="20px">
        Email
      </FormLabel>
      <Input
        as="input"
        type="email"
        name="email"
        placeholder="Email"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
        boxShadow="md"
        _hover={{
          border: '1px',
          borderColor: '#9370DB',
        }}
      />
      <FormLabel as="label" htmlFor="password" display="flex" fontSize="20px">
        Password
      </FormLabel>
      <Input
        as="input"
        type="password"
        name="password"
        placeholder="Password"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
        boxShadow="md"
        _hover={{
          border: '1px',
          borderColor: '#9370DB',
        }}
      />
      <Button
        as="button"
        type="submit"
        ml="121px"
        mt="10px"
        fontSize="20px"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
        size="md"
        boxShadow="md"
        _hover={{
          background: 'purple.300',
          color: 'purple.100',
          border: '3px',
          borderColor: '#9370DB',
        }}
      >
        Log In
      </Button>
    </FormControl>
  );
};
