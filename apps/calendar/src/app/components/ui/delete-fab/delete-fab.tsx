import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { Button, Overlay, OverlayTrigger, Popover } from 'react-bootstrap';
import { OverlayInjectedProps } from 'react-bootstrap/esm/Overlay';
import ClickAwayListener from 'react-click-away-listener';
import { useIntl } from 'react-intl';
import { deleteEvent } from '../../../features/calendar-slice';
import { useAppDispatch, useAppSelector } from '../../../hooks/use-apps';
import MySwal from '../../../utils/swal';
import styles from './delete-fab.module.css';

export const DeleteFab = () => {
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const title = intl.formatMessage({ id: 'deleteTitle' });
  const text = intl.formatMessage({ id: 'deleteText' });
  const confirm = intl.formatMessage({ id: 'deleteConfirm' });
  const cancel = intl.formatMessage({ id: 'deleteCancel' });
  const btnDelete = intl.formatMessage({ id: 'btnDelete' });

  return (
    <Button
      variant="danger"
      className={styles.DeleteFab}
      onClick={() => {
        MySwal.fire({
          title,
          text,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: confirm,
          cancelButtonText: cancel,
          reverseButtons: true,
          customClass: {
            actions: 'd-flex justify-content-around w-50',
            cancelButton: 'btn btn-light',
            confirmButton: 'btn btn-danger',
          },
          buttonsStyling: false,
        }).then(({ isConfirmed }) => {
          if (isConfirmed) {
            dispatch(deleteEvent());
          }
        });
      }}
    >
      <FontAwesomeIcon icon={faTrash} /> {btnDelete}
    </Button>
  );
};
