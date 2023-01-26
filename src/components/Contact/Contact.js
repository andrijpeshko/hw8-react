import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  Button,
  Text,
  Avatar
} from '@chakra-ui/react';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Text
      as="li"
      key={id}
      fontSize="30px"
      fontFamily="Raleway, sans-serif"
      fontWeight="400"
      mt="10px"
      display="flex"
      justifyContent="space-between"
    >
      <Avatar name="contact" src="contact_book2.png" />
      {name}:<Text as="span">{number}</Text>
      <Button
        as="button"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        borderRadius="5px"
        fontSize="20px"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
        size="md"
        ml="5px"
        boxShadow="md"
        _hover={{
          background: 'purple.400',
          color: 'purple.100',
          border: '1px',
          borderColor: '#9370DB',
        }}
      >
        Delete
      </Button>
    </Text>
  );
};
