import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Navbar as BSNavbar } from 'react-bootstrap';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <BSNavbar bg="dark" variant="dark" className="mb-3">
      <Container fluid>
        <BSNavbar.Brand href="#home">Calendar</BSNavbar.Brand>
        <Button variant="outline-danger">
          <FontAwesomeIcon icon={faSignOutAlt} />
          Salir
        </Button>
      </Container>
    </BSNavbar>
  );
}
