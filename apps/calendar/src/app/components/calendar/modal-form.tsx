import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addHours, isAfter, isEqual } from 'date-fns';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import DateTimeRangePicker from 'react-datetime-picker';
import { FormattedMessage, useIntl } from 'react-intl';
import { addNewEvent, updateEvent } from '../../features/calendar-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/use-apps';
import { CalendarEvent } from '../../models/Calendar';
import MySwal from '../../utils/swal';

export interface ModalFormProps {
  handleClose: () => void;
}

const now = new Date().setHours(12, 0, 0, 0);

const formData = {
  title: '',
  notes: '',
  start: new Date(now),
  end: new Date(addHours(now, 1)),
};

export const ModalForm = ({ handleClose }: ModalFormProps) => {
  const dispatch = useAppDispatch();
  const { activeEvent } = useAppSelector((state) => state.calendar);
  const [titleError, setTitleError] = useState(false);
  const intl = useIntl();
  const calendarFormTitle = `${intl.formatMessage({ id: 'calendarFormTitle' })} *`;
  const calendarFormNotes = intl.formatMessage({ id: 'calendarFormNotes' });
  const [form, setForm] = useState(formData);

  const { title, notes, start, end } = form;

  useEffect(() => {
    if (activeEvent) {
      setForm({
        title: activeEvent.title,
        notes: activeEvent.notes,
        start: new Date(activeEvent.start),
        end: new Date(activeEvent.end),
      });
    } else {
      setForm(formData);
    }
  }, [activeEvent, setForm]);

  const handleInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEqual(start, end) || isAfter(start, end)) {
      MySwal.fire({
        title: 'Error',
        html: intl.formatMessage({ id: 'calendarFormDateError' }),
        icon: 'error',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-danger',
        },
      });
      return;
    }

    if (!title.trim()) {
      setTitleError(true);
      return;
    }

    setTitleError(false);
    const data = { ...form, start: start.toISOString(), end: end.toISOString() };
    // TODO - send to API
    if (activeEvent && activeEvent.id) {
      dispatch(updateEvent({ ...data, id: activeEvent.id, user: activeEvent.user }));
    } else {
      dispatch(
        addNewEvent({
          ...data,
          id: new Date().getTime(),
          user: { id: 1, name: 'Luis Carrillo' },
        }),
      );
    }
    handleClose();
    setForm(formData);
  };

  return (
    <Form noValidate autoComplete="off" onSubmit={onSubmit}>
      <Form.Floating className="mb-3">
        <DateTimeRangePicker
          value={start}
          className="form-control"
          onChange={(val) => {
            if (!val) return;
            setForm({ ...form, start: val });
          }}
        />
        <label htmlFor="calendarFormStart">
          <FormattedMessage id="calendarFormStart" /> *
        </label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <DateTimeRangePicker
          value={end}
          className="form-control"
          minDate={start}
          onChange={(val) => {
            if (!val) return;
            setForm({ ...form, end: val });
          }}
        />
        <label htmlFor="calendarFormEnd">
          <FormattedMessage id="calendarFormEnd" /> *
        </label>
      </Form.Floating>
      <hr />
      <FloatingLabel
        controlId="calendarFormTitle"
        label={calendarFormTitle}
        className="mb-3"
      >
        <Form.Control
          name="title"
          type="text"
          isInvalid={titleError}
          value={title}
          onChange={handleInputChange}
          placeholder={calendarFormTitle}
        />

        <Form.Text className="text-muted">
          <FormattedMessage id="calendarFormTitleDesc" />
        </Form.Text>
      </FloatingLabel>
      <FloatingLabel
        controlId="calendarFormNotes"
        label={calendarFormNotes}
        className="mb-3"
      >
        <Form.Control
          name="notes"
          as="textarea"
          value={notes}
          onChange={handleInputChange}
          placeholder={calendarFormNotes}
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <hr />
      <div className="d-grid gap-2">
        <Button type="submit" variant="outline-primary">
          <FontAwesomeIcon icon={faSave} /> <FormattedMessage id="save" />
        </Button>
      </div>
    </Form>
  );
};
