import { useState } from 'react';
import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Spinner } from 'reactstrap';
import InputFields from './InputFields';

const reportTypes = require('../../assets/reportTypes.json');

const SearchForm = ({ reportDetails: {type, name}, setReportDetails, loading, updateFields, handleSubmit }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectType = (reportType, reportName) => {
    setReportDetails({
      name: reportName,
      type: reportType
    });
  };

  const searchFields = type.length ? <InputFields type={type} name={name} updateFields={updateFields} handleSubmit={handleSubmit}/> : "";

  if(loading) {
    return (
      <Container>
        <h1>Loading...</h1>
        <Spinner></Spinner>
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
              <DropdownItem key={report.name.replace(/\s/g, "-")} onClick={() => selectType(report.type, report.name)}>
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