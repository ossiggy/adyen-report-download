import { useState } from 'react';
import { Container } from 'reactstrap';
import SearchForm from './SearchForm/SearchForm';
import { fetchReports } from '../helpers';

const Display = () => {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);
  const [reportDetails, setReportDetails] = useState({
    name: '',
    type: ''
  });
  const [fields, setFields] = useState({
    merchantAccount: '',
    username: '',
    password: '',
    start: '',
    end: ''
  });

  const updateState = e => {
    const { name, value } = e.target;
    setFields(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetchReports(reportDetails, fields);
      if (response) {
        return setLoading(false);
      };
    } catch (err) {
      console.error('Error submitting request for reports', err.message);
    }
  };

  return (
    <Container>
      <SearchForm 
        loading={loading}
        handleSubmit={handleSubmit}
        updateFields={updateState}
        reportDetails={reportDetails}
        setReportDetails={setReportDetails}
      />
    </Container>
  );
}

export default Display;
