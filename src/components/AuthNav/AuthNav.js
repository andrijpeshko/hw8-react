import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';


export const AuthNav = () => {
  return (
    <div>
      <Link
        as={NavLink}
        to="/register"
        display="inline-block"
        textDecoration="none"
        p="12px"
        fontWeight="700"
        color="#2a363b"
        borderRadius="5px"
        fontSize="20px"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
        mr="5px"
        size="md"
        _hover={{
          background: 'purple.300',
          color: 'purple.100',
          border: '1px',
          borderColor: '#9370DB',
        }}
      >
        Register
      </Link>
      <Link
        as={NavLink}
        to="/login"
        display="inline-block"
        textDecoration="none"
        p="12px"
        fontWeight="700"
        color="#2a363b"
        borderRadius="5px"
        fontSize="20px"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
        size="md"
        _hover={{
          background: 'purple.300',
          color: 'purple.100',
          border: '3px',
          borderColor: '#9370DB',
        }}
      >
        Log In
      </Link>
    </div>
  );
};

