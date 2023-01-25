import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={styles.filter}>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
