import { Modal as BSModal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { clearActiveEvent } from '../../features/calendar-slice';
import { closeModal } from '../../features/ui-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/use-apps';
import { ModalForm } from './modal-form';

export const Modal = () => {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.ui);
  const { activeEvent } = useAppSelector((state) => state.calendar);

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(clearActiveEvent());
  };

  return (
    <BSModal show={modal} onHide={handleClose}>
      <BSModal.Header closeButton>
        <BSModal.Title>
          {activeEvent ? (
            <FormattedMessage id="calendarFormUpdateEvent" />
          ) : (
            <FormattedMessage id="calendarFormNewEvent" />
          )}
        </BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>
        <ModalForm handleClose={handleClose} />
      </BSModal.Body>
    </BSModal>
  );
};
