import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box, Heading } from '@chakra-ui/react';


export default function Login() {
  return (
    <Box
      as="div"
      m="0 auto"
      bgColor="#F0F0F0"
      w="400px"
      borderRadius="10px"
      boxShadow="dark-lg"
    >
      <Helmet>
        <Heading>Login</Heading>
      </Helmet>
      <LoginForm />
    </Box>
  );
}
