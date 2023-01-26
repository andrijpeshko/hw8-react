import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { AiOutlineApple } from 'react-icons/ai';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { Box, Flex, Heading } from '@chakra-ui/react';

export default function Contacts() {
  return (
    <Box
      as="div"
      minH="calc(100vh - 50px)"
      backgroundColor="#F0F0F0"
      p="16px"
      textAlign="center"
      m="10px auto"
      borderRadius="10px"
      boxShadow="dark-lg"
      lineHeight="1.8"
    >
      <Flex as="div" alignItems="center" justifyContent="center">
        <Heading
          as="h1"
          color="purple"
          fontSize="24px"
          fontFamily="Raleway, sans-serif"
          fontWeight="400"
          mr="15px"
        >
          Phonebook
        </Heading>
        <AiOutlineApple color="purple" fontSize="3em" />
      </Flex>
      <ContactForm />
      <Flex as="div" alignItems="center" justifyContent="center">
        <Heading
          as="h2"
          color="purple"
          fontSize="24px"
          fontFamily="Raleway, sans-serif"
          fontWeight="400"
          mr="15px"
        >
          Contacts
        </Heading>
        <AiOutlineUsergroupAdd color="purple" fontSize="3em" />
      </Flex>
      <Filter />
      <ContactList />
    </Box>
  );
}
