import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './login.module.css';

export default function Login() {
  const intl = useIntl();

  return (
    <Container className={styles.authContainer}>
      <Row>
        <Col md="6" className={styles.loginForm}>
          <h3>
            <FormattedMessage id="signin" />
          </h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder={intl.formatMessage({ id: 'email' })}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                placeholder={intl.formatMessage({ id: 'password' })}
              />
            </Form.Group>
            <Form.Group className="pt-2 d-flex justify-content-center">
              <Button className={styles.btnSubmit} variant="primary" type="submit">
                <FormattedMessage id="login" />
              </Button>
            </Form.Group>
          </Form>
        </Col>

        <Col md="6" className={styles.signInForm}>
          <h3>
            <FormattedMessage id="signup" />
          </h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control placeholder={intl.formatMessage({ id: 'name' })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder={intl.formatMessage({ id: 'email' })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder={intl.formatMessage({ id: 'password' })} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Control placeholder={intl.formatMessage({ id: 'confirmpass' })} />
            </Form.Group>

            <Form.Group className="pt-2 d-flex justify-content-center">
              <Button className={styles.btnSubmit} variant="primary" type="submit">
                <FormattedMessage id="createAccount" />
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
