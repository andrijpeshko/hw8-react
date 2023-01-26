import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectValueFilter, selectContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectValueFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log(contacts);

  const filteredContacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase().trim())
      )
    : contacts;

  return (
    <Box
      as="ul"
      alignItems="center"
      listStyleType="none"
      color="purple"
      backgroundColor="#F0F0F0"
    >
      {filteredContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
