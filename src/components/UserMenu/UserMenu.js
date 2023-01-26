import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box, Text, Button, Flex, Avatar } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex as="div" alignItems="center" gap="12px">
      <Box as="div" display="flex">
        <Avatar
          name={user.name}
          src="avatar.jpg"
        />
        <Box as="div">
          <Text as="p" fontWeight="700">
            Welcome, {user.name}
          </Text>
          <Text as="p" fontWeight="700">
            {user.email}
          </Text>
        </Box>
      </Box>
      <Button
        as="button"
        type="button"
        onClick={() => dispatch(logOut())}
        display="inline-block"
        textDecoration="none"
        p="12px"
        h="56px"
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
        Logout
      </Button>
    </Flex>
  );
};
