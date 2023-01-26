import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onFilter } from 'redux/contacts/slice';
import { selectValueFilter } from 'redux/contacts/selectors';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const Filter = () => {
  const filter = useSelector(selectValueFilter);
  const dispatch = useDispatch();

  return (
    <FormControl
      as="div"
      fontSize="20px"
      fontFamily="Raleway, sans-serif"
      fontWeight="700"
    >
      <FormLabel
        as="div"
        htmlFor="filter"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="4px"
        color="purple"
        fontSize="20px"
        fontFamily="Raleway, sans-serif"
        fontWeight="700"
      >
        Find contacts by name
      </FormLabel>
      <Input
        as="input"
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={e => dispatch(onFilter(e.currentTarget.value))}
        placeholder="Contact name"
        boxShadow="md"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
        outline="none"
        w="256px"
        _hover={{
          border: '1px',
          borderColor: '#9370DB',
        }}
      />
    </FormControl>
  );
};
