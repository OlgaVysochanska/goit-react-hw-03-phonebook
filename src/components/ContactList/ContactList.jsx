import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, deleting }) => {
  return (
    <ul className={styles.ul}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            deleting={deleting}
            nameId={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleting: PropTypes.func.isRequired,
};
