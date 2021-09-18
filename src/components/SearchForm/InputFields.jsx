import { useState } from 'react';
import { FormGroup, Label, Input, Button } from "reactstrap";

const InputFields = ({ type }) => {
  const [range, setRange] = useState({
    start: '',
    end: ''
  });
  const placeholder = type === "date-based" ? "MM-DD-YYYY" : "20";

  const updateState = e => {
    const { name, value } = e.target;
    setRange(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  return (
    <Form>
      <FormGroup>
        <Label for="start">Start</Label>
        <Input id="start" name="start" placeholder={placeholder} onChange={(e) => updateState(e)}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="end">End</Label>
        <Input id="end" name="end" placeholder={placeholder} onChange={(e) => updateState(e)}></Input>
      </FormGroup>
      <Button id="submit" type="submit">Download</Button>
    </Form>
  );
};

export default InputFields;