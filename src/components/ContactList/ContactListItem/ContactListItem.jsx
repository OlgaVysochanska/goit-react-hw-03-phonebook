import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

export const ContactListItem = ({ nameId, name, number, deleting }) => {
  return (
    <li className={styles.listItem}>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        className={styles.button}
        onClick={() => deleting(nameId)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  nameId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleting: PropTypes.func.isRequired,
};
