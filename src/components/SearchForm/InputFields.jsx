import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import InputRange from "./InputRange";

const InputFields = ({ type, updateFields, handleSubmit }) => {
  const [range, setRange] = useState({
    min: '',
    max: ''
  });

  const setValidDates = (e, pole) => {
    const date = e.target.value.split("-");
    const month = Number(date[1]);

    let min, max;

    if (pole === "start") {
      min = e.target.value;
      max = `${date[0]}-${month + 1}-01`;
    } else if (pole === "end") {
      min = `${date[0]}-${month-1}-01`;
      max = e.target.value;
    };

    setRange(prevState => ({
      ...prevState,
      min,
      max
    }));


  };

  return (
    <Form onSubmit={e => handleSubmit(e, range.min, range.max)}>
      <FormGroup>
        <Label for="merchantAccount">Merchant Account</Label>
        <Input id="merchantAccount" name="merchantAccount" onChange={(e) => updateFields(e)}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="username">Report Username</Label>
        <Input id="username" name="username" placeholder="Reporting webservice user" onChange={(e) => updateFields(e)}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="password">Report Password</Label>
        <Input id="password" name="password"  onChange={(e) => updateFields(e)}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="start">Start</Label>
        <InputRange 
          name="start"
          type={type}
          min={range.min}
          max={range.max}
          setValidDates={setValidDates}
        />
      </FormGroup>
      <FormGroup>
        <Label for="end">End</Label>
        <InputRange 
          name="end"
          type={type}
          min={range.min}
          max={range.max}
          setValidDates={setValidDates}
        />
      </FormGroup>
      <FormGroup>
        <Button id="submit" type="submit">Create Report</Button>
      </FormGroup>
    </Form>
  );
};

export default InputFields;