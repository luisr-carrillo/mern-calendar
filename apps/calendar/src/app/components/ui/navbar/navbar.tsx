import { faSignOutAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Navbar as BSNavbar,
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { changeLanguage } from '../../../features/languageSlice';
import { useAppDispatch } from '../../../hooks/useApps';
import { Locales } from '../../../i18n/locales';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const changeLang = (lang: Locales) => {
    dispatch(changeLanguage(lang));
  };

  return (
    <BSNavbar bg="dark" variant="dark" className="mb-3">
      <Container fluid>
        <BSNavbar.Brand href="#home">CalendarApp</BSNavbar.Brand>
        <div className="d-flex gap-3">
          <Dropdown id="dropdown-basic-button" drop="start" className="d-flex">
            <Dropdown.Toggle variant="link" bsPrefix="p-0">
              <FontAwesomeIcon icon={faGlobe} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLang(Locales.ENGLISH)}>
                <FormattedMessage id="english" />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLang(Locales.SPANISH)}>
                <FormattedMessage id="spanish" />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="outline-danger">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <FormattedMessage id="logout" />
          </Button>
        </div>
      </Container>
    </BSNavbar>
  );
}
