import { Flex, Text, Box, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animation = keyframes`
   0% {
    transform: skewX(20deg);
  }
  25% {
    transform: skewX(-20deg);
  }
  50% {
    transform: skewX(0deg);
  }
  75% {
    transform: skewX(-20deg);
  }
  100% {
    transform: skewX(20deg);
  }
`;

export default function Home() {
  const textAnimation = `${animation} infinite 5s`;
  return (
    <Flex
      as="div"
      minH="calc(100vh - 50px)"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#F0F0F0"
      boxShadow="dark-lg"
      borderRadius="10px"
    >
      <Box
        h="100px"
        backgroundColor="purple.400"
        p="0 50px"
        as={motion.div}
        animation={textAnimation}
      >
        <Text
          as="h1"
          fontWeight="500"
          fontSize="60px"
          textAlign="center"
          bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, orange.100, purple.300)',
          ]}
          bgClip="text"
        >
          Phonebook welcome page{' '}
        </Text>
      </Box>
    </Flex>
  );
}
