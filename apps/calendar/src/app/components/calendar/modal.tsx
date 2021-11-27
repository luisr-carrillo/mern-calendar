import { Modal as BSModal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { ModalForm } from './modal-form';

export interface ModalProps {
  show: boolean;
  handleClose: () => void;
}

export const Modal = ({ show, handleClose }: ModalProps) => {
  return (
    <BSModal show={show} onHide={handleClose}>
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
