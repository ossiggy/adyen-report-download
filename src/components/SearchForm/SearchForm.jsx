import { useState } from 'react';
import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Spinner } from 'reactstrap';
import InputFields from './InputFields';

const reportTypes = require('../../assets/reportTypes.json');

const SearchForm = ({ type, loading, setType, updateFields, handleSubmit }) => {
  
  const [name, setName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectType = (reportType, reportName) => {
    setType(reportType);
    setName(reportName);
  };

  const searchFields = type.length ? <InputFields type={type} name={name} updateFields={updateFields} handleSubmit={handleSubmit}/> : "";

  if(loading) {
    return (
      <Container>
        <h1>Loading...</h1>
        <Spinner>Loading...</Spinner>
      </Container>
    )
  };

  return (
    <Container>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Report Type
        </DropdownToggle>
        <DropdownMenu>
          {reportTypes.map(report => {
            console.log(report)
            return (
              <DropdownItem key={report.name.replace(/ /g, "-")} onClick={() => selectType(report.type, report.name)}>
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