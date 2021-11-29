import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { clearActiveEvent } from '../../../features/calendar-slice';
import { openModal } from '../../../features/ui-slice';
import { useAppDispatch } from '../../../hooks/use-apps';
import styles from './add-new-fab.module.css';

export const AddNewFab = () => {
  const dispatch = useAppDispatch();

  return (
    <Button
      variant="primary"
      className={styles.AddNewFab}
      onClick={() => {
        dispatch(clearActiveEvent());
        dispatch(openModal());
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  );
};
