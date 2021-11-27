import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addHours, isAfter, isEqual } from 'date-fns';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import DateTimeRangePicker from 'react-datetime-picker';
import { FormattedMessage, useIntl } from 'react-intl';
import MySwal from '../../utils/swal';

export interface ModalFormProps {
  handleClose: () => void;
}

const now = new Date().setHours(12, 0, 0, 0);

export const ModalForm = ({ handleClose }: ModalFormProps) => {
  const [titleError, setTitleError] = useState(false);
  const [startDate, setStartDate] = useState(new Date(now));
  const [endDate, setEndDate] = useState(new Date(addHours(now, 1)));
  const [form, setForm] = useState({
    title: '',
    notes: '',
    start: startDate,
    end: endDate,
  });
  const intl = useIntl();
  const calendarFormTitle = `${intl.formatMessage({ id: 'calendarFormTitle' })} *`;
  const calendarFormNotes = intl.formatMessage({ id: 'calendarFormNotes' });

  const { title, notes, start, end } = form;

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
    // TODO - send to API
    // eslint-disable-next-line no-console
    console.log({ form });
    handleClose();
  };

  return (
    <Form noValidate autoComplete="off" onSubmit={onSubmit}>
      <Form.Floating className="mb-3">
        <DateTimeRangePicker
          value={startDate}
          className="form-control"
          onChange={(val) => {
            if (!val) return;
            setStartDate(val);
            setForm({ ...form, start: val });
          }}
        />
        <label htmlFor="calendarFormStart">
          <FormattedMessage id="calendarFormStart" /> *
        </label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <DateTimeRangePicker
          value={endDate}
          className="form-control"
          minDate={startDate}
          onChange={(val) => {
            if (!val) return;
            setEndDate(val);
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
          className={titleError ? 'is-invalid' : ''}
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
