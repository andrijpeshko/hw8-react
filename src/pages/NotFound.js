import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Text, Button} from '@chakra-ui/react';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoBackClick = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <Box>
      <Text textAlign="center">
        <Text as="b" fontSize="64px">
          404
        </Text>
        <Text>Sorry, we couldn't find that page</Text>
        <Box>
          <Button
            type="button"
            onClick={onGoBackClick}
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
            &#11013; GO BACK
          </Button>
        </Box>
      </Text>
      <Outlet />
    </Box>
  );
};

export default NotFound;
