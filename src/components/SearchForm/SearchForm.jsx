import { Container, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import InputFields from './InputFields';

const reportTypes = require('../../assets/reportTypes.json');

const SearchForm = props => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectType = (reportType, reportName) => {
    setType(reportType);
    setName(reportName);
  };

  const searchFields = type.length ? <InputFields type={type} name={name} /> : "";

  return (
    <Container>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownMenu>
          {reportTypes.map(report => {
            return (
              <DropdownItem key={report.name.join()} onClick={() => selectType(report.type, report.name)}>
                {report.name}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
      {searchFields}
    </Container>
  );
};

export default SearchForm;