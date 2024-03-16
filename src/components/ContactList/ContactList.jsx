import { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactItem } from '../ContactItem';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const isLoading = useSelector(contactsSelectors.getLoading);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}

      {contacts.length > 0 && !isLoading ? (
        <ul>
          {contacts.map(item => (
            <ContactItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
};
