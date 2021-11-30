import { useState } from 'react';
import { Container } from 'reactstrap';
import SearchForm from './SearchForm/SearchForm';
import { fetchReports } from '../helpers';

const Display = () => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('');
  const [report, setReport] = useState(null);
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

    } catch (err) {
      console.error('Error submitting request for reports', err.message);
    }
  };

  if (report) {

  }

  return (
    <Container>
      <SearchForm 
        type={type}
        setType={setType}
        loading={loading} 
        handleSubmit={handleSubmit} 
        updateFields={updateState}
      />
    </Container>
  );
}

export default Display;
