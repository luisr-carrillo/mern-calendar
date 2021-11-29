import { Modal as BSModal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { closeModal } from '../../features/ui-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/use-apps';
import { ModalForm } from './modal-form';

export const Modal = () => {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.ui);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <BSModal show={modal} onHide={handleClose}>
      <BSModal.Header closeButton>
        <BSModal.Title>
          <FormattedMessage id="calendarFormEvent" />
        </BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>
        <ModalForm handleClose={handleClose} />
      </BSModal.Body>
    </BSModal>
  );
};
