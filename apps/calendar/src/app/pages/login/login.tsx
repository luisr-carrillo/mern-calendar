import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './login.module.css';

export default function Login() {
  return (
    <Container className={styles.authContainer}>
      <Row>
        <Col md="6" className={styles.loginForm}>
          <h3>Ingreso</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Correo" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="pt-2 d-flex justify-content-center">
              <Button className={styles.btnSubmit} variant="primary" type="submit">
                Login
              </Button>
            </Form.Group>
          </Form>
        </Col>

        <Col md="6" className={styles.signInForm}>
          <h3>Registro</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Correo" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Contraseña" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Control placeholder="Repita la contraseña" />
            </Form.Group>

            <Form.Group className="pt-2 d-flex justify-content-center">
              <Button className={styles.btnSubmit} variant="primary" type="submit">
                Crear cuenta
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
